import React from "react";

const VerificationStatusPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">
          Account Verification Pending
        </h2>
        <p className="text-gray-600 mb-6">
          Your account is currently under verification. Please wait for admin approval.
        </p>
        <p className="text-gray-500 mb-4">
          Once verified, you will be notified via email and can proceed to use all features of the platform.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default VerificationStatusPage;
