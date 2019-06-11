type IStepDefinition = {
  stepTitle: string;
};

export const stepDefinitions: IStepDefinition[] = [
  {
    stepTitle: "Register"
  },
  {
    stepTitle: "Set up automatic donation"
  },
  {
    stepTitle: "Choose your charities"
  },
  {
    stepTitle: "Add a payment method"
  }
];

export const Costs = [
  {
    cost: '$5'
  },
  {
    cost: '$10'
  },
  {
    cost: '$15'
  }
];

export const Periods = [
  {
    period: "Weekly"
  },
  {
    period: "Fortnightly"
  },
  {
    period: "Monthly"
  }
];