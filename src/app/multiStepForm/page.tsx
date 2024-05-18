"use client";
import React, { useState } from "react";
import Account from "./components/account";
import Address from "./components/address";
import Preferences from "./components/preferences";
import useMultiStepForm from "./useMultiStepForm";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  address1: string;
  address2: string;
  country: string;
  city: string;
  zipCode: string;
  company: string;
  phoneNumber: string;
  wantsNotifications: string;
  shareInformation: string;
  notificationPreferences: string;
};

const InitialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  address1: "",
  address2: "",
  country: "",
  city: "",
  zipCode: "",
  company: "",
  phoneNumber: "",
  wantsNotifications: "No",
  shareInformation: "No",
  notificationPreferences: "Email",
};

export default function MultiStepForm() {
  const [inputData, setInputData] = useState(InitialData);

  function updateFields(fields : Partial<FormData>) {
    setInputData((prev) => ({ ...prev, ...fields }));
  }

  const {
    currentStepIndex,
    step,
    steps,
    isFirstStep,
    isLastStep,
    next,
    previous,
  } = useMultiStepForm([
    <Account {...inputData} updateFields={updateFields}/>,
    <Address {...inputData} updateFields={updateFields}/>,
    <Preferences {...inputData} updateFields={updateFields}/>,
  ]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLastStep) return next();
    if (isLastStep) {
      try {
        const response = await fetch("api/register", {
          method: "POST",
          body: JSON.stringify(inputData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    alert("Successfully registered");
    console.log(inputData);
  };

  const Title =
    currentStepIndex === 0
      ? "Account Information"
      : currentStepIndex === 1
      ? "Address Information"
      : "Preferences";

  return (
    <>
      <div className="h-screen bg-gray-200 text-black flex justify-center items-center">
        <div className="w-[450px] h-[600] p-2">
          <h1 className="flex justify-center items-center text-[#343A40]">
            {Title}
          </h1>
          <form className="bg-white p-2 rounded-md" onSubmit={onSubmit}>
            <div className="bg-gray-200">
              {currentStepIndex + 1}/{steps.length}
            </div>
            <div>{step}</div>
            <div className={`mt-2 flex ${isFirstStep ? 'justify-end' : 'justify-between'}`}>

              {!isFirstStep && (
                <button
                  type="button"
                  onClick={previous}
                  className="px-2 py-1 bg-white text-gray-500 rounded-lg border border-gray-500 border-solid hover:underline hover:opacity-80"
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
              )}
              <button
                type="submit"
                className="px-2 py-1 bg-gray-500 text-white rounded-lg hover:underline hover:opacity-80"
              >
                {isLastStep ? (
                  "Register"
                ) : (
                  <>
                    Next Step <FontAwesomeIcon icon={faArrowRight} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
