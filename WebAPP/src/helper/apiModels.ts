export class Convert {
    static toSignUpEmail(data: any): SignUpEmail {
        try {
            const obj: SignUpEmail = {
                Email: data.email as string,
            }
            return obj
        }
        catch (e) {  throw e }
    }
    static toSignUpEmailModelForJson(data: SignUpEmail): any {
        return {
            email: data.Email,
        };
    }
    static toJson(data: any): string {
        return JSON.stringify(data);
    }
    
}
export interface SignUpEmail {
    Email?: string
}