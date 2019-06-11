/*
 * @Author: saber2pr
 * @Date: 2019-06-11 19:23:39
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-11 19:26:39
 */
// twoside -> Twoside
// two-side -> TwoSide
export const veryName = (name: string) => {
  if (name.includes('-')) {
    const chars = name.split('-')
    return chars.map(toUpperCase).join('')
  }

  return toUpperCase(name)
}

const toUpperCase = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1)
