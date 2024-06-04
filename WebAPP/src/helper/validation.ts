export function isEmail(email: string|undefined|null): boolean {
    if(email === null || email === undefined) return false;
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isNotEmpty(str: string|undefined|null|number): boolean {
    if(str === null || str === undefined) return false;
    if(typeof str == "number") return true;
    return str.trim().length > 0;
}