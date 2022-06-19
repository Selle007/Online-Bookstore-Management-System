// import axios from "axios";
// import { makeAutoObservable, runInAction } from "mobx";
// import { tokenToString } from "typescript";
// import agent from "../api/agent";
// import { User} from "../models/user";
// import { store } from "./store";


export default class UserStore{
    // user: User | null = null;

    // constructor() {
    //     makeAutoObservable(this);
    // }

    // get isLoggedIn(){
    //     return !!this.user;
    // }

    // // login = async (creds: UserFormValues)=> {
    // //     try {
    // //         const user = await agent.Account.login(creds);
    // //         console.log(tokenToString);
    // //     } catch (error) {
    // //         throw error;
    // //     }
    // // }

    // //  login = (username, password) => {
    // //     return axios
    // //       .post(API_URL + "/login", {
    // //         username,
    // //         password,
    // //       })
    // //       .then((response => response.text()).then(responseFromServer =>{
    // //         if ( responseFromServer!= "Invalid"){
    // //           console.log(responseFromServer);
    // //           if(responseFromServer!=""){
    // //             localStorage.setItem('token', responseFromServer);
                
    // //           }
    // //           else {
    // //             alert("Username or password is incorrect!");
    // //           }
    // //         }

    // //     }))
    // //     .catch((error) =>{
    // //       console.log(error);
    // //     });
    // //   };
    //  login = async (creds: UserFormValues)=> {
    //     try {
    //         return axios.post('https://localhost:7260/api/Auth/login', creds)
    //         .then(response => response.text()).then(responseFromServer =>{
    //                     if ( responseFromServer!= "Invalid"){
    //                       console.log(responseFromServer);
    //                       if(responseFromServer!=""){
    //                         localStorage.setItem('token', responseFromServer);
                            
    //                       }
    //                       else {
    //                         alert("Username or password is incorrect!");
    //                       }
    //                     }
    //     });
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // //  login = (username, password) => {
    // //     return axios.post('https://localhost:7260/api/Auth/login', {username, password})
    // //     .then((response)=> {
    // //         if(response.data.accessToken){
    // //             localStorage.setItem("user" , JSON.stringify(response.data));
    // //         }
    // //         return response.data;
    // //     });
    // // };

    // logout=()=> {
    //     store.commonStore.setToken(null);
    //     window.localStorage.removeItem('jwt');
    //     this.user=null;

    // }
}