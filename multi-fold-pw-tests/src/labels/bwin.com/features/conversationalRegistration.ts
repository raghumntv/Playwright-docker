import { type Page } from "@playwright/test";

import percySnapshot from "@percy/playwright"

export class ConversationalRegistrationCom implements ConversationalRegistration{
    readonly page: Page
    constructor(page:Page){
        this.page = page
    }
   async getSucessMessage():Promise<string> {
        console.log('bwin.com SucessMessage')
        await new Promise(resolve => setTimeout(resolve, 100));
        await new Promise(resolve => setTimeout(resolve, 100));
        await new Promise(resolve => setTimeout(resolve, 100));
        await new Promise(resolve => setTimeout(resolve, 100));
        return 'Sucess'
    }
    // Implement other members of DepositLimit...

    async conversationalRegistration(): Promise<ConversationalRegistration> {
        //setp1
        await this.page.getByRole('textbox').click();
        await this.page.getByRole('textbox').fill('test2345@gmail.com');
        await this.page.getByRole('textbox').click();
        //visual
        await percySnapshot(this.page, "after email");
        await this.page.getByRole('button', { name: 'Continue' }).click();

        //step2
        await percySnapshot(this.page, "before password");
        await this.page.locator('#focusPassword').fill('Tesyt12#');
        //visual
        await percySnapshot(this.page, "after password");
        await this.page.getByRole('button', { name: 'Next' }).click();

        //step3
        //visual
        await percySnapshot(this.page, "before name");
        await this.page.locator('input[name="firstname"]').fill('test');
        await this.page.locator('input[name="lastname"]').click();
        await this.page.locator('input[name="lastname"]').fill('play');
        //visual
        await percySnapshot(this.page, "after name");
        await this.page.getByRole('button', { name: 'Next' }).click();

        //step4
        //visual
        await percySnapshot(this.page, "before dob");
        await this.page.locator('input[name="day"]').fill('01');
        await this.page.locator('input[name="month"]').fill('01');
        await this.page.locator('input[name="year"]').fill('1997');
        //visual
        await percySnapshot(this.page, "after dob");
        await this.page.getByRole('button', { name: 'Next' }).click();

        //step5
        //visual
        await percySnapshot(this.page, "before passport");
        await this.page.locator('input[name="iddocumentnumbersuffix"]').fill('1234567');
        //visual
        await percySnapshot(this.page, "after passport");
        await this.page.getByRole('button', { name: 'Next' }).click();

        //step6
        //visual
        await percySnapshot(this.page, "before address");
        await this.page.locator('input[name="addressline1"]').fill('45,test');
        await this.page.locator('input[name="addresscity"]').click();
        await this.page.locator('input[name="addresscity"]').fill('testss');
        await this.page.locator('input[name="addresszip"]').click();
        await this.page.locator('input[name="addresszip"]').fill('56008');
        //visual
        await percySnapshot(this.page, "after address");
        await this.page.getByRole('button', { name: 'Next' }).click();

        //step7
        //visual
        await percySnapshot(this.page, "before fund");
        await this.page.getByRole('combobox').selectOption('3: I am self-employed');
        //visual
        await percySnapshot(this.page, "after fund");
        await this.page.getByRole('button', { name: 'Next' }).click();

        //step8
        //visual
        await percySnapshot(this.page, "before mobile");
        await this.page.locator('input[name="mobilenumber"]').fill('2231231211');
         //visual
         await percySnapshot(this.page, "after mobile");
        await this.page.locator('div:nth-child(8) > .btn-area > .conversation-buttons').click();
          //visual
        await percySnapshot(this.page, "Registration");
        // Implementation logic...
        console.log('perform conversational Registration in bwin.com')
        return this;  // Returning the same instance for chaining
    }

   async navigate(): Promise<ConversationalRegistration>{
    await this.page.locator('span.ui-icon.theme-ex.ng-star-inserted').first().click();
    await this.page.getByRole('link', { name: 'Register' }).click();
    //visual
    await percySnapshot(this.page, "before email");
        console.log('navigate to bwin.com conversational Registration')
        return this
    }

    async proceedToComponent(parms:string):Promise<ConversationalRegistration>{
        await new Promise(resolve => setTimeout(resolve, 1000));
        return this
    }

}