import styled from "styled-components";
import { motion } from "framer-motion";

export const PhotoUploadWrapper = styled(motion.div)`
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const PhotoUploadBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    margin-top: 1.25rem;
    font-size: 1.25rem;
    color: grey;
  }

  & > img {
    width: 10rem;
  }
`;

export const UploadButton = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 0.5rem;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 1px;
  min-width: 160px;
  white-space: normal;
  font-weight: 500;
  text-align: center;
  padding: 0.75rem 0.8rem 0.75rem;
  color: #fff;
  background-color: #0288d1;
  height: 2.5rem;
  :hover {
    background-color: #29b6f6;
  }
`;

export const ImagesGrid = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-auto-rows: 30%;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const Image = styled(motion.div)`
  box-shadow: ${({ chosen }) =>
    chosen ? "rgba(2, 136, 209, 0.5) 0px 12px 18px" : "none"};
  background-image: ${({ chosen, img }) =>
    chosen
      ? `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(${img})`
      : `url(${img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ededed;
  height: 100%;
  width: 100%;
`;

export const CheckWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 3.5rem;
  max-height: 3.5rem;
  width: 3.5rem;
  max-width: 3.5rem;
  background: white;
  border-radius: 500px;
`;

/*
  boxShadow: id === frontImage
                    ? "rgba(2, 136, 209, 0.5) 0px 2px 18px 2px"
                    : "none",
                position: "relative",
                backgroundImage: `${
                  id === frontImage
                    ? "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),"
                    : ""
                } url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#ededed",
                height: "100%",
                width: "100%",
                borderRadius: "0.5rem",
                cursor: "pointer",
*/
