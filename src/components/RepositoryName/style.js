import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0 10px 10px;

  img {
    width: 45px;
    height: 45px;
    margin-right: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 15px;
    }

    small {
      margin-top: 3px;
      color: #969696;
      font-size: 12px;
    }
  }
`;
