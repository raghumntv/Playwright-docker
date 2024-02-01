import { test, expect } from '@playwright/test';
import { DepositLimit } from "../src/action/depositLimit";
import { ConversationalRegistration } from "../src/action/conversationalRegistration";



test('test deposit limit', async ({ page }) => {
  const DepositInstance = new DepositLimit(page).instance()!;
  (await (await DepositInstance.navigate()).setDepositLimit()).getSucessMessage()
});

test('Conversational Registration', async ({ page }) => {
  await page.goto('https://sports.sportingbet.co.za/en/sports');
  const instance = new ConversationalRegistration(page).instance()!;
  const message = (await (await (await instance.navigate()).conversationalRegistration()).getSucessMessage())
  // console.log('message---->',message)
});

test('e2e ', async ({ page }) => {
  const conversationalRegistrationInstance = new ConversationalRegistration(page).instance()!;
  (await (await (await conversationalRegistrationInstance.navigate()).conversationalRegistration()).getSucessMessage())
  const DepositInstance = new DepositLimit(page).instance()!;
  (await (await DepositInstance.navigate()).setDepositLimit()).getSucessMessage()
});
