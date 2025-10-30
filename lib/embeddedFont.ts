const FONT_FAMILY = "DocSansPixel"
const CELL_SIZE = 100
const ASCENT = 700
const DESCENT = -100
const UNITS_PER_EM = ASCENT - DESCENT
const MARGIN_LEFT = 50
const MARGIN_RIGHT = 50

const SPECIAL_ADVANCE: Record<string, number> = {
  " ": CELL_SIZE * 3,
  ",": CELL_SIZE * 4,
  ".": CELL_SIZE * 4,
  ":": CELL_SIZE * 4,
}

const FONT_STYLE = `\n  <style data-docsans-font="true">\n    text, tspan { font-family: '${FONT_FAMILY}', sans-serif; }\n  </style>\n`

const BASE_PATTERNS: Record<string, string[]> = {
  "0": [
    "01110",
    "10001",
    "10011",
    "10101",
    "11001",
    "10001",
    "01110",
  ],
  "1": [
    "00100",
    "01100",
    "00100",
    "00100",
    "00100",
    "00100",
    "01110",
  ],
  "2": [
    "01110",
    "10001",
    "00001",
    "00010",
    "00100",
    "01000",
    "11111",
  ],
  "3": [
    "01110",
    "10001",
    "00001",
    "00110",
    "00001",
    "10001",
    "01110",
  ],
  "4": [
    "00010",
    "00110",
    "01010",
    "10010",
    "11111",
    "00010",
    "00010",
  ],
  "5": [
    "11111",
    "10000",
    "11110",
    "00001",
    "00001",
    "10001",
    "01110",
  ],
  "6": [
    "00110",
    "01000",
    "10000",
    "11110",
    "10001",
    "10001",
    "01110",
  ],
  "7": [
    "11111",
    "00001",
    "00010",
    "00100",
    "01000",
    "01000",
    "01000",
  ],
  "8": [
    "01110",
    "10001",
    "10001",
    "01110",
    "10001",
    "10001",
    "01110",
  ],
  "9": [
    "01110",
    "10001",
    "10001",
    "01111",
    "00001",
    "00010",
    "01100",
  ],
  A: [
    "01110",
    "10001",
    "10001",
    "11111",
    "10001",
    "10001",
    "10001",
  ],
  B: [
    "11110",
    "10001",
    "10001",
    "11110",
    "10001",
    "10001",
    "11110",
  ],
  C: [
    "01110",
    "10001",
    "10000",
    "10000",
    "10000",
    "10001",
    "01110",
  ],
  D: [
    "11110",
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "11110",
  ],
  E: [
    "11111",
    "10000",
    "10000",
    "11110",
    "10000",
    "10000",
    "11111",
  ],
  F: [
    "11111",
    "10000",
    "10000",
    "11110",
    "10000",
    "10000",
    "10000",
  ],
  G: [
    "01110",
    "10001",
    "10000",
    "10111",
    "10001",
    "10001",
    "01110",
  ],
  H: [
    "10001",
    "10001",
    "10001",
    "11111",
    "10001",
    "10001",
    "10001",
  ],
  I: [
    "01110",
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
    "01110",
  ],
  J: [
    "00111",
    "00010",
    "00010",
    "00010",
    "10010",
    "10010",
    "01100",
  ],
  K: [
    "10001",
    "10010",
    "10100",
    "11000",
    "10100",
    "10010",
    "10001",
  ],
  L: [
    "10000",
    "10000",
    "10000",
    "10000",
    "10000",
    "10000",
    "11111",
  ],
  M: [
    "10001",
    "11011",
    "10101",
    "10101",
    "10001",
    "10001",
    "10001",
  ],
  N: [
    "10001",
    "11001",
    "10101",
    "10011",
    "10001",
    "10001",
    "10001",
  ],
  O: [
    "01110",
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "01110",
  ],
  P: [
    "11110",
    "10001",
    "10001",
    "11110",
    "10000",
    "10000",
    "10000",
  ],
  Q: [
    "01110",
    "10001",
    "10001",
    "10001",
    "10101",
    "10010",
    "01101",
  ],
  R: [
    "11110",
    "10001",
    "10001",
    "11110",
    "10100",
    "10010",
    "10001",
  ],
  S: [
    "01111",
    "10000",
    "10000",
    "01110",
    "00001",
    "00001",
    "11110",
  ],
  T: [
    "11111",
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
  ],
  U: [
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "01110",
  ],
  V: [
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "01010",
    "00100",
  ],
  W: [
    "10001",
    "10001",
    "10001",
    "10101",
    "10101",
    "11011",
    "10001",
  ],
  X: [
    "10001",
    "10001",
    "01010",
    "00100",
    "01010",
    "10001",
    "10001",
  ],
  Y: [
    "10001",
    "10001",
    "01010",
    "00100",
    "00100",
    "00100",
    "00100",
  ],
  Z: [
    "11111",
    "00001",
    "00010",
    "00100",
    "01000",
    "10000",
    "11111",
  ],
  "-": [
    "00000",
    "00000",
    "00000",
    "11111",
    "00000",
    "00000",
    "00000",
  ],
  _: [
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "11111",
  ],
  "+": [
    "00100",
    "00100",
    "11111",
    "00100",
    "00100",
    "00000",
    "00000",
  ],
  "=": [
    "00000",
    "00000",
    "11111",
    "00000",
    "11111",
    "00000",
    "00000",
  ],
  "/": [
    "00001",
    "00010",
    "00100",
    "01000",
    "10000",
    "00000",
    "00000",
  ],
  "<": [
    "00010",
    "00100",
    "01000",
    "10000",
    "01000",
    "00100",
    "00010",
  ],
  ">": [
    "01000",
    "00100",
    "00010",
    "00001",
    "00010",
    "00100",
    "01000",
  ],
  ":": [
    "00000",
    "00110",
    "00110",
    "00000",
    "00110",
    "00110",
    "00000",
  ],
  ".": [
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "00110",
    "00110",
  ],
  ",": [
    "00000",
    "00000",
    "00000",
    "00000",
    "00110",
    "00110",
    "00100",
  ],
  "(": [
    "00010",
    "00100",
    "01000",
    "01000",
    "01000",
    "00100",
    "00010",
  ],
  ")": [
    "01000",
    "00100",
    "00010",
    "00010",
    "00010",
    "00100",
    "01000",
  ],
  "?": [
    "01110",
    "10001",
    "00001",
    "00010",
    "00100",
    "00000",
    "00100",
  ],
  "!": [
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
    "00000",
    "00100",
  ],
  "'": [
    "00100",
    "00100",
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
  ],
  "\"": [
    "01010",
    "01010",
    "00100",
    "00000",
    "00000",
    "00000",
    "00000",
  ],
  " ": [
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
  ],
}

