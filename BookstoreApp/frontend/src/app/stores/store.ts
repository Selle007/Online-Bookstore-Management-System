import { createContext, useContext } from "react";
import BookStore from "./bookStore";
import CategoryStore from "./categoryStore";
import CommonStore from "./commonStore";
import OrderStore from "./orderStore";
import StoreStore from "./storeStore";
import SupplierStore from "./supplierStore";
import UserStore from "./userStore";
import StockStore from "./stockStore";

interface Store {
    categoryStore : CategoryStore,
    storeStore : StoreStore,
    bookStore : BookStore,
    supplierStore: SupplierStore,
    userStore: UserStore,
    commonStore: CommonStore,
    orderStore : OrderStore,
    stockStore : StockStore,
}

export const store: Store = {
    categoryStore: new CategoryStore(),
    storeStore: new StoreStore(),
    bookStore: new BookStore(),
    supplierStore: new SupplierStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    orderStore: new OrderStore(),
    stockStore: new StockStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}