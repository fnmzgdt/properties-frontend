import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  FilterBox,
  FilterWrapper,
  UpArrowIcon,
  DownArrowIcon,
  FilterDropdown,
  OptionWrapper,
  OptionLabel,
  Checkbox,
} from "./Filter.elements";

const Filter = ({ filterName, options }) => {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    //Alert if clicked on outside of element
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const blur = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <FilterBox id="filter" ref={wrapperRef}>
      <FilterWrapper onClick={blur}>
        <span>{filterName}</span>
        {open ? <UpArrowIcon /> : <DownArrowIcon />}
      </FilterWrapper>
      <AnimatePresence>
        {open && (
          <FilterDropdown
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
            }}
          >
            {options.map((option, id) => (
              <OptionWrapper key={id}>
                <OptionLabel>
                  <Checkbox type="checkbox" />
                  {option}
                </OptionLabel>
              </OptionWrapper>
            ))}
            {/*<OptionWrapper>
              <OptionLabel>
                <Checkbox type="checkbox" />
                Апартаменти
              </OptionLabel>
            </OptionWrapper>
            <OptionWrapper>
              <OptionLabel>
                <Checkbox type="checkbox" />
                Къщи
              </OptionLabel>
            </OptionWrapper>
            <OptionWrapper>
              <OptionLabel>
                <Checkbox type="checkbox" />
                Обработваеми земи
              </OptionLabel>
            </OptionWrapper>*/}
          </FilterDropdown>
        )}
      </AnimatePresence>
    </FilterBox>
  );
};

export default Filter;
