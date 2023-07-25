import axios from "axios";
export function deletePlan(id) {
 
    return async function () {  
        try {
        const response = await axios.delete(`/plan?idPlan=${id}`);
        console.log(response)
            alert("El plan se elimino de forma exitosa")
        } catch (error) {
           
            alert(error)
        }
    }
}

