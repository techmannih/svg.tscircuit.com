import { expect, test } from "bun:test"
import { getCompressedBase64SnippetString } from "@tscircuit/create-snippet-url"
import { getTestServer } from "./fixtures/get-test-server"
import { getRequestContext } from "../lib/getRequestContext"

test("showsoldermask=true sets showSolderMask flag", async () => {
  const request = new Request("https://example.com?showsoldermask=true")
  const ctxOrResponse = await getRequestContext(request)
  if (ctxOrResponse instanceof Response) {
    throw new Error("Expected request context, received Response")
  }

  expect(ctxOrResponse.showSolderMask).toBe(true)
})

test("showsoldermask=0 sets showSolderMask flag to false", async () => {
  const request = new Request("https://example.com?showsoldermask=0")
  const ctxOrResponse = await getRequestContext(request)
  if (ctxOrResponse instanceof Response) {
    throw new Error("Expected request context, received Response")
  }

  expect(ctxOrResponse.showSolderMask).toBe(false)
})

test("showsoldermask=true renders pads with solder mask color", async () => {
  const { serverUrl } = await getTestServer()
  const encodedSnippet = encodeURIComponent(
    getCompressedBase64SnippetString(`
export default () => (
  <board width="10mm" height="10mm">
    <resistor
      resistance="1k"
      footprint="0402"
      name="R1"
      schX={3}
      pcbX={3}
    />
    <capacitor
      capacitance="1000pF"
      footprint="0402"
      name="C1"
      schX={-3}
      pcbX={-3}
    />
    <trace from=".R1 > .pin1" to=".C1 > .pin1" />
  </board>
)
`),
  )

  const response = await fetch(
    `${serverUrl}?svg_type=pcb&showsoldermask=true&code=${encodedSnippet}`,
  )
  const svgContent = await response.text()

  expect(svgContent).toContain(".pcb-pad{fill:#006400!important;}")
})
