import React from "react";
import { NavLink } from "react-router-dom";
import {
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

export default function DashboardSideBar() {
  return (
    <>
    <Menu fixed="top" inverted />
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Menu.Item header>
        <img className="logo" src="/images/logoText.png" alt="logo" />
        
      </Menu.Item>
      <Menu.Item as={NavLink} to="/" name="Home">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to="/dashboard/books" name="Books">
        <Icon name="book" />
        Books
      </Menu.Item>
      <Menu.Item as={NavLink} to="/dashboard/categories" name="Categories">
        <Icon name="folder" />
        Categories
      </Menu.Item>
      <Menu.Item as={NavLink} to="/dashboard/suppliers" name="Suppliers">
        <Icon name="cart" />
        Suppliers
      </Menu.Item>
      <Menu.Item as={NavLink} to="/dashboard/orders" name="Orders">
        <Icon name="mail outline" />
        Orders
      </Menu.Item>
      <Menu.Item as={NavLink} to="/dashboard/stocks" name="Stocks">
        <Icon name="boxes" />
        Stocks
      </Menu.Item>
      <Menu.Item as={NavLink} to="/dashboard/users" name="Users">
        <Icon name="user" />
        Users
      </Menu.Item>
      <Menu.Item as={NavLink} to="/dashboard/roles" name="Roles">
        <Icon name="code" />
        Roles
      </Menu.Item>
      <Menu.Item as={NavLink} to="/dashboard/reviews" name="Reviews">
        <Icon name="star outline" />
        Reviews
      </Menu.Item>
    </Sidebar>
    </>
    
  );
}
