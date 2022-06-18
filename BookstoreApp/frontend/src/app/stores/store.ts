import { createContext, useContext } from "react";
import BookStore from "./bookStore";
import CategoryStore from "./categoryStore";
import StoreStore from "./storeStore";
import SupplierStore from "./supplierStore";
import UserStore from "./userStore";

interface Store {
    categoryStore : CategoryStore,
    storeStore : StoreStore,
    bookStore : BookStore,
    supplierStore: SupplierStore,
    userStore: UserStore,
}

export const store: Store = {
    categoryStore: new CategoryStore(),
    storeStore: new StoreStore(),
    bookStore: new BookStore(),
    supplierStore: new SupplierStore(),
    userStore: new UserStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}