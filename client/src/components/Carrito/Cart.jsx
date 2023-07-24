import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { deleteProducts, deleteItem } from "../../global/clasesSlice/clasesSlice";
import estilo from "./cart.module.css"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
	const dispatch = useDispatch()
	const [active, setActive] = useState(false);
	let palanes = useSelector((state) => state.clases.listProducts)
	const [planes, setPlanes] = useState(palanes);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	useEffect(() => {
		// Calcula el total cuando cambia el array de productos
		const newTotal = palanes.reduce((acc, product) => acc + product.price, 0);
		setTotal(newTotal);
		setCountProducts(palanes.length);
	}, [palanes]);
	console.log("BANDERA CART", palanes);

	const deleteProductCart = (product) => {
		dispatch(deleteItem(product.idPlan))
	};

	const clearCart = () => {
		dispatch(deleteProducts());
		setTotal(0);
		setCountProducts(0);
	}
	return (
		<>
			<div className={estilo.contenedorPadre}>
				<div className={estilo.containerIcon}>
					<div
						className={estilo.containerCartIcon}
						onClick={() => setActive(!active)}
					>
						<div className={estilo.cont}>
							<svg className={estilo.btn}></svg>
							<div className={estilo.countProducts}>
								<span id='contador-productos'>{countProducts}</span>
							</div>
						</div>
					</div>

					<div className={active ? estilo.containerCartProducts : estilo.hiddenCart}>
						{palanes.length ? (
							<>
								<div className={estilo.rowProduct}>
									{palanes.map(product => (
										<div className={estilo.cartProduct} key={product.id}>
											<div className={estilo.infoCartProduct}>
												<span className={estilo.cantidadProductoCarrito}>
													{product.quantity}
												</span>
												<p className={estilo.tituloProductoCarrito}>
													{product.title}
												</p>
												<span className={estilo.precioProductoCarrito}>
													${product.price}
												</span>
											</div>
											<svg className={estilo.iconClose} onClick={() => deleteProductCart(product)}>
											</svg>
										</div>
									))}
								</div>

								<div className={estilo.cartTotal}>
									<h3>Total:</h3>
									<span className={estilo.totalPagar}>${total}</span>
								</div>

								<button className={estilo.btnClearAll} onClick={clearCart}>
									Vaciar Carrito
								</button>
								
								<Link to={`/paycheck`}>
									<button className={estilo.btnClearAll}>
										Pasar a pagar
									</button>
								</Link>

							</>
						) : (
							<p className={estilo.cartEmpty}>El carrito está vacío</p>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Cart;