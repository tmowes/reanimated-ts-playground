/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable testing-library/await-async-utils */
export function debounce(fn: any, wait = 1000, time: NodeJS.Timeout) {
  return (...args: any[]) => {
    clearTimeout(time)
    time = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}
