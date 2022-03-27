import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  CarouselContainer,
  CircleSelector,
  Image,
  ImageSelectorContainer,
  LeftArrowIcon,
  MainCanvas,
  NavigationArrow,
  RightArrowIcon,
} from "./Carousel.elements";

const images = [
  "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg",

  "https://image.cnbcfm.com/api/v1/image/106758801-1603459526384-picture-perfect-beautiful-house-on-the-island-of-coronado-in-sunny-california-beautifully-landscaped_t20_6lJOrv.jpg?v=1603459593&w=1600&h=900",

  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",

  "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607",

  "https://ca-times.brightspotcdn.com/dims4/default/c9a627c/2147483647/strip/true/crop/2000x1195+0+0/resize/840x502!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fad%2Ff4%2F1f1b2193479eafb7cbba65691184%2F10480-sunset-fullres-01.jpg",
];

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0.8,
      y: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0.8,
      y: 0,
    };
  },
};

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Carousel = () => {
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const mapCircleSelectors = (images) => {
    return images.map((img, i) => {
      return <CircleSelector key={img} active={imageIndex === i} />;
    });
  };

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <CarouselContainer>
      <MainCanvas
        onMouseOver={() => setArrowsVisible(true)}
        onMouseLeave={() => setArrowsVisible(false)}
      >
        <>
          <AnimatePresence initial={false} custom={direction}>
            <Image
              key={page}
              url={images[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 35 },
                opacity: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>
        </>
        <>
          <AnimatePresence>
            {arrowsVisible && (
              <NavigationArrow
                key={"leftarrow"}
                onClick={() => paginate(-1)}
                position={"left"}
                animate={{ opacity: 0.8 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
              >
                <LeftArrowIcon />
              </NavigationArrow>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {arrowsVisible && (
              <NavigationArrow
                key={"rightarrow"}
                onClick={() => paginate(1)}
                position={"right"}
                animate={{ opacity: 0.8 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                }}
              >
                <RightArrowIcon />
              </NavigationArrow>
            )}
          </AnimatePresence>
        </>
        <ImageSelectorContainer>
          {mapCircleSelectors(images)}
        </ImageSelectorContainer>
      </MainCanvas>
    </CarouselContainer>
  );
};

export default Carousel;
