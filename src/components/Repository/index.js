import React from "react";
import { Container, Icon } from "./style";

const Repository = ({ repositories, showIssues }) => (
  <div onClick={showIssues}>
    {repositories.map(repository => (
      <Container key={repository.id} id={repository.id}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <section>
          <main>
            <h4>{repository.name}</h4>
            <small>{repository.owner.login}</small>
          </main>

          <Icon>
            <i className="fa fa-chevron-right" />
          </Icon>
        </section>
      </Container>
    ))}
  </div>
);

export default Repository;
