import estilo from './paginado.module.css'
const Paginado = ({ cantidadPorPag, clases, paginado }) => {
    const paginasDisponibles = []

    for (let i = 1; i <= Math.ceil(clases / cantidadPorPag); i++) {
        paginasDisponibles.push(i)
    }

    return (
        <div>
                {paginasDisponibles && paginasDisponibles.map(number => (
                    <div className={estilo.contenedor} key={number}>
                            <button className={estilo.buttonpage} onClick={() => paginado(number)}> {number}  </button>
                    </div>
                ))}
        </div>
    )
}
export default Paginado