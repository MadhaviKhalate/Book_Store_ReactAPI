import axios from 'axios'

let header = {
    headers: {
        Authorization: "Bearer" + " " + localStorage.getItem("Token")
    }
}

export const getAllBooks = () => {
    console.log(header)
    let response = axios.get("https://localhost:44309/Book/GetAllBooks",header)
    return response
}

export const getCart = () => {
    console.log(header)
    let response = axios.get("https://localhost:44309/Cart/GetAllBookInCart",header)
    return response
}

export const getBookById = async(obj) => {
    console.log(header)
    let response = await axios.get(`https://localhost:44309/Book/GetBookById?BookId=${obj}`,null,header)
    return response
}

export const setAddress = (obj) => {
    let response = axios.put("https://localhost:44309/api/Address/Add=1", obj, header)
    return response
} 

export const getWishlist = () => {
    let response = axios.get("https://localhost:44309/WishList/GetWishList", header)
    return response
} 

export const addOrder = async(obj) => {
    let response = await axios.post("https://localhost:44309/api/Order/PlaceOrder", obj, header)
    return response
} 

export const addWishlist = (obj) => {
    let response = axios.post("https://localhost:44309/WishList/AddWishList", obj, header)
    return response
} 

export const addCart = (obj) => {
    let response = axios.post("https://localhost:44309/Cart/AddToCart", obj, header)
    return response
} 

export const getOrder = () => {
    let response = axios.get("https://localhost:44309/api/Order/get", header)
    return response
} 
