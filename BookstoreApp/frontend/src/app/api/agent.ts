import axios, { AxiosResponse } from 'axios';
import { Category } from '../models/category';

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



const agent ={
    Categories
}

export default agent;