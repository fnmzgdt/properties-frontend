import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as RightArr } from "../../images/rightarrow.svg";
import { ReactComponent as LeftArr } from "../../images/leftarrow.svg";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MainCanvas = styled.div`
  width: 100%;
  height: 31rem;
  max-height: 31rem;
  background: #f2f2f2;
  position: relative;
  cursor: pointer;
`;
export const NavigationArrow = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f2f3f5;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  left: ${({ position }) => (position === "left" ? `3%` : `92%`)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const ImageSelectorContainer = styled.div`
  width: 100%;
  height: 2rem;
  position: absolute;
  top: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: 20;
`;

export const CircleSelector = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.2rem;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#333" : "#F2F3F5")};
`;

export const LeftArrowIcon = styled(LeftArr)``;

export const RightArrowIcon = styled(RightArr)``;

export const Image = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
`;
