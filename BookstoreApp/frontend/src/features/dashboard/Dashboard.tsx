import React from "react";
import { Container } from "semantic-ui-react";
import DashboardNav from "./DashboardNav";


export default function Dashboard() {
  return (
    <>
    <DashboardNav />
    <Container style={{ marginTop: "7em"}}>
        <h1>Dashboard</h1>
    </Container>
    </>

  );
}
