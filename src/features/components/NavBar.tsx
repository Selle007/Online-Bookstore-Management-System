import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Input, Menu } from "semantic-ui-react";
import '../../app/layout/styles.css';

export default function Navbar() {
  return (
    <Menu secondary fixed="top" inverted>
      <Menu.Item header>
        <img
          className="logo"
          src="/images/logo.png"
          alt="logo"
          style={{ marginLeft: "25px" }}
        />
      </Menu.Item>
      <Menu.Item
        as={NavLink}
        to="/"
        name="Home"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
      <Menu.Item
        as={NavLink}
        to="/books"
        name="Books"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
      <Menu.Item
        as={NavLink}
        to="/blog"
        name="Blog"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
      <Menu.Item
        as={NavLink}
        to="/aboutUs"
        name="About"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
      <Menu.Item
        as={NavLink}
        to="/contact"
        name="Contact"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
      <Menu.Item
        as={NavLink}
        to="/dashboard"
        name="Dashboard"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item>
          <Button className="loginBtn" floated="right" as={NavLink} to="/login" content="Login" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
