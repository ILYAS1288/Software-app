import React, { useState } from 'react';
import Order from './Order';
import Footer from './Footer';
import Tablelist from './Tablelist';
import Sidebar from './Sidebar';
import Header from './Header';

const Settings = () => {
  const [theme, setTheme] = useState('light'); // Theme state
  const [notifications, setNotifications] = useState(true); // Notification state
  const [language, setLanguage] = useState('English'); // Language state

  // Handle Theme Change
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  // Handle Notifications Toggle
  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  // Handle Language Change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <Sidebar className="hidden md:block w-1/4 bg-gray-100 p-4" />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid lg:grid-cols-1 gap-6">
            {/* Tablelist Items */}
            <div>
              <Tablelist />
            </div>

            {/* Settings Section */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-6">Settings</h1>

              {/* Theme Selector */}
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={theme}
                  onChange={handleThemeChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System Default</option>
                </select>
              </div>

              {/* Notifications Toggle */}
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Notifications
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={toggleNotifications}
                    className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-300"
                  />
                  <span className="ml-3 text-gray-700">
                    {notifications ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>

              {/* Language Selector */}
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </main>

        {/* Right Sidebar */}
        <Order className="hidden lg:block w-1/4 bg-gray-100 p-4" />
      </div>
    </div>
  );
};

export default Settings;
