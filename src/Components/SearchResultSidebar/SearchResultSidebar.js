import {
  SearchResultWrapper,
  PostContainer,
  PostDescriptionContainer,
  UserCredentialsContainer,
  UserCredentials,
  ImageContainer,
  PostDescriptionText,
  PostTextWrapper,
  LocationContainer,
  FilledLikeIcon,
  LinkWrapper,
} from "./SearchResultSidebar.elements";

const SearchResultSidebar = () => {
  return (
    <SearchResultWrapper
      key={"searchpagekey"}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
        <LinkWrapper key={i} to="/post">
          <PostContainer>
            <PostDescriptionContainer>
              <UserCredentialsContainer>
                <UserCredentials>
                  <div />
                  <p>Аддресс</p>
                </UserCredentials>
                <FilledLikeIcon />
              </UserCredentialsContainer>
              <PostTextWrapper>
                <PostDescriptionText>
                  "Инфарктът на Шойгу е станал след тежкото обвинение от страна
                  на Путин за пълния провал на инвазията в Украйна"...
                </PostDescriptionText>
              </PostTextWrapper>
              <LocationContainer>
                <p>гр. Варна</p>
              </LocationContainer>
            </PostDescriptionContainer>
            <ImageContainer></ImageContainer>
          </PostContainer>
        </LinkWrapper>
      ))}
      {/* (
          <SearchPromptContainer>
            <SearchHouseIcon />
            <SearchPromptHeader>
              Потърси къщи в избрания от теб район
            </SearchPromptHeader>
          </SearchPromptContainer>
        )
        */}
    </SearchResultWrapper>
  );
};

export default SearchResultSidebar;
