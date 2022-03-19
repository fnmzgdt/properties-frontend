import { useState } from "react";
import { motion } from "framer-motion";
import {
  Price,
  Area,
  ConverterContainer,
  ImageWrapper,
  PostContainer,
  Postheader,
  PostPageContainer,
  UserInfoContainer,
  ImageAuthorContainer,
  AuthorPriceWrapper,
  CurrencyButton,
  UsdCurrency,
  CurrencyButtonWrapper,
  EuroCurrency,
  Agency,
  AuthorContainer,
  AuthorProfileImage,
  AuthorDetails,
  PublishedBy,
  ShowPhoneButton,
  PhoneNumber,
  Tag,
  TagContainer,
  LocationIcon,
  LocationContainer,
} from "./PostPage.elements";

const PostPage = () => {
  const initialPrice = 200000;
  const [price, setPrice] = useState({
    initialPrice,
    price: initialPrice,
    currency: "€",
  });

  const toUsdHandler = () => {
    if (price.currency === "$") return;
    let priceInUsd = price.initialPrice * 0.9113244213;
    setPrice({
      initialPrice,
      price: priceInUsd.toFixed(0),
      currency: "$",
    });
  };

  const toBgnHandler = () => {
    if (price.currency === "лв") return;
    let priceInBgn = price.initialPrice * 2.0933;
    setPrice({
      initialPrice,
      price: priceInBgn.toFixed(0),
      currency: "лв",
    });
  };

  const toEuroHandler = () => {
    if (price.currency === "€") return;
    let priceInEuro = price.initialPrice;
    setPrice({
      initialPrice,
      price: priceInEuro,
      currency: "€",
    });
  };
const tags = [{name: "house", color: "red"}, {name: "for sell", color: "lightblue"}, {name: "Sofia", color: "lightgreen"}, {name: "deal", color: "orange"},{name: "house", color: "red"}, {name: "for sell", color: "lightblue"}, {name: "Sofia", color: "lightgreen"}]

const tagMapper = (tags) => {
  if (tags.length > 6) {
    return (
      <>{tags.slice(0,6).map((tag, i) => (
        <Tag color={tag.color} key={i}>{tag.name}</Tag>
      ))}
        <Tag color={"grey"}>+6 more</Tag>
      </>
    )
  } else {
    return tags.map((tag, i) => (
      <Tag color={tag.color} key={i}>{tag.name}</Tag>
    ))
  }
}
  return (
    <motion.div 
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }} 
    exit={{ opacity: 0 }}
    transition={{
      duration: 0.25,
    }}>
    <PostPageContainer>
      <PostContainer>
          <Postheader>
          Луксозна къща в жилищен комплекс от затворен тип ща в жилищен комплектворен тип в жилплекс от затворен тип
          </Postheader>
          <TagContainer>
            {tagMapper(tags)}
          </TagContainer>
          <LocationContainer>
            <LocationIcon/>
            <h4>Sofia, Bulgaria</h4>
          </LocationContainer>
        <ImageAuthorContainer>
          <ImageWrapper />
          <AuthorPriceWrapper>
            <ConverterContainer>
              <Price>
                {price.price.toString().slice(0, 3)}{" "}
                {price.price.toString().slice(3)} {price.currency}
              </Price>
              <CurrencyButtonWrapper>
                <CurrencyButton
                  onClick={toUsdHandler}
                  selected={price.currency === "$"}
                >
                  <UsdCurrency />
                </CurrencyButton>
                <CurrencyButton
                  onClick={toBgnHandler}
                  selected={price.currency === "лв"}
                >
                  лв
                </CurrencyButton>
                <CurrencyButton
                  onClick={toEuroHandler}
                  selected={price.currency === "€"}
                >
                  <EuroCurrency />
                </CurrencyButton>
              </CurrencyButtonWrapper>
              <Area>125м² площ</Area>
            </ConverterContainer>
            <PublishedBy>ПУБЛИКУВАНО ОТ</PublishedBy>
            <Agency>Аддресс София (агенция)</Agency>
            <AuthorContainer>
              <AuthorProfileImage />
              <AuthorDetails>
                <h4>Бочко Бочев</h4>
                <p>Брокер</p>
              </AuthorDetails>
            </AuthorContainer>
            <PhoneNumber>08 XXX XXX XX</PhoneNumber>
            <ShowPhoneButton>Покажи номер</ShowPhoneButton>
          </AuthorPriceWrapper>
        </ImageAuthorContainer>

        <UserInfoContainer></UserInfoContainer>
      </PostContainer>
    </PostPageContainer>
    </motion.div>
  );
};

export default PostPage;
