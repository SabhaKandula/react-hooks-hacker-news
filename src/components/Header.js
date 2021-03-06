import React from "react";
import { WithRouter, NavLink } from "react-router-dom";
import { FirebaseContext } from "../firebase";

function Header() {
  const { user, firebase } = React.useContext(FirebaseContext);
  return (
    <div className="header">
      <div className="flex">
        <img src="/logo.png" alt="Hooks News Logo" className="logo" />
        <NavLink to="/" className="header-title">
          Hooks News
        </NavLink>
        <NavLink to="/" className="header-link">
          new
        </NavLink>
        <div className="divider" />
        <NavLink to="/top" className="header-link">
          top
        </NavLink>
        <NavLink to="/search" className="header-link">
          search
        </NavLink>
        {user && (
          <>
            <div className="divider" />
            <NavLink to="/create" className="header-link">
              submit
            </NavLink>
          </>
        )}
      </div>
      <div className="flex">
        {user ? (
          <>
            <div className="header-name">{user.displayName}</div>
            <div className="divider" />
            <div className="header-button" onClick={() => firebase.logout()}>
              logout
            </div>
          </>
        ) : (
          <NavLink to="/login" className="header-link">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Header;
