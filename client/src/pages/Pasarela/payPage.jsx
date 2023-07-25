import { useSelector } from "react-redux";
import Market from "./market";
import estilo from "./payPage.module.css"

const Pay = () => {
    
    const productos = useSelector((state) => state.clases.listProducts)
    console.log("BANDERA PAYPAGE", productos); 
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"  }}>
            {productos.map((index) => (
            <div className={estilo.contenedor}>
                <h1 style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>{`${index.title} $${index.price}`}
            </div>
            ))}
                <Market productos = {productos} ></Market>
        </div>
    )
}

export default Pay