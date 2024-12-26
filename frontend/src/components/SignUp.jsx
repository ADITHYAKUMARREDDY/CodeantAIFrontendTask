// import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-white flex relative">
      <div className="hidden w-full md:w-1/2 md:flex relative bg-white p-8 items-center justify-center"
      >
        {/* Large Logo in bottom left */}
        <img
          src="src/assets/logo-large.png"
          alt="CodeAnt Logo Large"
          className="absolute bottom-0 left-0 w-96 opacity-10"
        />

        {/* Stats Card */}
        <div className="w-full max-w-md mx-auto">
          {/* First Card */}
          <div className="w-full max-w-md mx-auto relative">
            {/* Main Stats Card */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-6">
              <div className="flex items-center gap-2 mb-6 border-b pb-4">
                <img
                  src="src/assets/logo.png"
                  alt="CodeAnt Logo"
                  className="w-8 h-8"
                />
                <span className="font-medium text-lg">
                  AI to Detect & Autofix Bad Code
                </span>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="font-bold text-2xl mb-1">30+</div>
                  <div className="text-sm text-gray-600">Language Support</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Developers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-2xl mb-1">100K+</div>
                  <div className="text-sm text-gray-600">Hours Saved</div>
                </div>
              </div>
            </div>

            {/* Overlapping Issues Fixed Card */}
            <div className=" bottom-40 right-0 w-2/8 bg-white rounded-2xl p-6 -mt-10 ml-40  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <img
                    src="src/assets/Group 4.png"
                    alt="Bug"
                    className="w-12 h-12"
                  />
                  <div className="text-sm text-gray-600 mb-1">Issues Fixed</div>
                  <div className="text-3xl font-bold">500K+</div>
                </div>
                <div className="text-right">
                  <div className="text-blue-500 font-bold flex items-center gap-1">
                    <span className="text-lg">↑</span> 14%
                  </div>
                  <div className="text-sm text-gray-600">This week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 flex justify-start pb-8">
          <img
            src="src/assets/Subtract.png"
            alt="CodeAnt Logo"
            className="w-24 h-24"
            style={{
              height: "50%",
              width: "50%",
            }}
          />
        </div>
      </div>

      {/* Right Section - Full width on mobile */}
      <div className="w-full md:w-1/2 bg-gray-50 p-4 md:p-8 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-2">
              <img
                src="src/assets/logo.png"
                alt="CodeAnt Logo"
                className="w-8 h-8"
              />
              <span className="ml-2 text-xl font-semibold">CodeAnt AI</span>
            </div>
            <h1 className="text-2xl font-bold mb-6">Welcome to CodeAnt AI</h1>

            <div className="flex gap-4 mb-4">
              <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                SAAS
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Self Hosted
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 px-4 hover:bg-gray-50 transition-colors bg-white">
              <img
                src="src/assets/github.png"
                alt="GitHub"
                className="w-5 h-5"
              />
              Sign in with Github
            </button>

            <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 px-4 hover:bg-gray-50 transition-colors bg-white">
              <img
                src="src/assets/bigbuk.png"
                alt="Bitbucket"
                className="w-5 h-5"
              />
              Sign in with Bitbucket
            </button>

            <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 px-4 hover:bg-gray-50 transition-colors bg-white">
              <img
                src="src/assets/devop.png"
                alt="Azure DevOps"
                className="w-5 h-5"
              />
              Sign in with Azure Devops
            </button>

            <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 px-4 hover:bg-gray-50 transition-colors bg-white">
              <img
                src="src/assets/gitlab.png"
                alt="GitLab"
                className="w-5 h-5"
              />
              Sign in with GitLab
            </button>
          </div>

          <p className="text-sm text-center mt-6 text-gray-600">
            By signing up you agree to the{" "}
            <a href="#" className="text-gray-900 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
