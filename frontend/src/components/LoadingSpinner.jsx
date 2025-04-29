import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      {/* Simple Loading Spinner */}
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-t-4 border-green-200 border-t-green-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default LoadingSpinner;
