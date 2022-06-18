import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { User} from "../models/user";
import { store } from "./store";


export default class UserStore{
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get isLoggedIn(){
        return !!this.user;
    }

    // login = async (creds: UserFormValues)=> {
    //     try {
    //         const user = await agent.Account.login(creds);
    //         store.commonStore.setToken(user.token);
    //         runInAction(() => this.user = this.user);

    //         console.log(user);
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    logout=()=> {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user=null;

    }
}