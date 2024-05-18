import React from "react";

type PreferencesProps = {
  wantsNotifications: string;
  shareInformation: string;
  notificationPreferences: string;
};

const Preferences: React.FC<PreferencesProps> = ({
  wantsNotifications,
  shareInformation,
  notificationPreferences,
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={wantsNotifications === "true"}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="text-sm font-medium text-gray-700">
          Send Notifications
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={shareInformation === "true"}
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="text-sm font-medium text-gray-700">
          Share information with related marketer
        </label>
      </div>
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700 mb-1">
          Notification Preferences
        </label>
        <select
          value={notificationPreferences}
          className="p-2 bg-gray-200 rounded outline-none"
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
        </select>
      </div>
    </div>
  );
};

export default Preferences;
