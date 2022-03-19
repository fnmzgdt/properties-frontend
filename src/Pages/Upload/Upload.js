import { useState } from "react";
import FormDescription from "../../Components/Forms/FormDescription/FormDescription";
import FormLocation from "../../Components/Forms/FormLocation/FormLocation";
import FormPhotos from "../../Components/Forms/FormPhotoUpload/FormPhotoUpload";
import { AnimatePresence, motion } from "framer-motion";
import {
  PageWrapper,
  UploadListingContainer,
  FormContainer,
  UploadPageContainer,
} from "./Upload.elements";
import { NavigationLink } from "./Upload.elements";

const Upload = () => {
  const [form, setForm] = useState(0);

  //state for Image Upload Form
  const [images, setImages] = useState([]);
  const [frontImage, setFrontImage] = useState(null);

  const nextForm = () => {
    if (form < 4) {
      setForm(form + 1);
    }
  };

  const prevForm = () => {
    if (form > 0) {
      setForm(form - 1);
    }
  };

  return (
    <motion.main
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <UploadPageContainer>
        <PageWrapper>
          <UploadListingContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
              }}
            >
              <NavigationLink
                onClick={prevForm}
                visible={form > 0}
                disabled={!(form > 0)}
              >
                Назад
              </NavigationLink>
              <div>Създаване на публикация {`${form + 1} / 5`}</div>
              <NavigationLink
                onClick={nextForm}
                visible={form < 4}
                disabled={!(form < 4)}
              >
                Следващ
              </NavigationLink>
            </div>
            <FormContainer key="">
              <AnimatePresence exitBeforeEnter>
                {form === 0 && <FormDescription key="formdescription" />}

                {form === 1 && (
                  <FormPhotos
                    setImages={setImages}
                    images={images}
                    setFrontImage={setFrontImage}
                    frontImage={frontImage}
                  />
                )}

                {form === 2 && <FormLocation key="formlocation" />}

                {form === 3 && <div />}

                {form === 4 && <div />}
              </AnimatePresence>
            </FormContainer>
          </UploadListingContainer>
        </PageWrapper>
      </UploadPageContainer>
    </motion.main>
  );
};

export default Upload;
