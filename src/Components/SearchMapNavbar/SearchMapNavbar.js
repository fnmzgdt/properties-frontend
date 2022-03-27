import Filter from "../Filter/Filter";
import {
  FilterContainer,
  SearchMapNavbarContainer,
} from "./SearchMapNavbar.elements";

const SearchMapNavbar = () => {
  return (
    <SearchMapNavbarContainer>
      <FilterContainer>
        {" "}
        <Filter filterName={"Цена"} options={["бласскасдаа"]} />
      </FilterContainer>
    </SearchMapNavbarContainer>
  );
};

export default SearchMapNavbar;
