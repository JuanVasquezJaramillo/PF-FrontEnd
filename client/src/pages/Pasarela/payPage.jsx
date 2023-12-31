import { useSelector } from "react-redux";
import Market from "./market";
import estilo from "./payPage.module.css"
import { Proteccion } from "../../components/Proteccion";
const Pay = () => {
    Proteccion()
    
    const productos = useSelector((state) => state.clases.listProducts)
    console.log("BANDERA PAYPAGE", productos); 
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", backgroundColor: "slategray"}}>
            <h1>PRODUCTOS SELECCIONADOS: </h1>
            {productos.map((index) => (
            <div className={estilo.contenedor}>
                <h1 style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>{`${index.title}: $${index.price}`}
                </h1>
            </div>
            ))}
                <Market productos = {productos} ></Market>
        </div>
    )
}

export default Pay