import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 0.25rem;
  background: #ffffff;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const SearchField = styled.input`
  width: 50%;
  height: 2.5rem;
  padding: 0.75rem 1rem;
  outline: none;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.875rem;
`;

export const SearchHelper = styled.datalist``;

export const AdvancedSearchButton = styled.button`
  margin-top: 1rem;
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 0.5rem;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  font-family: sofiapro-bold, Arial, Tahoma, PingFangSC, sans-serif,
    "Segoe UI Emoji", "Noto Emoji";
  letter-spacing: 1px;
  min-width: 160px;
  white-space: normal;
  font-weight: 500;
  text-align: center;
  padding: 0.75rem 0.8rem 0.75rem;
  color: #fff;
  background-color: #0288d1;
  height: 2.5rem;
  :hover {
    background-color: #29b6f6;
  }
`;
