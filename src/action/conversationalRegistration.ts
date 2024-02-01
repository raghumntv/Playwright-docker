import { type Page } from "@playwright/test";

import { ConversationalRegistrationCom } from "../labels/bwin.com/features/conversationalRegistration";
import { ConversationalRegistrationEs } from "../labels/bwin.es/features/conversationalRegistration";
import { argumentValues  } from "../../constants/argument.constants";

export class ConversationalRegistration {
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    instance(){
        if(argumentValues.LABEL==='bwin.com')
        return new ConversationalRegistrationCom(this.page)
        if(argumentValues.LABEL==='bwin.es')
        return new ConversationalRegistrationEs(this.page)
    }
}