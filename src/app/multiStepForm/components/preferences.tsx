import React from "react";

type UserData = {
  wantsNotifications: string;
  shareInformation: string;
  notificationPreferences: string;
};

type PreferencesProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const Preferences: React.FC<PreferencesProps> = ({
  wantsNotifications,
  shareInformation,
  notificationPreferences,
  updateFields
}) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          value={wantsNotifications}
          checked={wantsNotifications === "Yes"}
          onChange={(e) => updateFields({ wantsNotifications: e.target.checked ? "Yes" : "No" })}
        />
        <label className="text-sm font-medium text-gray-700">
          Send Notifications
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          value={shareInformation}
          checked={shareInformation === "Yes"}
          onChange={(e) => updateFields({ shareInformation: e.target.checked ? "Yes" : "No" })}
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
          onChange={(e) => updateFields({ notificationPreferences: e.target.value })}
        >
          <option value="Text">Text</option>
          <option value="Email">Email</option>
        </select>
      </div>
    </div>
  );
};

export default Preferences;
