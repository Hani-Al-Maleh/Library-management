import React, { useState } from 'react';
import CheckoutStep1 from '../components/CheckoutStep1';
import CheckoutStep2 from '../components/CheckoutStep2';
import CheckoutStep3 from '../components/CheckoutStep3';

function Checkout({ history }) {
  const [step, setStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({});
  const [cardInfo, setCardInfo] = useState({});

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CheckoutStep1
            onNext={() => setStep(2)}
            setPersonalInfo={setPersonalInfo}
          />
        );
      case 2:
        return (
          <CheckoutStep2
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
            setCardInfo={setCardInfo}
          />
        );
      case 3:
        return (
          <CheckoutStep3
            onBack={() => setStep(2)}
            personalInfo={personalInfo}
            cardInfo={cardInfo}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}

export default Checkout;
