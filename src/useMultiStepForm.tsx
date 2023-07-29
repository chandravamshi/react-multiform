import React, { ReactElement, useState } from 'react'

function useMultiStepForm(steps: ReactElement[]) {

    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })

    }
    function back() {
        setCurrentStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }
    function goTo(i: number) {
        return setCurrentStepIndex(i)
    }

    return (
        {
            currentStepIndex,
            step: steps[currentStepIndex],
            next,
            back,
            goTo,
            steps,
            isFirstStep: currentStepIndex === 0,
            isLastStep: currentStepIndex === steps.length - 1
        }
    )
}

export default useMultiStepForm