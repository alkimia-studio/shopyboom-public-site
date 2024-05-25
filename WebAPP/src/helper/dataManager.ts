export enum dataKeys {
  token = 'token'
}
export class dataManager {
  static save(key: dataKeys, value: string): void {
    localStorage.setItem(key, value)
  }
  static get(key: dataKeys): string | null {
    return localStorage.getItem(key)
  }
  static remove(key: dataKeys) {
    localStorage.removeItem(key)
  }
}
