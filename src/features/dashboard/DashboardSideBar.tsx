import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Segment, Sidebar } from 'semantic-ui-react'

export const DashboardSideBar = () => {
  return (
    <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
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
        to="/dashboard/books"
        name="Books"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
      <Menu.Item
        as={NavLink}
        to="/dashboard/stores"
        name="Stores"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
      <Menu.Item
        as={NavLink}
        to="/dashboard/categories"
        name="Categories"
        style={{ marginRight: "20px", marginLeft: "20px" }}
      />
    </Sidebar>
  </Sidebar.Pushable>
  )
}
