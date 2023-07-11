import axios from "axios";
export function postUsers(info) {
    return async function () {
        try {
            const response = await axios.post("http://localhost:3001/users/createuser/", info);
           console.log("RESPUESTA",response)
            alert("la informacion se guardo de forma exitosa")
        } catch (error) {
            console.log(error.response)
            alert(error)
        }
    }
}