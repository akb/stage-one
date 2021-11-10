import test from "ava"

import { promisify } from "util"
import child_process from "child_process"

const exec = promisify(child_process.exec)

test('running via the command-line writes "Hello world" to STDOUT', async t => {
  const { stdout } = await exec('node src/index.cjs')
  t.is(stdout.trim(), 'Hello world')
})