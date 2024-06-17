export function isEmail(email: string|undefined|null): boolean {
    if(email === null || email === undefined) return false;
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isPositiveNumber(str: string|number|null|undefined): boolean {
    if(str === null || str === undefined) return false;
    if(typeof str === "string"){
        const positiveNumberRegex = /^\d*/;
        return positiveNumberRegex.test(str);
    }
    else return str >= 0
}

export function isNotEmpty(str: string|undefined|null|number): boolean {
    if(str === null || str === undefined) return false;
    if(typeof str == "number") return true;
    return str.trim().length > 0;
}