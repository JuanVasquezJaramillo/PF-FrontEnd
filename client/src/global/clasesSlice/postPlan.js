import axios from "axios";
export function postPlan(info) {
    return async function () {  
        try {
        const response = await axios.post("/plan/", info);
            alert("La informacion se guardo de forma exitosa")
        } catch (error) {
           
            alert(error)
        }
    }
}