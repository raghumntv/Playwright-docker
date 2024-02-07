interface DepositLimit{

    navigate():Promise<DepositLimit>;

    setDepositLimit():Promise<DepositLimit>;

    getSucessMessage():Promise<string>;


}