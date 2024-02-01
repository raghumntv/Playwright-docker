import { type Page } from "@playwright/test";
export class ConversationalRegistrationEs implements ConversationalRegistration {
    readonly page: Page
    constructor(page){
        this.page=page
    }
   async getSucessMessage():Promise<string> {
        console.log('bwin.es SucessMessage')
        await new Promise(resolve => setTimeout(resolve, 1000));
        return 'Sucess'
    }
    // Implement other members of DepositLimit...

    async conversationalRegistration(): Promise<ConversationalRegistration> {
        //setp1
        //step2
        //step3
        // Implementation logic...
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('perform conversational Registration in bwin.es')
        return this;  // Returning the same instance for chaining
    }

   async navigate(): Promise<ConversationalRegistration>{
        console.log('navigate to bwin.es conversational Registration')
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this
    }
    async proceedToComponent(parms:string):Promise<ConversationalRegistration>{
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this
    }

}