import {
  faUser,
  faUserTie,
  faEnvelope,
  faKey,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AccountProps = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export default function Account({
  firstName,
  lastName,
  email,
  username,
  password,
  confirmPassword,
}: AccountProps) {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <div className="flex space-x-4">
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <div className="flex items-center bg-gray-200 rounded p-2">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-600" />
            <input
              type="text"
              placeholder="Placeholder"
              className="bg-transparent outline-none flex-grow"
              value={firstName}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <div className="flex items-center bg-gray-200 rounded p-2">
            <FontAwesomeIcon icon={faUserTie} className="mr-2 text-gray-600" />
            <input
              type="text"
              placeholder="Placeholder"
              className="bg-transparent outline-none flex-grow"
              value={lastName}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Username *
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-600" />
          <input
            type="text"
            placeholder="Placeholder"
            className="bg-transparent outline-none flex-grow"
            value={username}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />
          <input
            type="email"
            placeholder="Placeholder"
            className="bg-transparent outline-none flex-grow"
            value={email}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Password *
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon icon={faKey} className="mr-2 text-gray-600" />
          <input
            type="password"
            placeholder="Placeholder"
            className="bg-transparent outline-none flex-grow"
            value={password}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Confirm Password *
        </label>
        <div className="flex items-center bg-gray-200 rounded p-2">
          <FontAwesomeIcon
            icon={faFingerprint}
            className="mr-2 text-gray-600"
          />
          <input
            type="password"
            placeholder="Placeholder"
            className="bg-transparent outline-none flex-grow"
            value={confirmPassword}
          />
        </div>
      </div>
    </div>
  );
}