// Imports
import { motion } from "framer-motion";

export default function Score({ id, scoreActive, setScoreActive, number }) {
  function handleClick() {
    setScoreActive(number);
  }
  return (
    <motion.button
      whileTap={{ scale: 1.15 }}
      transition={{ duration: 0.05 }}
      onClick={handleClick}
      className={`flex items-center justify-center  hover:text-white ${scoreActive == number ? "bg-rating-orange text-white" : "bg-rating-dark-blue  text-rating-medium-grey hover:bg-rating-medium-grey"} active:bg-rating-orange w-[42px] h-[42px] sm:w-[51px] sm:h-[51px] transition-colors  rounded-full   font-bold`}>
      {number}
    </motion.button>
  );
}
