import React from "react";
import { Content } from "./style";

const FilterStatus = ({ filterIssue }) => (
  <Content onChange={filterIssue}>
    <option value="all">Todas</option>
    <option value="closed">Fechadas</option>
    <option value="open">Abertas</option>
  </Content>
);

export default FilterStatus;
