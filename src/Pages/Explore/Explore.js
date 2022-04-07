import { motion } from "framer-motion";
import { ExplorePostWrapper } from "../../Components/ExplorePostWrapper/ExplorePostWrapper";
import {
  ExploreContainer,
  ExploreWrapper,
  ImageWrapper,
  LocationInput,
  SearchContainer,
  SmallRowWrapper,
} from "./Explore.elements";

const postArray = new Array(3).fill({});

const Explore = () => {
  return (
    <motion.main
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <ExploreContainer>
        <ExploreWrapper>
          <SearchContainer>
            <LocationInput placeholder="Локация..." />
          </SearchContainer>
          <SmallRowWrapper>
            {postArray.map((i, id) => (
              <ImageWrapper key={id}>
                <ExplorePostWrapper></ExplorePostWrapper>
              </ImageWrapper>
            ))}
          </SmallRowWrapper>
          <SmallRowWrapper>
            {postArray.map((i, id) => (
              <ImageWrapper key={id}>
                <ExplorePostWrapper></ExplorePostWrapper>
              </ImageWrapper>
            ))}
          </SmallRowWrapper>
          <SmallRowWrapper>
            {postArray.map((i, id) => (
              <ImageWrapper key={id}>
                <ExplorePostWrapper></ExplorePostWrapper>
              </ImageWrapper>
            ))}
          </SmallRowWrapper>
        </ExploreWrapper>
      </ExploreContainer>
    </motion.main>
  );
};

export default Explore;
