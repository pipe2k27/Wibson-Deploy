import React from "react";
import "./Team.css";
import { teamList } from "./TeamList";

export default function Team() {
  const teamMap = (member) => {
    return (
      <div className="team-member">
        <img
          src={process.env.PUBLIC_URL + member.pic}
          alt="member"
          className="member-pic"
        ></img>
        <h4 className="darker-text">{member.name}</h4>
        <p className="darker-text">{member.role}</p>
      </div>
    );
  };
  return (
    <div className="team back-white">
      <h1 className="dark-text">Meet the Team</h1>
      <div className="team-grid">{teamList.map(teamMap)}</div>
    </div>
  );
}