const patterns: Record<string, string[]> = { ...BASE_PATTERNS }

for (const [char, pattern] of Object.entries(BASE_PATTERNS)) {
  const lower = char.toLowerCase()
  if (!(lower in patterns)) {
    patterns[lower] = pattern
  }
}

function patternToGlyph(
  char: string,
  pattern: string[],
): { path: string; horizAdvX: number } {
  const rows = pattern.length
  const cols = pattern.reduce((max, row) => Math.max(max, row.length), 0)
  const baseWidth = cols * CELL_SIZE + MARGIN_LEFT + MARGIN_RIGHT
  const width = SPECIAL_ADVANCE[char] ?? baseWidth
  let d = ""

  for (let r = 0; r < rows; r++) {
    const row = pattern[r]
    for (let c = 0; c < row.length; c++) {
      const cell = row[c]
      if (cell !== "1" && cell !== "#") continue
      const x0 = MARGIN_LEFT + c * CELL_SIZE
      const x1 = x0 + CELL_SIZE
      const y0 = ASCENT - (r + 1) * CELL_SIZE
      const y1 = y0 + CELL_SIZE
      d += `M${x0} ${y0}L${x1} ${y0}L${x1} ${y1}L${x0} ${y1}Z`
    }
  }

  return { path: d, horizAdvX: width }
}

function buildFontDefs(): string {
  const defaultPattern = patterns["0"]
  const defaultGlyph = defaultPattern
    ? patternToGlyph("0", defaultPattern)
    : { path: "", horizAdvX: CELL_SIZE * 5 + MARGIN_LEFT + MARGIN_RIGHT }
  const glyphEntries: string[] = []

  for (const [char, pattern] of Object.entries(patterns)) {
    const { path, horizAdvX } = patternToGlyph(char, pattern)
    if (char === " ") {
      glyphEntries.push(`<glyph unicode="${char}" horiz-adv-x="${horizAdvX}" />`)
    } else {
      glyphEntries.push(`<glyph unicode="${char}" horiz-adv-x="${horizAdvX}" d="${path}" />`)
    }
  }

  return `\n  <defs>\n    <font id="${FONT_FAMILY}" horiz-adv-x="${defaultGlyph.horizAdvX}">\n      <font-face font-family="${FONT_FAMILY}" units-per-em="${UNITS_PER_EM}" ascent="${ASCENT}" descent="${DESCENT}" />\n      <missing-glyph horiz-adv-x="${defaultGlyph.horizAdvX}" d="${defaultGlyph.path}" />\n      ${glyphEntries.join("\n      ")}\n    </font>\n  </defs>\n`
}

const FONT_DEFS = buildFontDefs()

export function injectDocSansFont(svg: string): string {
  if (svg.includes(`<font id="${FONT_FAMILY}`)) {
    return svg
  }

  const svgTagEnd = svg.indexOf(">")
  if (svgTagEnd === -1) {
    return svg
  }

  const before = svg.slice(0, svgTagEnd + 1)
  const after = svg.slice(svgTagEnd + 1)
  const styleSnippet = svg.includes("data-docsans-font=\"true\"") ? "" : FONT_STYLE
  return `${before}${FONT_DEFS}${styleSnippet}${after}`
}

function prefixFontFamily(value: string): string {
  if (value.includes(FONT_FAMILY)) {
    return value
  }
  return `${FONT_FAMILY}, ${value}`
}

export function ensureDocSansFontFamily(svg: string): string {
  const attrDouble = /font-family="([^"]*)"/g
  svg = svg.replace(attrDouble, (_match, families) => {
    return `font-family="${prefixFontFamily(families)}"`
  })

  const attrSingle = /font-family='([^']*)'/g
  svg = svg.replace(attrSingle, (_match, families) => {
    return `font-family='${prefixFontFamily(families)}'`
  })

  const styleRegex = /font-family:\s*([^;\n\r}]+)([;\n\r}])/g
  svg = svg.replace(styleRegex, (_match, families, suffix) => {
    return `font-family:${prefixFontFamily(families.trim())}${suffix}`
  })

  return svg
}

export function ensureDocSansFont(svg: string): string {
  let result = ensureDocSansFontFamily(svg)
  return injectDocSansFont(result)
}
