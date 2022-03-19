import { useRef } from "react";
import styled from "styled-components";

const TextFieldWrapper = styled.form`
  width: 100%;
  position: relative;
  &:hover {
    cursor: text;
    & fieldset {
      border-color: #474747;
    }
  }
  &:focus-within {
    & fieldset {
      border-color: #555555;
      border-width: 2px;
    }
    & label {
      transform: translateY(-120%);
      color: #555555;
    }
  }
  &:focus-within,
  &:valid {
    & label {
      transform: translateY(-120%);
    }
    & legend {
      width: 40px;
      max-width: 100%;
      padding-inline-start: 2px;
      padding-inline-end: 2px;
    }
  }
`;

const Label = styled.label`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4375em;
  display: block;
  transform-origin: top left;
  overflow: hidden;
  position: absolute;
  left: 0.8rem;
  top: 1rem;
  z-index: 1;
  pointer-events: none;
  transition: all 0.2s ease;
`; 

const TextFieldContainer = styled.div`
  padding: 1rem 0.8rem;
  position: relative;
  display: flex;
  border-radius: 0.5rem;
`;

const TextInput = styled.textarea`
  width: 100%;
  line-height: 1.5rem;
  border: none;
  outline: none;
  resize: none;
  white-space: pre-wrap;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  background-color: inherit;
`;

const InputFieldset = styled.fieldset`
  position: absolute;
  bottom: 0;
  right: 0;
  top: -5px;
  padding: 0 8px;
  pointer-events: none;
  left: 0;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.5rem;
  overflow: hidden;
  min-width: 0%;
  border-color: rgba(0, 0, 0, 0.23);
`;

const InputLegend = styled.legend`
  display: block;
  padding: 0;
  height: 11px;
  font-size: 0.75em;
  max-width: 0px;
  //padding-inline-start: 2px;
  //padding-inline-end: 2px;
  border-style: none;
`;

const TextField = () => {
  const textareaRef = useRef();

  const clickInput = () => {
    console.log("click");
    textareaRef.current.focus();
  };

  return (
    <TextFieldWrapper>
      <Label>Text</Label>
      <TextFieldContainer onClick={clickInput}>
        <TextInput required rows={1} ref={textareaRef} />
        <InputFieldset>
          <InputLegend></InputLegend>
        </InputFieldset>
      </TextFieldContainer>
    </TextFieldWrapper>
  );
};

export default TextField;
