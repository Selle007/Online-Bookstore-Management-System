import axios from "axios";
import jwtDecode from "jwt-decode";
import jwt from 'jwt-decode';

import {
  UserFormValuesLogin,
  UserFormValuesRegister,
} from "../../app/models/user";
const API_URL = "https://localhost:7260/api/Auth";



class AuthService {

  login(creds: UserFormValuesLogin) {
    return axios.post(API_URL + "/login", creds).then((response) => {
      if (response.data) {
        localStorage.setItem("token", response.data);
        let token = localStorage.getItem("token");
        console.log(token);
        let jwtData = token!.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        let roles = decodedJwtData.role;
        localStorage.setItem("role", roles);
        console.log(roles);
        {window.location.href='/'}
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("token");
  }

  register(creds: UserFormValuesRegister) {
    {window.location.href='/login'}
      return axios.post(API_URL + "/register", {
      creds,
    });
  }

  getCurrentUser() {
    return localStorage.getItem("token");
  }

   isAdmin() {
    const role = (localStorage.getItem("role"));
    if(role === "Admin"){
      return true;
    }
   }

  
  token = (localStorage.getItem("token"))

}

export default new AuthService();


