import React from "react";
import { Container } from "semantic-ui-react";
import DashboardNav from "./DashboardNav";
import DashboardSideBar from "./DashboardSideBar";



export default function Dashboard() {
  return (
    <>
    <DashboardSideBar />
    <Container style={{ marginTop: "7em"}}>
        <h1>Dashboard</h1>
    </Container>
    </>

  );
}
