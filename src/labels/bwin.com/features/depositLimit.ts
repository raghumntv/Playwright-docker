import { type Page } from "@playwright/test";

export class DepositLimitCom implements DepositLimit {
    readonly page: Page
    constructor(page:Page){
        this.page = page
    }
   async getSucessMessage():Promise<string> {
        console.log('bwin.com SucessMessage')
        return 'Sucess'
    }
    // Implement other members of DepositLimit...

   async setDepositLimit():Promise<DepositLimit> {
        // Implementation logic...
        console.log('set deposit limit in bwin.com')
        return this;  // Returning the same instance for chaining
    }

   async navigate():Promise<DepositLimit>{
        console.log('navigate to bwin.com Deposit Limit')
        return this
    }

}