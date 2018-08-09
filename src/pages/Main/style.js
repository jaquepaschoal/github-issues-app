import styled from "styled-components";

export const Sidebar = styled.div`
  width: 30%;
  height: 100%;
  background-color: #fff;
  padding: 30px 30px 30px 20px;
  box-shadow: 2px -1px 17px -8px rgba(0, 0, 0, 0.53);
  z-index: 111;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    height: 45px;
    width: 200px;
    padding: 0 20px;
    background: #eee;
    border: 0;
    font-size: 16px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? "2px solid #f00" : 0)};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b8;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;

export const Divisor = styled.div`
  width: 270px;
  height: 1px;
  margin: 20px 0;
  background-color: #f5f5f5;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background-color: #ffff;
  width: 100%;
  height: 100px;
  box-shadow: 2px -1px 17px -8px rgba(0, 0, 0, 0.53);
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
