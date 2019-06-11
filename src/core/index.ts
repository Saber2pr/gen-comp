/*
 * @Author: saber2pr
 * @Date: 2019-06-11 20:42:39
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-11 20:45:08
 */
import { FS, Terminal } from '@saber2pr/node'
import { TSX, Style } from './template'
import * as path from 'path'
import { veryName } from './utils/veryName'

async function createComp(dir: string, name: string) {
  const comp = path.join(dir, name)

  if (await FS.exists(comp)) {
    Terminal.error(`component: [${comp}] is exist!`)
    return
  }

  await FS.mkdir(comp)

  const tsx = TSX(veryName(name))
  const style = Style(veryName(name))

  await Promise.all([
    FS.writeFile(path.join(comp, 'index.tsx'), tsx),
    FS.writeFile(path.join(comp, 'style.less'), style)
  ])
}

export async function App(dir: string, comps: string[]) {
  if (!(await FS.exists(dir))) await FS.mkPath(dir)

  await Promise.all(comps.map(c => createComp(dir, c)))
}
