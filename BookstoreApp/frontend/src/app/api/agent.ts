import axios, { AxiosResponse } from 'axios';
import { Category } from '../models/category';
import { Store } from '../models/store';
import { Book } from '../models/book';
import { Supplier } from "../models/supplier";
import { User } from '../models/user';
import { Order } from '../models/order';
import { Stock } from '../models/stock';
import { Role } from '../models/role';
import { Token } from 'typescript';

const sleep = (delay: number) => {
    return new Promise((resolve) =>{
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'https://localhost:7260/api/';

axios.interceptors.response.use(async response => {
    try {
        await sleep(300);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody).catch(err => console.log(err)),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
    
}

const Categories = {
    list: () => requests.get<Category[]>('/Category'),
    details: (categoryId: string) => requests.get<Category>(`/Category/${categoryId}`),
    create: (category: Category) => requests.post<void>(`/Category`, category),
    update: (category: Category) => axios.put<void>(`/Category/${category.categoryId}`, category),
    delete: (categoryId: string) => axios.delete<void>(`/Category/${categoryId}`)

}
const Stores = {
    list: () => requests.get<Store[]>('/Store'),
    details: (storeId: string) => requests.get<Store>(`/Store/${storeId}`),
    create: (store: Store) => requests.post<void>(`/Store`, store),
    update: (store: Store) => axios.put<void>(`/Store/${store.storeId}`, store),
    delete: (storeId: string) => axios.delete<void>(`/Store/${storeId}`)

}
const Books = {
    list: () => requests.get<Book[]>('/Book'),
    details: (bookId: string) => requests.get<Book>(`/Book/${bookId}`),
    create: (book: Book) => requests.post<void>(`/Book`, book),
    update: (book: Book) => axios.put<void>(`/Book/${book.bookId}`, book),
    delete: (bookId: string) => axios.delete<void>(`/Book/${bookId}`)

}
const Suppliers = {
    list: () => requests.get<Supplier[]>('/Supplier'),
    details: (supplierId: string) => requests.get<Supplier>(`/Supplier/${supplierId}`),
    create: (supplier: Supplier) => requests.post<void>(`/Supplier`, supplier),
    update: (supplier: Supplier) => axios.put<void>(`/Supplier/${supplier.supplierId}`, supplier),
    delete: (supplierId: string) => axios.delete<void>(`/Supplier/${supplierId}`)

}
const Orders = {
    list: () => requests.get<Order[]>('/Orders'),
    details: (orderId: string) => requests.get<Order>(`/Orders/${orderId}`),
    create: (order: Order) => requests.post<void>(`/Orders`, order),
    update: (order: Order) => axios.put<void>(`/Orders/${order.orderId}`, order),
    delete: (orderId: string) => axios.delete<void>(`/Orders/${orderId}`)

}
const Stocks = {
    list: () => requests.get<Stock[]>('/Stock'),
    details: (stockId: string) => requests.get<Stock>(`/Stock/${stockId}`),
    create: (stock: Stock) => requests.post<void>(`/Stock`, stock),
    update: (stock: Stock) => axios.put<void>(`/Stock/${stock.stockId}`, stock),
    delete: (stockId: string) => axios.delete<void>(`/Stock/${stockId}`)

}
const Users = {
    list: () => requests.get<User[]>('/Users'),
    details: (userId: string) => requests.get<User>(`/Users/${userId}`),
    create: (user: User) => requests.post<void>(`/Users`, user),
    update: (user: User) => axios.put<void>(`/Users/${user.userId}`, user),
    delete: (userId: string) => axios.delete<void>(`/Users/${userId}`)

}

const Roles = {
    list: () => requests.get<Role[]>('/Role'),
    details: (roleId: string) => requests.get<Role>(`/Role/${roleId}`),
    create: (role: Role) => requests.post<void>(`/Role`, role),
    update: (role: Role) => axios.put<void>(`/Role/${role.roleId}`, role),
    delete: (roleId: string) => axios.delete<void>(`/Role/${roleId}`)

}


const agent ={
    Categories,
    Stores,
    Books,
    Suppliers,
    Users,
    Roles,
    Orders,
    Stocks
}

export default agent;