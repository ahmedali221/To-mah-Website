/** @format */

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
	const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } =
		useCart();
	const [deliveryInfo, setDeliveryInfo] = useState({
		address: "",
		phone: "",
	});
	const [showCheckoutForm, setShowCheckoutForm] = useState(false);
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	useEffect(() => {
		// Trigger animations after component mounts
		setVisible(true);
	}, []);

	const handleQuantityChange = (itemId, newQuantity) => {
		if (newQuantity < 1) {
			removeFromCart(itemId);
		} else {
			updateQuantity(itemId, newQuantity);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(t("cart.order_success")); // Demo alert translated
		clearCart();
		setShowCheckoutForm(false);
		setDeliveryInfo({ address: "", phone: "" });
	};

	if (cartItems.length === 0) {
		return (
			<div
				className="min-h-screen py-16 bg-slate-50 transition-opacity duration-700 ease-in-out"
				dir={i18n.language === "ar" ? "rtl" : "ltr"}>
				<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
					<h1 className="text-4xl font-bold mb-8">{t("cart.title")}</h1>
					<p className="text-lg">{t("cart.empty")}</p>
					<button 
						onClick={() => navigate('/menu')} 
						className="btn btn-primary mt-8 transition-transform duration-300 hover:scale-105">
						{t("home.about.button")}
					</button>
				</div>
			</div>
		);
	}

	return (
		<div
			className="min-h-screen py-16 bg-slate-50 transition-opacity duration-700 ease-in-out"
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className={`text-center mb-12 transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
					<h1 className="text-4xl font-bold mb-4">{t("cart.title")}</h1>
					<div className="w-24 h-1 bg-amber-600 mx-auto"></div>
				</div>

				{/* Cart Items */}
				<div className={`grid grid-cols-1 gap-6 mb-8 transition-all duration-1000 delay-300 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
					{cartItems.map((item, index) => (
						<div
							key={item.id}
							className={`card lg:card-side bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 transition-all duration-1000 delay-${300 + index * 100} transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							<figure className="lg:w-48 relative overflow-hidden">
								<img
									src={item.image}
									alt={
										i18n.language === "ar" && item.name_ar
											? item.name_ar
											: item.name
									}
									className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
							</figure>
							<div className="card-body">
								<h2 className="card-title">
									{i18n.language === "ar" && item.name_ar
										? item.name_ar
										: item.name}
								</h2>
								<p>
									{i18n.language === "ar" && item.description_ar
										? item.description_ar
										: item.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex items-center space-x-4">
										<button
											className="btn btn-circle btn-sm bg-amber-600 hover:bg-amber-700 border-none text-white transition-all duration-300"
											onClick={() =>
												handleQuantityChange(item.id, item.quantity - 1)
											}>
											-
										</button>
										<span>{item.quantity}</span>
										<button
											className="btn btn-circle btn-sm bg-amber-600 hover:bg-amber-700 border-none text-white transition-all duration-300"
											onClick={() =>
												handleQuantityChange(item.id, item.quantity + 1)
											}>
											+
										</button>
									</div>
									<div className="text-right">
										<p className="text-lg font-semibold text-amber-600">
											{t("cart.currency")}{" "}
											{(item.price * item.quantity).toFixed(2)}
										</p>
										<button
											className="btn btn-sm btn-error mt-2 transition-transform duration-300 hover:scale-105"
											onClick={() => removeFromCart(item.id)}>
											{t("cart.remove")}
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Cart Summary */}
				<div className={`card bg-white shadow-xl mb-8 transition-all duration-1000 delay-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
					<div className="card-body">
						<h2 className="card-title">{t("cart.summary")}</h2>
						<div className="flex justify-between items-center text-lg font-semibold">
							<span>{t("cart.total")}</span>
							<span className="text-amber-600">
								{t("cart.currency")} {getCartTotal().toFixed(2)}
							</span>
						</div>
						<div className="card-actions justify-end mt-4">
							<button
								className="btn bg-amber-600 hover:bg-amber-700 text-white border-none transition-transform duration-300 hover:scale-105"
								onClick={() => navigate("/payment")}>
								{t("cart.checkout")}
							</button>
						</div>
					</div>
				</div>

				{/* Checkout Form */}
				{showCheckoutForm && (
					<div className={`card bg-white shadow-xl transition-all duration-1000 delay-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
						<div className="card-body">
							<h2 className="card-title">{t("cart.delivery_title")}</h2>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label className="label">
										<span className="label-text">
											{t("cart.address_label")}
										</span>
									</label>
									<textarea
										className="textarea textarea-bordered w-full focus:border-amber-600"
										value={deliveryInfo.address}
										onChange={(e) =>
											setDeliveryInfo({
												...deliveryInfo,
												address: e.target.value,
											})
										}
										required></textarea>
								</div>

								<div>
									<label className="label">
										<span className="label-text">{t("cart.phone_label")}</span>
									</label>
									<input
										type="tel"
										className="input input-bordered w-full focus:border-amber-600"
										value={deliveryInfo.phone}
										onChange={(e) =>
											setDeliveryInfo({
												...deliveryInfo,
												phone: e.target.value,
											})
										}
										required
									/>
								</div>

								<div className="card-actions justify-end">
									<button type="submit" className="btn bg-amber-600 hover:bg-amber-700 text-white border-none transition-transform duration-300 hover:scale-105">
										{t("cart.place_order")}
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Cart;