import axios from "axios";
import {
  UserFormValuesLogin,
  UserFormValuesRegister,
} from "../../app/models/user";
const API_URL = "https://localhost:7260/api/Auth";



class AuthService {

  login = async (creds: UserFormValuesLogin) => {
    try {
      return axios
        .post("https://localhost:7260/api/Auth/login", creds)
        .then((response) => {
          if (response.data) {
            localStorage.setItem("token", response.data);
            let token = localStorage.getItem("token");
            console.log(token);
            let jwtData = token!.split(".")[1];
            let decodedJwtJsonData = window.atob(jwtData);
            let decodedJwtData = JSON.parse(decodedJwtJsonData);
            let roles = decodedJwtData.role;
            localStorage.setItem("role", roles);
            console.log(roles);
            {
              window.location.href = "/";
            }
          }
          return response.data;
        });
    } catch (error) {
      throw error;
    }
  };

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  register = async (creds: UserFormValuesRegister) => {
    try {
      return axios
        .post("https://localhost:7260/api/Auth/register", creds)
        .then((response) => {
          if (response.data) {
            localStorage.setItem("token", response.data);
            let token = localStorage.getItem("token");
            console.log(token);
            let jwtData = token!.split(".")[1];
            let decodedJwtJsonData = window.atob(jwtData);
            let decodedJwtData = JSON.parse(decodedJwtJsonData);
            let roles = decodedJwtData.role;
            localStorage.setItem("role", roles);
            console.log(roles);
            {
              window.location.href = "/login";
            }
          }
          return response.data;
        });
    } catch (error) {
      throw error;
    }
  };

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


