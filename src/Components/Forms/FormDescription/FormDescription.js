import React from "react";
import TextField from "../../TextFields/TextField";
import TextField2 from "../../TextFields/TextField2";
import { motion } from "framer-motion";

const FormDescription = () => {
  return (
    <motion.div
      style={{ display: "flex", justifyContent: "center"}}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      <TextField />
      <TextField2 />
    </motion.div>
  );
};

export default FormDescription;
