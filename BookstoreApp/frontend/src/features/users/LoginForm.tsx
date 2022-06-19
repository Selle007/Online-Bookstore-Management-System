import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Form, Label } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import AuthService from "./AuthService";

export default observer(function LoginForm() {

    
  
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={values => AuthService.login(values)}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <MyTextInput name="username" placeholder="Username" />
          <MyTextInput name="password" placeholder="Password" type="password" />
        
          <Button
            loading={isSubmitting} 
            positive
            content="Login"
            type="submit"
            fluid
          />
          <Label>Don't have an account? <a href="/register">Register.</a></Label>
        </Form>
      )}
    </Formik>
  );
});
