

const AfterRegister = () => {
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4">
                    Successfully Registered!
                </h2>
                <p className="text-gray-600 mb-6">
                    Your account has been created successfully.
                </p>
                <a
                    href="/create-profile"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                    Create Your Profile
                </a>
            </div>
        </div>
    );
};

export default AfterRegister;