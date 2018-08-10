import React, { Component } from "react";
import { Sidebar, Form, Divisor, Header, Content, Box } from "./style";
import Repository from "../../components/Repository";
import RepositoryName from "../../components/RepositoryName";
import FilterStatus from "../../components/FilterStatus";
import Issue from "../../components/Issue";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    input: "",
    repositoryError: false,
    repositories: [],
    repoClick: false,
    issues: [],
    repositoryName: "",
    repositoryUser: "",
    repositoryAvatar: ""
  };

  addRepository = async e => {
    e.preventDefault();

    try {
      const repository = await api.get(`repos/${this.state.input}`);

      this.setState({
        input: "",
        repositories: [...this.state.repositories, repository.data],
        repositoryError: false
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  showIssues = async (login, name, avatar) => {
    try {
      const issue = await api.get(`repos/${login}/${name}/issues?state=all `);
      this.setState({
        issues: [issue.data],
        repositoryName: name,
        repositoryUser: login,
        repositoryAvatar: avatar,
        repoClick: true
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
    }
  };

  render() {
    return (
      <Content>
        <Sidebar>
          <Form
            onSubmit={this.addRepository}
            withError={this.state.repositoryError}
          >
            <input
              type="text"
              placeholder="Novo repositório"
              value={this.state.input}
              onChange={e => this.setState({ input: e.target.value })}
            />
            <button type="submit">
              <i className="fa fa-plus-circle" />
            </button>
          </Form>
          <Divisor />
          {this.state.repositories.map(repository => {
            return (
              <Repository
                key={repository.id}
                image={repository.owner.avatar_url}
                name={repository.name}
                user={repository.owner.login}
                alt={repository.name}
                showIssues={() =>
                  this.showIssues(
                    repository.owner.login,
                    repository.name,
                    repository.owner.avatar_url
                  )
                }
              />
            );
          })}
        </Sidebar>

        <Box>
          <Header>
            {this.state.repoClick && (
              <RepositoryName
                repo={this.state.repositoryName}
                user={this.state.repositoryUser}
                image={this.state.repositoryAvatar}
              />
            )}
            <FilterStatus />
          </Header>
          {this.state.repoClick && <Issue issues={this.state.issues[0]} />}
        </Box>
      </Content>
    );
  }
}
