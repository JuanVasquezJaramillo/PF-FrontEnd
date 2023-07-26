import axios from "axios";
export function updateUser (info){
    return async function (){
        
        try {
            const response = await axios.put("http://localhost:5000/user/", info)
            alert("Usuario actualizado con exito")
        } catch (error) {
            alert(error)
            
        }
    }
}