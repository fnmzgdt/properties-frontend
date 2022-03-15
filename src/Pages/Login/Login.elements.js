import styled from "styled-components";

export const LoginSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(5deg, #5f2c82, #49a09d);
    z-index: 1;
    mix-blend-mode: screen;
  }
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const FormBox = styled.div`
  width: 50%;
  & > h2 {
    color: #607d8b;
    font-weight: 600;
    font-size: 1.5em;
    text-transform: uppercase;
    margin-bottom: 20px;
    border-bottom: 4px solid #ff4584;
    display: inline-block;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    width: 60%;
    padding: 40px;
    background: rgb(255 255 255 / 0.9);
    margin: 50px;
  }
`;
export const Form = styled.form``;

export const InputBox = styled.div`
  margin-bottom: 20px;
  width: 100%;
  
  & > span {
    font-size: 1rem;
    margin-bottom: 5px;
    display: inline-block;
    color: #607d8b;
    font-weight: 300;
    letter-spacing: 1px;
  }

  & > input {
    width: 100%;
    padding: 10px 20px;
    outline: none;
    font-weight: 400;
    border: 1px solid #607d8b;
    font-size: 16px;
    letter-spacing: 1px;
    color: #607d8b;
    background: transparent;
    border-radius: 25px;
  }

  & > input[type="submit"] {
    background: #ff4584;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background: #f53677;
    }
  }

  & > p {
    color: #607d8b;
    & > a {
      color: #ff4584;
    }
  }
`;

export const RememberBox = styled.div`
  margin-bottom: 10px;
  color: #607d8b;
  font-weight: 400;
  font-size: 14px;
  user-select: none;
`;
