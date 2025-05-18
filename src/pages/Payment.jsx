/** @format */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";

const Payment = () => {
	const { t, i18n } = useTranslation();
	const { cartItems, getCartTotal, clearCart } = useCart();
	const [paymentMethod, setPaymentMethod] = useState("card");
	const [cardNumber, setCardNumber] = useState("");
	const [expiry, setExpiry] = useState("");
	const [cvv, setCvv] = useState("");
	const [nameOnCard, setNameOnCard] = useState("");
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [error, setError] = useState(null);
	const [deliveryInstructions, setDeliveryInstructions] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [isLocating, setIsLocating] = useState(false);

	const detectLocation = async () => {
		if (navigator.geolocation) {
			setIsLocating(true);
			try {
				const position = await new Promise((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject);
				});

				const { latitude, longitude } = position.coords;
				const response = await fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
				);

				const data = await response.json();
				if (data.results && data.results[0]) {
					setAddress(data.results[0].formatted_address);
					const cityComponent = data.results[0].address_components.find(
						(component) => component.types.includes("locality")
					);
					setCity(
						cityComponent
							? cityComponent.long_name
							: t("payment.current_location")
					);
				} else {
					setAddress(
						t("payment.near_location", {
							lat: latitude.toFixed(4),
							lng: longitude.toFixed(4),
						})
					);
					setCity(t("payment.current_location"));
				}
			} catch (error) {
				console.error("Error:", error);
				setError(t("payment.error_location"));
			} finally {
				setIsLocating(false);
			}
		} else {
			setError(t("payment.error_geolocation"));
		}
	};

	const validateCard = () => {
		setError(null);

		if (!fullName.trim()) {
			setError(t("payment.error_full_name"));
			return false;
		}
		if (!address.trim()) {
			setError(t("payment.error_address"));
			return false;
		}
		if (!city.trim()) {
			setError(t("payment.error_city"));
			return false;
		}
		if (!phone.trim()) {
			setError(t("payment.error_phone"));
			return false;
		}
		if (!nameOnCard.trim()) {
			setError(t("payment.error_name_on_card"));
			return false;
		}
		if (!cardNumber || cardNumber.replace(/\D/g, "").length !== 16) {
			setError(t("payment.error_card_number"));
			return false;
		}
		if (!expiry || !expiry.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
			setError(t("payment.error_expiry"));
			return false;
		}
		if (!cvv || cvv.length < 3) {
			setError(t("payment.error_cvv"));
			return false;
		}
		return true;
	};

	const validateDelivery = () => {
		setError(null);

		if (!fullName.trim()) {
			setError(t("payment.error_full_name"));
			return false;
		}
		if (!address.trim()) {
			setError(t("payment.error_address"));
			return false;
		}
		if (!city.trim()) {
			setError(t("payment.error_city"));
			return false;
		}
		if (!phone.trim()) {
			setError(t("payment.error_phone_delivery"));
			return false;
		}
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsProcessing(true);

		try {
			if (paymentMethod === "card") {
				if (!validateCard()) {
					setIsProcessing(false);
					return;
				}
			} else {
				if (!validateDelivery()) {
					setIsProcessing(false);
					return;
				}
			}

			await new Promise((resolve) => setTimeout(resolve, 1000));

			alert(
				t(
					paymentMethod === "card"
						? "payment.success_card"
						: "payment.success_delivery"
				)
			);
			clearCart();
		// eslint-disable-next-line no-unused-vars
		} catch (err) {
			setError(t("payment.error_general"));
		} finally {
			setIsProcessing(false);
		}
	};

	const formatCardNumber = (value) => {
		const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
		const matches = v.match(/\d{4,16}/g);
		const match = (matches && matches[0]) || "";
		const parts = [];

		for (let i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4));
		}

		return parts.length ? parts.join(" ") : "";
	};

	const formatExpiry = (value) => {
		const v = value.replace(/[^0-9]/g, "");
		if (v.length >= 3) {
			return `${v.substring(0, 2)}/${v.substring(2)}`;
		}
		return v;
	};

	if (cartItems.length === 0) {
		return (
			<div
				className="min-h-screen py-16"
				dir={i18n.language === "ar" ? "rtl" : "ltr"}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl font-bold mb-8 text-gray-800">
						{t("payment.title")}
					</h1>
					<p className="text-lg text-gray-600">{t("payment.empty_cart")}</p>
				</div>
			</div>
		);
	}

	return (
		<div
			className="min-h-screen py-12 bg-gray-50"
			dir={i18n.language === "ar" ? "rtl" : "ltr"}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold mb-8 text-gray-800">
					{t("payment.complete_order")}
				</h1>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Left Column - Order Summary */}
					<div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 h-fit">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">
							{t("payment.order_summary")}
						</h2>
						<div className="space-y-4">
							{cartItems.map((item) => (
<div
  key={item.id}
  className="flex items-center border-b border-gray-100 pb-4 gap-4"
>
  <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-md overflow-hidden">
    {item.image ? (
      <img
        src={item.image}
        alt={
          i18n.language === "ar" && item.name_ar
            ? item.name_ar
            : item.name
        }
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-gray-400">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    )}
  </div>
  <div className="flex-1">
    <h3 className="text-gray-800 font-medium">
      {i18n.language === "ar" && item.name_ar ? item.name_ar : item.name_en}
    </h3>
    <p className="text-gray-600 text-sm">
      {t("payment.quantity", { count: 2 })}
    </p>
  </div>
  <div className="text-gray-800 font-medium">
    {t("payment.currency")} {(item.price * item.quantity).toFixed(2)}
  </div>
</div>
// ... existing code ...
							))}
						</div>
						<div className="mt-6 pt-4 border-t border-gray-200">
							<div className="flex justify-between text-lg font-bold text-gray-900">
								<span>{t("payment.total")}</span>
								<span>
									{t("payment.currency")} {getCartTotal().toFixed(2)}
								</span>
							</div>
						</div>
					</div>

					{/* Right Column - Payment Form */}
					<div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
						<h2 className="text-xl font-semibold text-gray-800 mb-4">
							{t("payment.payment_method")}
						</h2>

						<div className="flex mb-6">
							<button
								type="button"
								className={`flex-1 py-2 px-4 border rounded-l-lg transition-colors ${
									paymentMethod === "card"
										? "bg-gray-100 border-gray-400 text-gray-900 font-medium"
										: "border-gray-300 text-gray-600 hover:bg-gray-50"
								}`}
								onClick={() => setPaymentMethod("card")}>
								{t("payment.card")}
							</button>
							<button
								type="button"
								className={`flex-1 py-2 px-4 border rounded-r-lg transition-colors ${
									paymentMethod === "delivery"
										? "bg-gray-100 border-gray-400 text-gray-900 font-medium"
										: "border-gray-300 text-gray-600 hover:bg-gray-50"
								}`}
								onClick={() => setPaymentMethod("delivery")}>
								{t("payment.delivery")}
							</button>
						</div>

						<form onSubmit={handleSubmit} className="space-y-4">
							{/* Personal Information */}
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										{t("payment.full_name")}{" "}
										<span className="text-red-500">*</span>
									</label>
									<input
										type="text"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
										placeholder={t("payment.full_name_placeholder")}
										value={fullName}
										onChange={(e) => setFullName(e.target.value)}
										required
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										{t("payment.phone")} <span className="text-red-500">*</span>
									</label>
									<input
										type="tel"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
										placeholder={t("payment.phone_placeholder")}
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required
									/>
								</div>
							</div>

							{/* Address Information */}
							<div className="space-y-4 pt-2">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										{t("payment.address")}{" "}
										<span className="text-red-500">*</span>
									</label>
									<div className="flex space-x-2">
										<input
											type="text"
											className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
											placeholder={t("payment.address_placeholder")}
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											required
										/>
										<button
											type="button"
											onClick={detectLocation}
											disabled={isLocating}
											className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-200 transition-colors flex items-center">
											{isLocating ? (
												<svg
													className="animate-spin h-4 w-4 mr-1 text-gray-600"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24">
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
												</svg>
											) : (
												<svg
													className="h-4 w-4 mr-1 text-gray-600"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
													/>
												</svg>
											)}
											{isLocating
												? t("payment.locating")
												: t("payment.locate_me")}
										</button>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											{t("payment.city")}{" "}
											<span className="text-red-500">*</span>
										</label>
										<input
											type="text"
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
											placeholder={t("payment.city_placeholder")}
											value={city}
											onChange={(e) => setCity(e.target.value)}
											required
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											{t("payment.postal_code")}
										</label>
										<input
											type="text"
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
											placeholder={t("payment.postal_code_placeholder")}
											value={postalCode}
											onChange={(e) => setPostalCode(e.target.value)}
										/>
									</div>
								</div>
							</div>

							{paymentMethod === "card" ? (
								<>
									<div className="pt-4 space-y-4">
										<h3 className="text-md font-medium text-gray-800">
											{t("payment.card_info")}
										</h3>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												{t("payment.name_on_card")}{" "}
												<span className="text-red-500">*</span>
											</label>
											<input
												type="text"
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
												placeholder={t("payment.name_on_card_placeholder")}
												value={nameOnCard}
												onChange={(e) => setNameOnCard(e.target.value)}
												required
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												{t("payment.card_number")}{" "}
												<span className="text-red-500">*</span>
											</label>
											<input
												type="text"
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
												placeholder={t("payment.card_number_placeholder")}
												value={formatCardNumber(cardNumber)}
												onChange={(e) =>
													setCardNumber(e.target.value.replace(/\D/g, ""))
												}
												maxLength={19}
												required
											/>
										</div>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													{t("payment.expiry")}{" "}
													<span className="text-red-500">*</span>
												</label>
												<input
													type="text"
													className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
													placeholder={t("payment.expiry_placeholder")}
													value={formatExpiry(expiry)}
													onChange={(e) =>
														setExpiry(e.target.value.replace(/[^0-9]/g, ""))
													}
													maxLength={5}
													required
												/>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													{t("payment.cvv")}{" "}
													<span className="text-red-500">*</span>
												</label>
												<input
													type="text"
													className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
													placeholder={t("payment.cvv_placeholder")}
													value={cvv}
													onChange={(e) =>
														setCvv(e.target.value.replace(/\D/g, ""))
													}
													maxLength={4}
													required
												/>
											</div>
										</div>
									</div>
								</>
							) : (
								<>
									<div className="pt-4">
										<label className="block text-sm font-medium text-gray-700 mb-1">
											{t("payment.delivery_instructions")}
										</label>
										<textarea
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
											placeholder={t(
												"payment.delivery_instructions_placeholder"
											)}
											rows={3}
											value={deliveryInstructions}
											onChange={(e) => setDeliveryInstructions(e.target.value)}
										/>
									</div>
									<div className="bg-gray-100 p-4 rounded-md border border-gray-300">
										<p className="text-gray-700 text-sm">
											{t("payment.delivery_note")}
										</p>
									</div>
								</>
							)}

							{error && (
								<div className="bg-red-50 p-3 rounded-md text-red-600 text-sm border border-red-100">
									{error}
								</div>
							)}

							<button
								type="submit"
								className={`w-full mt-6 py-3 px-4 rounded-md font-medium transition-colors ${
									isProcessing
										? "bg-gray-400 text-white cursor-not-allowed"
										: "bg-gray-800 text-white hover:bg-gray-700"
								}`}
								disabled={isProcessing}>
								{isProcessing ? (
									<>
										<span className="inline-block mr-2">
											<svg
												className="animate-spin h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24">
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
										</span>
										{t("payment.processing")}
									</>
								) : paymentMethod === "card" ? (
									t("payment.pay_button", { total: getCartTotal().toFixed(2) })
								) : (
									t("payment.place_order_button", {
										total: getCartTotal().toFixed(2),
									})
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
