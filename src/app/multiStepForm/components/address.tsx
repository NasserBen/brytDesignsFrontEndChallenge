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

type UserData = {
  address1: string;
  address2: string;
  country: string;
  city: string;
  zipCode: string;
  company: string;
  phoneNumber: string;
};

type AddressProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const Address: React.FC<AddressProps> = ({
  address1,
  address2,
  country,
  city,
  zipCode,
  company,
  phoneNumber,
  updateFields,
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
            required={true}
            onChange={(e) => updateFields({ address1: e.target.value })}
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
            onChange={(e) => updateFields({ address2: e.target.value })}
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
        <select
          value={country}
          onChange={(e) => updateFields({ country: e.target.value })}
          className="bg-transparent outline-none flex-grow"
          required
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="AU">Australia</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
        </select>
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
            required={true}
            onChange={(e) => updateFields({ city: e.target.value })}
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
            required={true}
            onChange={(e) => updateFields({ zipCode: e.target.value })}
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
            onChange={(e) => updateFields({ company: e.target.value })}
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
            onChange={(e) => updateFields({ phoneNumber: e.target.value })}
            className="bg-transparent outline-none flex-grow"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
