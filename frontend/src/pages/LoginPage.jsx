import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
// import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    // await login(email, password);
    console.log("Login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md overflow-hidden rounded-2xl bg-gray-800 bg-opacity-50 shadow-xl backdrop-blur-xl backdrop-filter"
    >
      <div className="p-8">
        <h2 className="mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-center text-3xl font-bold text-transparent">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mb-6 flex items-center">
            <Link
              to="/forgot-password"
              className="text-sm text-green-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          {/* {error && <p className="mb-2 font-semibold text-red-500">{error}</p>} */}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 font-bold text-white shadow-lg transition duration-200 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            type="submit"
            // disabled={isLoading}
          >
            {/* {isLoading ? (
              <Loader className="mx-auto h-6 w-6 animate-spin" />
            ) : (
              "Login"
            )} */}
            Login
          </motion.button>
        </form>
      </div>
      <div className="flex justify-center bg-gray-900 bg-opacity-50 px-8 py-4">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
export default LoginPage;
