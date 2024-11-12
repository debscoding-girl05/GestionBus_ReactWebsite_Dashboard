const Login = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-200">
      <img src="/path/to/logo.png" alt="Travel Logo" className="w-24 h-24 mb-4" />
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Welcome to Travel</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <form className="space-y-4">
          <div>
            <label className="text-gray-700 font-semibold">Username *</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold">Password *</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="text-right text-purple-500 text-sm cursor-pointer hover:underline">Forgot password?</div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 transition duration-300"
          >
            Log in
          </button>
        </form>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <span className="text-gray-600">Or login with</span>
          <img src="/path/to/apple.jpeg" alt="Apple" className="w-8 h-8" />
          <img src="/path/to/google.jpge" alt="Google" className="w-8 h-8" />
          <img src="/path/to/facebook.jpeg" alt="Facebook" className="w-8 h-8" />
        </div>
        <div className="text-center mt-4 text-gray-600">
          Doesn’t have an account on Travel?{' '}
          <span className="text-purple-700 font-semibold cursor-pointer">Create Account</span>
        </div>
      </div>
    </div>
  );
};

export default Login;