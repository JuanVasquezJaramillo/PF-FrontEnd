import axios from "axios";
export function deletePlan(id) {
 
    return async function () {  
        try {
        const response = await axios.delete(`http://localhost:5000/plan?idPlan=${id}`);
        console.log(response)
            alert("El plan se elimino de forma exitosa")
        } catch (error) {
           
            alert(error)
        }
    }
}

