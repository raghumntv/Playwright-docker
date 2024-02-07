interface ConversationalRegistration{

    navigate():Promise<ConversationalRegistration>;

    conversationalRegistration():Promise<ConversationalRegistration>;

    getSucessMessage():Promise<string>;

    proceedToComponent(parms:string):Promise<ConversationalRegistration>;


}