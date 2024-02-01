import { type Page } from "@playwright/test";
export class DepositLimitEs implements DepositLimit {
    readonly page: Page
    constructor(page:Page){
        this.page = page
    }
   async getSucessMessage():Promise<string> {
        console.log('bwin.es SucessMessage')
        return 'Sucess'
    }
    // Implement other members of DepositLimit...

   async setDepositLimit():Promise<DepositLimit> {
        // Implementation logic...
        console.log('set deposit limit in bwin.es')
 // Returning the same instance for chaining
        return this
    }

    async navigate(): Promise<DepositLimit>{
        console.log('')
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this
    }
}