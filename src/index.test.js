import test from "ava"

import * as index from "./index.cjs"

test("the project index exports its version", t => {
  t.is(typeof index.version, "string")
})
