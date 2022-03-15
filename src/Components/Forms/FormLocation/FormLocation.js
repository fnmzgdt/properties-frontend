import React from "react";
import styled from "styled-components";
import LeafletMap from "../../LeafletMap";
import { motion } from "framer-motion";

const MapWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
`;
const FormLocation = () => {
  return (
    <MapWrapper
      style={{ display: "flex", justifyContent: "center" }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      <LeafletMap />
    </MapWrapper>
  );
};

export default FormLocation;
