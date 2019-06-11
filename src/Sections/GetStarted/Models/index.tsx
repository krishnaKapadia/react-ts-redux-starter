export type IOnboardingView = {
  progress: () => void;
}

export enum Frequency {
  Weekly = "Weekly", 
  Fortnightly = "Fortnightly", 
  Monthly = "Monthly"
}

export type SignUpPayload = {
  email: string;
  password: string;
  name: {
    firstName: string;
    lastName: string;
  },
  amountPerWeek: number;
  paymentFrequency: Frequency;
};

export const EmptySignupPayload: SignUpPayload = {
  email: '',
  password: '',
  name: {
    firstName: '',
    lastName: ''
  },
  amountPerWeek: 0,
  paymentFrequency: Frequency.Weekly
};