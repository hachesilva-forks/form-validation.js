import { privateKey, pathKey, IBaseValidator, publicKey } from './proxy'

export interface IStatableValidator extends IBaseValidator {
  [privateKey]: {
    [pathKey]: string[]
    [key: string]: any

    invalid: boolean
    validated: boolean
    pending: number
    dirty: boolean
    setValidated: (value: boolean) => void
    setInvalid: (value: boolean) => void
    setDirty: (value: boolean) => void
    setPending: (value: boolean) => void
    resetPending: () => void
  }
  [publicKey]: {
    [key: string]: any

    pending: boolean
    invalid: boolean
    dirty: boolean
    anyDirty: boolean
    error: boolean
    anyError: boolean
    errors: {
      [key: string]: any
    }
  }

  [key: string]: any
}

export function wrapState(validator: IBaseValidator) {
  const theValidator = validator as IStatableValidator

  if (theValidator[privateKey].invalid !== undefined) return

  theValidator[privateKey].invalid = false
  theValidator[privateKey].validated = false
  theValidator[privateKey].pending = 0
  theValidator[privateKey].dirty = false
  theValidator[privateKey].setValidated = setPrivateValidated(theValidator)
  theValidator[privateKey].setInvalid = setPrivateInvalid(theValidator)
  theValidator[privateKey].setDirty = setPrivateDirty(theValidator)
  theValidator[privateKey].setPending = setPrivatePending(theValidator)
  theValidator[privateKey].resetPending = resetPrivatePending(theValidator)

  Object.defineProperty(theValidator[publicKey], 'pending', {
    enumerable: true,
    get() {
      return getPending(theValidator)
    },
  })
  Object.defineProperty(theValidator[publicKey], 'invalid', {
    enumerable: true,
    get() {
      return getInvalid(theValidator)
    },
  })
  Object.defineProperty(theValidator[publicKey], 'dirty', {
    enumerable: true,
    get() {
      return getDirty(theValidator)
    },
  })
  Object.defineProperty(theValidator[publicKey], 'anyDirty', {
    enumerable: true,
    get() {
      return getAnyDirty(theValidator)
    },
  })
  Object.defineProperty(theValidator[publicKey], 'error', {
    enumerable: true,
    get() {
      return getError(theValidator)
    },
  })
  Object.defineProperty(theValidator[publicKey], 'anyError', {
    enumerable: true,
    get() {
      return getAnyError(theValidator)
    },
  })
  theValidator[publicKey].errors = {}
}

const setPrivateValidated = (validator: IStatableValidator) => (value: boolean) => {
  validator[privateKey].validated = value
}

const setPrivateInvalid = (validator: IStatableValidator) => (value: boolean) => {
  validator[privateKey].invalid = value
}

const setPrivateDirty = (validator: IStatableValidator) => (value: boolean) => {
  validator[privateKey].dirty = value
}

const setPrivatePending = (validator: IStatableValidator) => (value: boolean) => {
  validator[privateKey].pending += value === true ? 1 : -1
}

const resetPrivatePending = (validator: IStatableValidator) => () => {
  validator[privateKey].pending = 0
}

const getPending = (validator: IStatableValidator) => {
  return (
    validator[privateKey].pending !== 0 ||
    getNested(validator).some(nestedValidator => nestedValidator[publicKey].pending)
  )
}

const getInvalid = (validator: IStatableValidator) => {
  return (
    (validator[privateKey].invalid && validator[privateKey].pending === 0) ||
    getNested(validator).some(nestedValidator => nestedValidator[publicKey].invalid)
  )
}

const getDirty = (validator: IStatableValidator) => {
  return (
    validator[privateKey].dirty ||
    (getNested(validator).length !== 0 &&
      getNested(validator).every(nestedValidator => nestedValidator[publicKey].dirty))
  )
}

const getAnyDirty = (validator: IStatableValidator) => {
  return (
    validator[privateKey].dirty || getNested(validator).some(nestedValidator => nestedValidator[publicKey].anyDirty)
  )
}

const getError = (validator: IStatableValidator) => {
  return validator[privateKey].dirty && validator[privateKey].invalid && validator[privateKey].pending === 0
}

const getAnyError = (validator: IStatableValidator) => {
  return (
    (validator[privateKey].dirty && validator[privateKey].invalid && validator[privateKey].pending === 0) ||
    getNested(validator).some(nestedValidator => nestedValidator[publicKey].anyError)
  )
}

export const getNested = (validator: IStatableValidator): IStatableValidator[] => {
  return Object.keys(validator)
    .filter(key => key !== privateKey && key !== publicKey)
    .map(key => (validator as any)[key])
}
