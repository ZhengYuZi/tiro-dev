export const throttle = (fn: Function, time: number) => {
  let flag: boolean = true
  return function () {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, time)
  }
}
