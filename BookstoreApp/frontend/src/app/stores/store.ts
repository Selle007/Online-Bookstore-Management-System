import { createContext, useContext } from "react";
import BookStore from "./bookStore";
import CategoryStore from "./categoryStore";
import CommonStore from "./commonStore";
import OrderStore from "./orderStore";
import StoreStore from "./storeStore";
import SupplierStore from "./supplierStore";
import StockStore from "./stockStore";
import UsersStore from "./usersStore";
import RoleStore from "./roleStore";
import ReviewStore from "./reviewStore";

interface Store {
    categoryStore : CategoryStore,
    storeStore : StoreStore,
    bookStore : BookStore,
    supplierStore: SupplierStore,
    commonStore: CommonStore,
    orderStore : OrderStore,
    stockStore : StockStore,
    usersStore: UsersStore,
    roleStore : RoleStore,
    reviewStore : ReviewStore,

}

export const store: Store = {
    categoryStore: new CategoryStore(),
    storeStore: new StoreStore(),
    bookStore: new BookStore(),
    supplierStore: new SupplierStore(),
    commonStore: new CommonStore(),
    orderStore: new OrderStore(),
    stockStore: new StockStore(),
    usersStore: new UsersStore(),
    roleStore: new RoleStore(),
    reviewStore: new ReviewStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}