import React, { useState } from 'react';
import Order from './Order';

import Tablelist from './Tablelist';
// import Sidebar from './Sidebar';
import Header from './Header';

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  const handleThemeChange = (e) => setTheme(e.target.value);
  const toggleNotifications = () => setNotifications(!notifications);
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {/* <Sidebar className="hidden md:block md:w-1/4 lg:w-1/5 bg-gray-100 dark:bg-gray-800 p-4" /> */}

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Tablelist Section */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <Tablelist />
            </div>

            {/* Settings Section */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-6">Settings</h1>

              {/* Theme Selector */}
              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Theme</label>
                <select
                  value={theme}
                  onChange={handleThemeChange}
                  className="w-full p-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System Default</option>
                </select>
              </div>

              {/* Notifications Toggle */}
              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Notifications</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={toggleNotifications}
                    className="w-5 h-5 text-blue-500 dark:text-blue-400 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-300"
                  />
                  <span className="ml-3">{notifications ? 'Enabled' : 'Disabled'}</span>
                </div>
              </div>

              {/* Language Selector */}
              <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Language</label>
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="w-full p-2 border rounded bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  
                  <option value="German">German</option>
                  <option value="German">Urdu</option>
                </select>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </main>

        {/* Right Sidebar */}
        <Order className="hidden lg:block lg:w-1/4 bg-gray-100 dark:bg-gray-800 p-4" />
      </div>
    </div>
  );
};


export default Settings;
