import { useRef } from "react";
import { ReactComponent as Check } from "../../../images/check.svg";

import {
  CheckWrapper,
  Image,
  ImagesGrid,
  ImageWrapper,
  PhotoUploadBox,
  PhotoUploadWrapper,
  UploadButton,
} from "./FormPhotoUpload.elements";
import uploadImage from "../../../images/upload.png";
import { AnimatePresence, motion } from "framer-motion";

const FormPhotos = ({ setImages, images, setFrontImage, frontImage }) => {
  const inputRef = useRef();

  const imageInputHandle = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const handleSelect = (img) => {
    setFrontImage(img);
  };

  return (
    <PhotoUploadWrapper
      key="photoupload"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <input
        type="file"
        multiple
        hidden
        ref={inputRef}
        onChange={imageInputHandle}
      />
      {images.length === 0 && (
        <PhotoUploadBox>
          <UploadButton onClick={() => inputRef.current.click()}>
            Browse your computer
          </UploadButton>
          <p>Or drag your images here</p>
          <img src={uploadImage} alt="" />
        </PhotoUploadBox>
      )}
      {images.length > 0 && (
        <ImagesGrid>
          {images.map((img, id) => (
            <ImageWrapper key={id}>
              <Image
                chosen={id === frontImage}
                img={img}
                onClick={() => handleSelect(id)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence initial={false}>
                  {id === frontImage && (
                    <motion.div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                      animate={{ scale: "100%" }}
                      initial={{ scale: 0 }}
                      exit={{ scale: 0 }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <CheckWrapper>
                        <Check
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50% , -50%)",
                            fill: "rgba(2, 136, 209, 1)",
                            height: "75%",
                            width: "auto",
                          }}
                        />
                      </CheckWrapper>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Image>
            </ImageWrapper>
          ))}
          <div
            onClick={() => inputRef.current.click()}
            style={{
              background: "#a8a8a8",
              borderRadius: "0.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "6rem" }}>+</div>
          </div>
        </ImagesGrid>
      )}
    </PhotoUploadWrapper>
  );
};

export default FormPhotos;
