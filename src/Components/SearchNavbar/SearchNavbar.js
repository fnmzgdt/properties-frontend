import React from "react";
import Filter from "../Filter/Filter";
import { SearchNavWrapper } from "./SearchNavbar.elements";

const SearchNavbar = () => {
  return (
    <SearchNavWrapper>
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "1rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Filter filterName={"Цена"} options={["бласскасдаа"]} />
      </div>
    </SearchNavWrapper>
  );
};

export default SearchNavbar;
