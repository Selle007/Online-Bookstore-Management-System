import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Form, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import AuthService from "./AuthService";

export default observer(function RefisterFrom() {
  return (
    <Formik
      initialValues={{ username: "", name: "", surname: "", email: "", password: "", roleName: "User" }}
      onSubmit={values => AuthService.register(values)}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <MyTextInput name="username" placeholder="Username" />
          <MyTextInput name="name" placeholder="Name"  />
          <MyTextInput name="surname" placeholder="Surname" />
          <MyTextInput name="email" placeholder="Email" type="email" />
          <MyTextInput name="password" placeholder="Password" type="password" />
        
          <Button
            loading={isSubmitting} 
            positive
            content="Login"
            type="submit"
            fluid
          />
          <Label>Already have an account? <a href="/login">Login.</a></Label>
        </Form>
      )}
    </Formik>
  );
});
