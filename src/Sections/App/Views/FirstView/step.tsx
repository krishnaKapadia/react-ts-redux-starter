import React, { FunctionComponent } from 'react';

import { StepContainer, Step, H4 } from './components';

type Step = {
    stepNumber: number;
    active?: boolean;
};

type Props = {
    currentStep: number;
    goTo: (step: number) => void;
};

export const Steps: FunctionComponent<Props> = ({ currentStep, goTo }) => {

    const steps: Step[] = [
      {
        stepNumber: 1,
        active: true,
      },
      {
        stepNumber: 2,
        active: true,
      },
      {
        stepNumber: 3,
        active: true,
      },
      {
        stepNumber: 4,
        active: true,
      },
    ];

    return (
      <StepContainer>
        {steps.map(s => (
          <Step key={s.stepNumber} active={currentStep === s.stepNumber}>
            <h4 onClick={() => goTo(s.stepNumber)}>{s.stepNumber}</h4>
          </Step>
        ))}
      </StepContainer>
    );
}