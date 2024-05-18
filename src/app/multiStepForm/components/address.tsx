import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faPhone,
  faMapMarkedAlt,
  faCity,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

type AddressProps = {
  address1: string;
  address2: string;
  country: string;
  city: string;
  zipCode: string;
  company: string;
  phoneNumber: string;
};

const Address: React.FC<AddressProps> = ({
  address1,
  address2,
  country,
  city,
  zipCode,
  company,
  phoneNumber,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Address *
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className="mr-2 text-gray-600"
          />
          <input
            type="text"
            placeholder="Placeholder"
            value={address1}
            className="bg-transparent outline-none flex-grow"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Apartment, Suite, etc.
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className="mr-2 text-gray-600"
          />
          <input
            type="text"
            placeholder="Placeholder"
            value={address2}
            className="bg-transparent outline-none flex-grow"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Country *
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon icon={faGlobe} className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="Placeholder"
            value={country}
            className="bg-transparent outline-none flex-grow"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">City *</label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon icon={faCity} className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="Placeholder"
            value={city}
            className="bg-transparent outline-none flex-grow"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Zip Code *
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="Placeholder"
            value={zipCode}
            className="bg-transparent outline-none flex-grow"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="Placeholder"
            value={company}
            className="bg-transparent outline-none flex-grow"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="Placeholder"
            value={phoneNumber}
            className="bg-transparent outline-none flex-grow"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
