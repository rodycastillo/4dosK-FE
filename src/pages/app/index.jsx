import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FirstStep } from "../../components/FirstStep/FirstStep";
import { SecondStep } from "../../components/SecondStep/SecondStep";
import { ThirdStep } from "../../components/ThirdStep/ThirdStep";
import { LastStep } from "../../components/LastStep/LastStep";
import { FormProvider } from "../../context/FormContext";

export const App = () => {
  const { step_one, step_two, step_three, step_four } = useContext(AppContext);
  return (
    <>
      <FormProvider>
        {step_one && <FirstStep />}
        {step_two && <SecondStep />}
        {step_three && <ThirdStep />}
        {step_four && <LastStep />}
      </FormProvider>
    </>
  );
};
