import  { useState } from "react";
import {
  Menu,
  Search,
  RefreshCw,
  Plus,
  Home,
  FileCode,
  Cloud,
  HelpCircle,
  Settings,
  Phone,
  LogOut,
} from "lucide-react";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const repositories = [
    {
      name: "design-system",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
      isPublic: true,
    },
    {
      name: "codeant-ci-app",
      language: "Javascript",
      size: "5871 KB",
      updated: "2 days ago",
      isPrivate: true,
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
      isPrivate: true,
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
      isPrivate: true,
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
      isPrivate: true,
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
      isPrivate: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b fixed top-0 left-0 right-0 z-20">
        <div className="flex items-center">
          <img
            src="src\assets\logo.png"
            alt="CodeAnt AI Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-semibold">CodeAnt AI</span>
        </div>
        <div className="w-6" />
        <button onClick={() => setSidebarOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Sidebar  */}
      <aside
        className={`fixed lg:inset-y-0 lg:left-0 z-30 w-full lg:w-64 bg-white border-b lg:border-r lg:border-b-0 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "top-0" : "-top-[50vh]"} 
          lg:transform-none lg:top-0 
          h-[40vh] lg:h-screen
          shadow-lg lg:shadow-none
          overflow-y-auto
        `}
      >
        <div className="flex flex-col h-full px-4 py-6 relative">
          {/* Close button - Only on mobile */}
          <button
            className="lg:hidden absolute top-6 right-4 p-2 text-gray-500 hover:text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          {/* User Dropdown */}
          <div className="mb-2">
            <div className="flex items-center mb-3">
              <img
                src="src\assets\logo.png"
                alt="CodeAnt AI Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-xl font-semibold">CodeAnt AI</span>
            </div>
            <button className="w-full p-2 text-left text-gray-700 bg-gray-100 rounded-lg flex items-center justify-between">
              <span className="truncate">UtkarshDhairyaPa...</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
          </div>

          {/* Navigation - Condensed for mobile */}
          <nav className="flex-1 space-y-1 overflow-y-auto">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-blue-600 bg-blue-50 rounded-lg"
            >
              <Home className="w-5 h-5 mr-3" />
              <span>Repositories</span>
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <FileCode className="w-5 h-5 mr-3" />
              <span>AI Code Review</span>
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Cloud className="w-5 h-5 mr-3" />
              <span>Cloud Security</span>
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <HelpCircle className="w-5 h-5 mr-3" />
              <span>How to Use</span>
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </a>
          </nav>

          {/* Bottom Menu - Only visible on desktop */}
          <div className="hidden lg:block pt-6 space-y-1 border-t">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Phone className="w-5 h-5 mr-3" />
              <span>Support</span>
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-16 lg:pt-0">
        <div className="p-6 lg border">
          {/* Repository List */}
          <div className="border border-grey rounded-lg ">
            {/* Repository Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between  m-3">
              <div>
                <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
                <p className="text-gray-600">33 total repositories</p>
              </div>
              <div className="flex gap-3 mt-4 sm:mt-0">
                <button className="flex items-center px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh All
                </button>
                <button className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Repository
                </button>
              </div>
            </div>
            {/* Search Bar */}
            <div className="relative mb-6 ml-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Repositories"
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className="p-4 bg-white lg border hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">{repo.name}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          repo.isPublic
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {repo.isPublic ? "Public" : "Private"}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        {repo.language}
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      </span>
                      <span>{repo.size}</span>
                      <span>Updated {repo.updated}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
