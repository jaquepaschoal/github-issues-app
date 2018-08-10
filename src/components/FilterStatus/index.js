import React from "react";
import { Content } from "./style";

const FilterStatus = () => (
  <Content>
    <option value="0">Todas</option>
    <option value="1">Fechadas</option>
    <option value="2">Abertas</option>
  </Content>
);

export default FilterStatus;
