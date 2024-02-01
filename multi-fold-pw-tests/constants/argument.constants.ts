import { defaultValues } from "./env.constants";

const LABEL: string = process.env.LABEL || defaultValues.LABEL;
const PLATFORM: string = process.env.PLATFORM || defaultValues.PLATFORM;
const CHANNEL: string = process.env.CHANNEL || defaultValues.CHANNEL;
const ENV: string = process.env.ENV || defaultValues.ENV;
const FEATURE_ARGUMENT: string | undefined = process.env.FEATURE;
const BROWSERSTACK_USER: string =
  process.env.BROWSERSTACK_USERNAME || defaultValues.BROWSERSTACK_USERNAME;
const BROWSERSTACK_KEY: string =
  process.env.BROWSERSTACK_ACCESS_KEY || defaultValues.BROWSERSTACK_ACCESS_KEY;
const HEADLESS: boolean = process.env.HEADLESS as unknown as boolean;

export const argumentValues = {
  LABEL,
  PLATFORM,
  CHANNEL,
  ENV,
  FEATURE_ARGUMENT,
  BROWSERSTACK_USER,
  BROWSERSTACK_KEY,
  HEADLESS,
};
