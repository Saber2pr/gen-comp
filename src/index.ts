#!/usr/bin/env node

import { Terminal } from '@saber2pr/node'
import { App } from './core'

export * from './core/index'

async function main() {
  const [dir, ...comps] = Terminal.getParams()

  if (dir === '-v') {
    const pkg = await Terminal.getCurrentPkgConfig(__dirname)

    console.log(pkg.version)
    return
  }

  await App(dir, comps)
}

main().catch(console.log)
