import axios from "axios";
export function getPlan() {
  return async function () {
    try {
      const response = await axios.get("http://localhost:5000/plans/");
      alert("la informacion se guardo de forma exitosa");
    } catch (error) {
      alert(error);
    }
  };
}
