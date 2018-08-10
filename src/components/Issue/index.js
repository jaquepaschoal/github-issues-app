import React from "react";
import { Container, Teste } from "./style";

const Issue = ({ issues }) => (
  <Teste>
    {issues.map(item => (
      <Container key={item.id}>
        <div>
          <img src={item.user.avatar_url} />
        </div>
        <div>
          <div>
            <h4>{item.title}</h4>
            <small>{item.user.login} </small>
          </div>
          <a href={item.html_url} target="blank">
            <i className="fa fa-external-link" />
            ABRIR ISSUE
          </a>
        </div>
      </Container>
    ))}
  </Teste>
);
export default Issue;
