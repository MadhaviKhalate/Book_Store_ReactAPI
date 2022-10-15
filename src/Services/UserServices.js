import axios from 'axios'

let header = {
    headers: {
        Authorization: "Bearer" + " " + localStorage.getItem("Token")
    }
}

export const signUp = (obj) => {
    let response = axios.post('https://localhost:44309/api/User/Register',obj)
    console.log(response)
    return response
}
export const signIn = (obj) => {

    let response = axios.post('https://localhost:44309/api/User/Login',obj)
    console.log(obj)
    return response
}

export const forget = async (obj) => {
    var email = obj;
    let response = await axios.post(`https://localhost:44309/api/User/ForgetPassword/${email}`,header)
    return response;
}

export const reset = async (obj) => {
    let response = await axios.post("https://localhost:44309/api/User/ResetPassword", obj, header)
    return response;
}