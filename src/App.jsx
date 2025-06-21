
import { motion } from "framer-motion";


function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}         // Off-screen to the left and invisible
        animate={{ x: 0, opacity: 1 }}             // Slides into place and fades in
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl text-white font-bold"
      >
        Welcome to My Portfolio 👋
      </motion.h1>
    </div>
  );
}

export default App;
