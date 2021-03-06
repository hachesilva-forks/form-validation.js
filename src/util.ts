import { Path } from '../type/index'

export function toString(object: any): string {
  return Object.prototype.toString.call(object)
}

export function isPlainObject(object: any): boolean {
  return toString(object) === '[object Object]'
}

export function isArray(object: any): boolean {
  return toString(object) === '[object Array]'
}

export function isFunction(object: any): boolean {
  return typeof object === 'function'
}

export function isPromise(object: any): boolean {
  return object !== null && typeof object === 'object' && isFunction(object.then)
}

export function hasKey(object: { [key: string]: any }, key: string): boolean {
  return object.hasOwnProperty(key)
}

interface Cache<T> {
  object: T
  copy: T
}
export function deepCopy<T>(object: T, cache: Cache<T>[] = []): T {
  if (object === null || (isArray(object) === false && isPlainObject(object) === false)) {
    return object
  }

  const cachedIndex = cache.findIndex(item => item.object === object)
  if (cachedIndex !== -1) {
    return cache[cachedIndex].copy
  }

  const copy: T = (isPlainObject(object) ? {} : []) as T
  cache.push({
    object,
    copy,
  })

  Object.keys(object).forEach(key => {
    ;(copy as any)[key] = deepCopy((object as any)[key], cache)
  })

  return copy as T
}

export function getByPath(object: object | any[], path: Path) {
  if (path.length === 0) return object

  let deepestParent: any = object
  path.slice(0, -1).forEach(p => {
    deepestParent = deepestParent[p]
  })

  return deepestParent[path[path.length - 1]]
}

export function setByPath(object: object | unknown[], path: Path, value: unknown) {
  if (path.length === 0) return value

  const deepestParent = getByPath(object, path.slice(0, -1))
  deepestParent[path[path.length - 1]] = value
  return value
}

export function noop(...args: any): any {}

export function identity<T>(any: T): T {
  return any
}

type Fn = (...args: Args) => any
type Args = any[]
export function curry(fn: Fn, ...args1: Args): any {
  return fn.length === args1.length ? fn(...args1) : (...args2: Args) => curry(fn, ...args1, ...args2)
}
