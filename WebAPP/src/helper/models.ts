export interface inputObj {
  value: string
  error: boolean
}
export interface keyValue {
  key: string
  value: string
}
export function roundNumber(item: number | null | undefined, count: number = 2): number {
  if (item === null || item === undefined) return 0
  else return Math.round(item * 100) / 100
}
