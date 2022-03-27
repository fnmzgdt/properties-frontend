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
  DescriptionContainer,
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
  DescriptionHeader,
  DescriptionText,
} from "./PostPage.elements";
import Carousel from "../../Components/Carousel/Carousel";

const PostPage = () => {
  const initialPrice = 495;
  const [price, setPrice] = useState({
    initialPrice,
    price: initialPrice,
    currency: "€",
  });
  const [phone, setPhone] = useState(null);

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

  const tags = [
    { name: "2 bani", color: "#4a9069", hover: "#6bb38b" },
    { name: "terasa", color: "#4a9069", hover: "#6bb38b" },
    { name: "3 spalni", color: "#69439d", hover: "#8b66be" },
    { name: "parking", color: "#d90000", hover: "#ff4040" },
    { name: "wi-fi", color: "#d90000", hover: "#ff4040" },
  ];

  const showPhone = (e) => {
    e.preventDefault();
    setPhone("08 773 948 32");
  };

  const tagMapper = (tags) => {
    if (tags.length > 6) {
      return (
        <>
          {tags.slice(0, 6).map((tag, i) => (
            <Tag
              color={tag.color}
              hover={tag.hover}
              key={`${i}${tag.name}`}
              to={`/tags/${tag.name}`}
            >{`${tag.name}`}</Tag>
          ))}
          <Tag color={"grey"} to={""}>
            +6 more
          </Tag>
        </>
      );
    } else {
      return tags.map((tag, i) => (
        <Tag
          color={tag.color}
          hover={tag.hover}
          key={`${i}${tag.name}`}
          to={`/tags/${tag.name}`}
        >
          {`${tag.name}`}{" "}
        </Tag>
      ));
    }
  };
  return (
    <motion.div
      key={"postpagekey"}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      <PostPageContainer>
        <PostContainer>
          <Postheader>
            Луксозна къща в жилищен комплекс от затворен тип ща в жилищен
            комплектворен тип в жилплекс от затворен тип
          </Postheader>
          <TagContainer>{tagMapper(tags)}</TagContainer>
          {/*
            <LocationContainer>
              <LocationIcon />
              <h4>Sofia, Bulgaria</h4>
              <p>покажи на картата</p>
            </LocationContainer>
          */}
          <ImageAuthorContainer>
            <ImageWrapper>
              <Carousel />
            </ImageWrapper>
            <AuthorPriceWrapper>
              <ConverterContainer>
                <Price>
                  {price.price.length > 5
                    ? price.price.toString().slice(0, 3)
                    : price.price.toString()}{" "}
                  {price.price.length > 5
                    ? price.price.toString().slice(3)
                    : ""}{" "}
                  {price.currency}
                  {" / месец"}
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
              <PhoneNumber>{phone ? phone : "08 XXX XXX XX"}</PhoneNumber>
              <ShowPhoneButton onClick={showPhone} type="button">
                Покажи номер
              </ShowPhoneButton>
            </AuthorPriceWrapper>
          </ImageAuthorContainer>

          <DescriptionContainer>
            <DescriptionHeader>{"Описание"}</DescriptionHeader>
            <DescriptionText>
              {
                "Не образувайте изречения с пълен смисъл, а дайте живот на тестов текст, полезен за запълване на пространства, които впоследствие ще бъдат заети от ad hoc текстове, съставени от комуникационни специалисти. Със сигурност е най -известният заместващ текст дори ако има различни версии, които се различават от реда, в който се повтарят латинските думи. Lorem ipsum съдържа шрифтове , които се използват повече, аспект което ви позволява да имате преглед на изобразяването на текста по отношение на избор на шрифт an d размер на шрифта ."
              }
            </DescriptionText>
            <DescriptionHeader>{"Предимства"}</DescriptionHeader>
          </DescriptionContainer>
        </PostContainer>
      </PostPageContainer>
    </motion.div>
  );
};

export default PostPage;
