import { veryName } from '../core/utils/veryName'
import { TSX, Style } from '../core/template'
import * as path from 'path'
import { FS } from '@saber2pr/node'
// const name = veryName('two-side')

// console.log(TSX(name))
// console.log(Style(name))
console.log(path.join('src/component/two-side', 'index'))

FS.writeFile('./src/comps/two-side/index.tsx', 'aa')
