import { useState, ReactElement } from "react";

export default function UsMultiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = () => {
        setCurrentStepIndex((i) => {
            if (i === steps.length - 1) // if the current step is the last step
                return i;
            return i + 1;
        });
    };

    const previous = () => {
        setCurrentStepIndex((i) => {
            if (i<=0) // if the current step is the first step
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

  return {currentStepIndex, steps:steps[currentStepIndex], next, previous, goToStep, reset};
}