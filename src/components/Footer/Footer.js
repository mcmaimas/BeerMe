import React from "react";
import "./Footer.css";
import { Icon } from "semantic-ui-react";

function footer(props) {
  return (
    <div className="footer">
      <Icon
        onClick={() => props.onClick()}
        name="home"
        color={props.activeTabName === "home" ? "green" : "grey"}
        style={{ width: "20%", marginTop: "2%" }}
      />
      <Icon
        onClick={() => props.onClick("search")}
        name="search"
        color={props.activeTabName === "search" ? "green" : "grey"}
        style={{ width: "20%", marginTop: "2%" }}
      />

      <Icon
        onClick={() => props.onClick("trophy")}
        name="trophy"
        color={props.activeTabName === "trophy" ? "yellow" : "grey"}
        style={{ width: "20%", marginTop: "2%" }}
      />
    </div>
  );
}

export default footer;
