import { useSelector } from "react-redux";
import Market from "./market";

const Pay = () => {
    
    const productos = useSelector((state) => state.clases.listProducts)
    console.log("BANDERA PAYPAGE", productos); 
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"  }}>
            {productos.map((index) => (
            <div>
                <h1>{index.title}
                <p>${index.price}</p>
                </h1>
            </div>
            ))}
                <Market productos = {productos} ></Market>
        </div>
    )
}

export default Pay