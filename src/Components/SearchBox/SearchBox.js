import React, { useState } from "react";
import Filter from "../Filter/Filter";
import { LinkWrapper } from "../Post/Post.elements";
import {
  AdvancedSearchButton,
  SearchField,
  SearchHelper,
  SearchWrapper,
} from "./SearchBox.elements";

const SearchBox = () => {
  const [place, setPlace] = useState("");

  return (
    <SearchWrapper>
      <SearchField
        list="cities"
        placeholder="Населено място..."
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <SearchHelper id="cities">
        {place.length > 0 && (
          <>
            <option value="sofiq" />
            <option value="varna" />
          </>
        )}
      </SearchHelper>
      <div style={{ width: "100%", display: "flex" }}>
        <Filter
          filterName={"Тип"}
          options={["Апартаменти", "Къщи", "Обработваеми земи", "Офиси"]}
        />
        <Filter
          filterName={"Цена"}
          options={[
            "10000 лв. - 50000 лв.",
            "50000 лв. - 100000 лв.",
            "100000 лв. - 250000 лв.",
            "250000 лв. - 1000000 лв.",
          ]}
        />
      </div>
      <div>
        <LinkWrapper to="/search">
          <AdvancedSearchButton>Разширено търсене</AdvancedSearchButton>
        </LinkWrapper>
      </div>
    </SearchWrapper>
  );
};

export default SearchBox;
