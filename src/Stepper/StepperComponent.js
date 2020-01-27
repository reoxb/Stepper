import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';

export default function HorizontalNonLinearAlternativeLabelStepper() {
  const [activeStep, setActiveStep] = React.useState(-1);

  return (
      <Stepper activeStep={activeStep}>
        <Step><StepButton onClick={() => { setActiveStep(0) }}  to={"/request"} disabled={false} completed={false}>Request</StepButton></Step>
        <Step><StepButton onClick={() => { setActiveStep(1) }}  to={"/batch"} disabled={false} completed={false}>Batch</StepButton></Step>
        <Step><StepButton onClick={() => { setActiveStep(2) }}  to={"/design"} disabled={true} completed={false}></StepButton></Step>
        <Step><StepButton onClick={() => { setActiveStep(3) }}  to={"/shipment"} disabled={true} completed={false}></StepButton></Step>
      </Stepper>
   );
}
