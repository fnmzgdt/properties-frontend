import styled from "styled-components";
import { motion } from "framer-motion";

export const SearchPageWrapper = styled(motion.main)`
  min-height: calc(100vh - 3.5rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 3.5rem);
  position: relative;
`;

export const SearchResultsContainer = styled.div`
  position: sticky;
  left: 0px;
  top: 0px;
  width: 46rem;
  min-width: 46rem;
  min-height: 100%;
  border-right: 1px solid #dbdbdb;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchMapContainer = styled.div`
  width: 100%;
  minheight: 100%;
  position: relative;
`;

export const SearchMapButton = styled(motion.div)`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 7%;
  z-index: 401;
  width: 12rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  border-radius: 1rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;
  color: #555;
`;
