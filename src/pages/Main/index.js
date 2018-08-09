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
    repositories: []
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

  showIssues = e => {
    let repoId = e.target.id;
    console.log(e.target);
    let repo = this.state.repositories.find(item => item.id === repoId);

    console.log(repo);
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
          <Repository
            showIssues={this.showIssues}
            repositories={this.state.repositories}
          />
        </Sidebar>

        <Box>
          <Header>
            <RepositoryName />
            <FilterStatus />
          </Header>
          <Issue>teste</Issue>
        </Box>
      </Content>
    );
  }
}
