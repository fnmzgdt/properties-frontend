import React from "react";
import {
  PostBox,
  PostHeader,
  UserBox,
  UsernameDateContainer,
  UserImage,
  ContentBox,
  PostTitle,
  ImageDescriptionBox,
  ImageContainer,
  LocationPriceAreaBox,
  PriceAreaBox,
  LinkWrapper,
  Username,
} from "./Post.elements";

const Post = ({ data: { name, images, location, title, price, area } }) => {
  console.log(images);
  return (
    <PostBox>
      <PostHeader>
        <UserBox>
          <UserImage />
          <UsernameDateContainer>
            <LinkWrapper to={`user/${name}`}>
              <Username>{name}</Username>
            </LinkWrapper>
            <h4>гр. София, кв. Студентски град</h4>
          </UsernameDateContainer>
        </UserBox>
      </PostHeader>
      <ContentBox>
        <LinkWrapper to="/post">
          <PostTitle>{title}</PostTitle>
        </LinkWrapper>
        <LinkWrapper to="/post">
          <ImageDescriptionBox>
            <ImageContainer src={images[0]}></ImageContainer>
          </ImageDescriptionBox>
        </LinkWrapper>
        <LocationPriceAreaBox>
          <PriceAreaBox>
            <p>{price}</p>
            <p>{area}</p>
          </PriceAreaBox>
        </LocationPriceAreaBox>
      </ContentBox>
    </PostBox>
  );
};

export default Post;
