export type Language = 'en' | 'cn';

export interface ContentStrings {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    callUs: string;
    getQuote: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    qualityTitle: string;
    qualityDesc: string;
    speedTitle: string;
    speedDesc: string;
    priceTitle: string;
    priceDesc: string;
  };
  services: {
    title: string;
    interior: string;
    exterior: string;
    plastering: string;
    commercial: string;
  };
  portfolio: {
    title: string;
    project1: string;
    project2: string;
    project3: string;
  };
  about: {
    title: string;
    desc: string;
    cert1: string;
    cert2: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
  };
  footer: {
    areas: string;
    rights: string;
    address: string;
  };
  chat: {
    welcome: string;
    faq1: string;
    faq2: string;
    placeholder: string;
  };
}