import React from "react";

import ItemList from "../components/ItemList";
import Header from "../components/Header";
import "./style.css";

export function Kanban() {
  return (
    <div className="content">
      <Header />
      <div className="contentBody">
        <div className="backlog">
          <h3> Backlog </h3>
          <ItemList />
        </div>
        <div className="specification">
          <h3> Especificação </h3>
          <div className="body">
            <div className="leftSide">
              <h4> Em Especificação </h4>
              <ItemList />
            </div>
            <div className="middleSide"></div>
            <div className="rightSide">
              <h4> Especificadas </h4>
              <ItemList />
            </div>
          </div>
        </div>
        <div className="implementation">
          <h3> Implementação </h3>
          <div className="body">
            <div className="leftSide">
              <h4> Em Implementação </h4>
              <ItemList />
            </div>
            <div className="middleSide"> </div>
            <div className="rightSide">
              <h4> Implementadas </h4>
              <ItemList />
            </div>
          </div>
        </div>
        <div className="codeReview">
          <h3> Revisão de Código </h3>
          <div className="body">
            <div className="leftSide">
              <h4> Em Revisão </h4>
              <ItemList />
            </div>
            <div className="middleSide"> </div>
            <div className="rightSide">
              <h4> Revisadas </h4>
              <ItemList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
