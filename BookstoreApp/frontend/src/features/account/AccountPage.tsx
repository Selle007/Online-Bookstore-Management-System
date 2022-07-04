import React from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Button, Card, Image } from "semantic-ui-react";

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <Card.Group>
        <Card className="accountDetails">
          <Card.Content>
            <Image src="/images/user.jpg" />
            
            <Card.Header>User ID: {localStorage.getItem("userId")}</Card.Header>
            <Card.Description>Userame: {localStorage.getItem("username")}</Card.Description>
            <Card.Description>Name: {localStorage.getItem("name")}</Card.Description>
            <Card.Description>Surname: {localStorage.getItem("surname")}</Card.Description>
            <Card.Description>Email: {localStorage.getItem("email")}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button
                as={Link}
                to="/update-account"
                floated="right"
                type="submit"
                content="Update Information"
                className="updateAccount"
              />
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  );
}
