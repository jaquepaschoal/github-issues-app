import React from "react";
import { Container, Icon } from "./style";

const Repository = ({ image, name, user, alt, showIssues }) => (
  <div onClick={showIssues}>
    <Container>
      <div>
        <img src={image} alt={alt} />
      </div>
      <section>
        <main>
          <h4>{name}</h4>
          <small>{user}</small>
        </main>
        <Icon>
          <i className="fa fa-chevron-right" />
        </Icon>
      </section>
    </Container>
  </div>
);

export default Repository;
