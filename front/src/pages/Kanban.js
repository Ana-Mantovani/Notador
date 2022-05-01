import React from "react";

import CheckboxItem from "../components/CheckboxItem";
import Header from "../components/Header";
import "./style.css";

export function Kanban() {
  return (
    <div className="content">
      <Header />
      <div className="contentBody">
        <div className="backlog">
          <h3> Backlog </h3>
          <div className="itens">
            <CheckboxItem itemName="Teste de item" cName="red" />
            <CheckboxItem itemName="Teste de item 2" cName="yellow" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
            <CheckboxItem itemName="Teste de item 3" cName="red" />
          </div>
        </div>
        <div className="specification">
          <h3> Especificação </h3>
          <div className="body">
            <div className="leftSide">
              <h4> Em Especificação </h4>
              <div className="itens">
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item 2" cName="yellow" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 4" cName="red" />
              </div>
            </div>
            <div className="middleSide"></div>
            <div className="rightSide">
              <h4> Especificadas </h4>
              <div className="itens">
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item 2" cName="yellow" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
              </div>
            </div>
          </div>
        </div>
        <div className="implementation">
          <h3> Implementação </h3>
          <div className="body">
            <div className="leftSide">
              <h4> Em Implementação </h4>
              <div className="itens">
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item 2" cName="yellow" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
              </div>
            </div>
            <div className="middleSide"> </div>
            <div className="rightSide">
              <h4> Implementadas </h4>
              <div className="itens">
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itenName="Teste de item 2" cName="yellow" />
              </div>
            </div>
          </div>
        </div>
        <div className="codeReview">
          <h3> Revisão de Código </h3>
          <div className="body">
            <div className="leftSide">
              <h4> Em Revisão </h4>
              <div className="itens">
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item" cName="red" />
              </div>
            </div>
            <div className="middleSide"> </div>
            <div className="rightSide">
              <h4> Revisadas </h4>
              <div className="itens">
                <CheckboxItem itemName="Teste de item" cName="red" />
                <CheckboxItem itemName="Teste de item 2" cName="yellow" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
                <CheckboxItem itemName="Teste de item 3" cName="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
