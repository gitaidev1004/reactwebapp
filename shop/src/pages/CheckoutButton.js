import { prepareOrder } from "../api";

function CheckoutButton() {
  const handleCheckout = async () => {
    try {
      const res = await prepareOrder();
      const { orderId, amount, orderName, customerName, error } = res.data;

      if (error) {
        alert(error);
        return;
      }

      const clientKey = "test_ck_..."; // Toss 대시보드에서 발급받은 clientKey
      const tossUrl = `https://checkout.tosspayments.com/payments?clientKey=${clientKey}&orderId=${orderId}&amount=${amount}&orderName=${orderName}&customerName=${customerName}&successUrl=http://localhost:3000/payment/success&failUrl=http://localhost:3000/payment/fail`;

      window.location.href = tossUrl;
    } catch (e) {
      alert("결제를 시작할 수 없습니다.");
      console.error(e);
    }
  };

  return (
    <button onClick={handleCheckout} className="btn btn-success">
      결제하기
    </button>
  );
}

export default CheckoutButton;
