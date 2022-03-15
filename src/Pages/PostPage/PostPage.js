import React, { useState } from "react";
import {
  Price,
  Area,
  ConverterContainer,
  DescriptionContainer,
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

  return (
    <PostPageContainer>
      <PostContainer>
        <Postheader>
          Луксозна къща в жилищен комплекс от затворен тип
        </Postheader>
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
        <DescriptionContainer></DescriptionContainer>
      </PostContainer>
    </PostPageContainer>
  );
};

export default PostPage;
