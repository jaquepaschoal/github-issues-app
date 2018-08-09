import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px 10px 10px;

  img {
    width: 45px;
    height: 45px;
    margin-right: 15px;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 15px;
    }

    small {
      margin-top: 3px;
      color: #969696;
      font-size: 12px;
    }
  }

  &:hover {
    background-color: #eee;
  }

  &:hover i {
    color: #ffff;
  }
`;

export const Icon = styled.div`
  width: 20%;

  i {
    display: flex;
    justify-content: flex-end;
    color: #eee;
    font-size: 12px;
    font-weight: 100;
  }
`;
