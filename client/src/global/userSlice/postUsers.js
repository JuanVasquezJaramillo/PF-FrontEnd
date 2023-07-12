import axios from "axios";
export function postUsers(info) {
    return async function () {  
        try {
        const response = await axios.post("http://localhost:5000/user/", info);
            alert("la informacion se guardo de forma exitosa")
        } catch (error) {
           
            alert(error.response.data.error)
        }
    }
}