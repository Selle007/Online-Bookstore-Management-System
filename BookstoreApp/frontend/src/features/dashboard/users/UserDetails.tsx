import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import DashboardNav from "../DashboardNav";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";

export default observer(function UserDetails() {
  const { usersStore } = useStore();
  const {
    selectedUser: user,
    loadUser,
    loadingInitial,
  } = usersStore;
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    if (userId) loadUser(userId);
  }, [userId, loadUser]);

  if (loadingInitial || !user) return <LoadingComponent />;

  return (
    <><DashboardNav />
    <Card.Group style={{ marginTop: "2.8em" }}>
      <Card fluid>
        <Card.Content>
          <Card.Header>{user.userId }     {user.username}</Card.Header>
          <Card.Description>{user.name}</Card.Description>
          <Card.Description>{user.surname}</Card.Description>
          <Card.Description>{user.email}</Card.Description>
          <Card.Description>{user.password}</Card.Description>
          <Card.Description>{user.roleName}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button
              as={Link}
              to={`/dashboard/manage/users/${user.userId}`}
              basic
              color="blue"
            >
              Update
            </Button>
            <Button
              as={Link}
              to='/dashboard/users'
              basic
              color="red"
            >
              Cancel
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </Card.Group>
    </>
  );
});
