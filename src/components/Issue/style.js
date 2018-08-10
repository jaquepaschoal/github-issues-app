import styled from "styled-components";

export const Teste = styled.div`
  display: flex;
  max-height: 100%;
  overflow: scroll;
  flex-wrap: wrap;
  width: 100%;
`;

export const Container = styled.div`
  margin: 20px;
  width: calc(100% / 3.5);
  display: flex;
  padding: 20px;
  background-color: #ffff;
  box-shadow: 2px -1px 17px -8px rgba(0, 0, 0, 0.53);

  img {
    width: 64px;
    height: 64px;
    margin-right: 15px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      width: 160px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 15px;
    }

    small {
      margin-top: 3px;
      color: #969696;
      font-size: 12px;
    }

    a {
      padding: 6px 12px;
      width: 120px;
      margin-top: 5px;
      background: #b286d1;
      color: #fff;
      border: 0;
      font-size: 11px;
      font-weight: bold;
      border-radius: 3px;
      text-decoration: none;

      i {
        margin-right: 5px;
      }
    }
  }
`;
