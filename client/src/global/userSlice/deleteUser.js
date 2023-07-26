import axios from "axios";
export function deleteUser(info) {
    console.log("PROBANDO USERSssss",info)
 
    return async function () {  
        try {
        const response = await axios.delete(`http://localhost:5000/user?idUser=${info}`);
        console.log(response)
            alert("Usuario Eliminado")
        } catch (error) {
           
            alert(error)
        }
    }
}

