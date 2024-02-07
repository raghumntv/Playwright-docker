import { type Page } from "@playwright/test";
import { DepositLimitCom } from "../labels/bwin.com/features/depositLimit";
import { DepositLimitEs } from "../labels/bwin.es/features/depositLimit";
import { argumentValues  } from "../../constants/argument.constants";

export class DepositLimit {
    readonly page: Page
    constructor(page:Page){
        this.page=page
    }
    instance(){
        if(argumentValues.LABEL==='bwin.com')
        return new DepositLimitCom(this.page)
        if(argumentValues.LABEL==='bwin.es')
        return new DepositLimitEs(this.page)
    }
}