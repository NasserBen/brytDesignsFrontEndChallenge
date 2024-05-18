import { useState, ReactElement } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i === steps.length - 1)
        // if the current step is the last step
        return i;
      return i + 1;
    });
  };

  const previous = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0)
        // if the current step is the first step
        return i;
      return i - 1;
    });
  };

  const goToStep = (index: number) => {
    setCurrentStepIndex(index);
  };

  const reset = () => {
    setCurrentStepIndex(0);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    previous,
    goToStep,
    reset,
  };
}
