declare module "circuit-to-svg" {
  interface ConvertCircuitJsonToPcbSvgOptions {
    showSolderMask?: boolean
    [key: string]: unknown
  }

  export function convertCircuitJsonToAssemblySvg(circuitJson: unknown): string
  export function convertCircuitJsonToPcbSvg(
    circuitJson: unknown,
    options?: ConvertCircuitJsonToPcbSvgOptions,
  ): string
  export function convertCircuitJsonToSchematicSvg(
    circuitJson: unknown,
  ): string
  export function convertCircuitJsonToPinoutSvg(
    circuitJson: unknown,
  ): string
  export function convertCircuitJsonToSchematicSimulationSvg(
    params: unknown,
  ): string
}
