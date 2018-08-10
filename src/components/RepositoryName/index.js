import React from "react";
import { Container } from "./style";

const RepositoryName = ({ user, repo, image }) => (
  <div>
    <Container>
      <img src={image} alt="" />
      <div>
        <h4>{repo}</h4>
        <small>{user}</small>
      </div>
    </Container>
  </div>
);

export default RepositoryName;
