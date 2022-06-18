import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Book from "./BookList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponents";
import DashboardNav from "../DashboardNav";


export default observer( function BookDashboard() {
  const {bookStore} = useStore();
  const {loadBooks, bookRegistry} = bookStore;


  useEffect(() => {
    if (bookRegistry.size <= 1) loadBooks();
  }, [bookRegistry.size, loadBooks]);

  if (bookStore.loadingInitial) return <LoadingComponent content="Loading app" />;

  return (
    <>
    <DashboardNav />
    <Grid>
      
      <Grid.Column width="15">
        <Book />
      </Grid.Column>
      
    </Grid>
    </>
  );
})
