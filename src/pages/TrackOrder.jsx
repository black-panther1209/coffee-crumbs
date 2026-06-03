import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
collection,
query,
where,
getDocs
} from "firebase/firestore";
import { db } from "../firebase";

const TrackOrder = () => {

const { orderNumber } = useParams();

const [orderId, setOrderId] = useState("");
const [order, setOrder] = useState(null);

const searchOrder = async (customId = orderId) => {

const q = query(
  collection(db, "orders"),
  where("orderNumber", "==", customId)
);

const querySnapshot = await getDocs(q);

if (!querySnapshot.empty) {

  setOrder(
    querySnapshot.docs[0].data()
  );

} else {

  alert("Order Not Found");

}


};

useEffect(() => {


if (orderNumber) {

  setOrderId(orderNumber);

  searchOrder(orderNumber);

}


}, [orderNumber]);

return (
    <div className="min-h-screen bg-[#140d09] text-white p-10">

  <h1 className="text-5xl font-black text-[#d4a373] mb-8">
    Track Order 🚚
  </h1>

  {!orderNumber && (

    <>

      <input
        type="text"
        placeholder="Enter Order Number (CC-123456)"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f120d] border border-[#3b2a23] text-white"
      />

      <button
        onClick={() => searchOrder()}
        className="mt-4 bg-[#d4a373] text-black px-6 py-3 rounded-xl font-bold"
      >
        Track
      </button>

    </>

  )}

  {order && (

    <div className="mt-10 bg-[#1f120d] p-8 rounded-3xl">

      <h2 className="text-3xl font-black mb-4">
        {order.customerName}
      </h2>

      <div className="mt-6 space-y-4">

        {[
          "Pending",
          "Preparing",
          "Out For Delivery",
          "Delivered",
        ].map((step, index) => {

          const currentIndex = [
            "Pending",
            "Preparing",
            "Out For Delivery",
            "Delivered",
          ].indexOf(order.status);

          const active = index <= currentIndex;

          return (

            <div
              key={step}
              className={`flex items-center gap-4 ${
                active
                  ? "text-green-400"
                  : "text-gray-500"
              }`}
            >

              <div
                className={`w-6 h-6 rounded-full ${
                  active
                    ? "bg-green-500"
                    : "bg-gray-700"
                }`}
              />

              <p className="font-bold">
                {step}
              </p>

            </div>

          );

        })}

      </div>

      <p className="mt-4">
        Total: ₹{order.total}
      </p>

      <p className="mt-2 text-gray-400">

        Ordered On:

        {" "}

        {order.createdAt?.toDate
          ? order.createdAt.toDate().toLocaleString()
          : "N/A"}

      </p>

      <p className="mt-2 text-[#d4a373] font-bold">

        Estimated Delivery:
        30 - 45 Minutes 🚀

      </p>

      <div className="mt-6">

        <h3 className="text-xl font-bold text-[#d4a373] mb-3">
          Order Items 🍔
        </h3>

        {order.items?.map((item, index) => (

          <div
            key={index}
            className="flex justify-between py-2 border-b border-white/10"
          >

            <span>
              {item.name} × {item.quantity}
            </span>

            <span>
              ₹{parseInt(item.price.replace("₹", "")) * item.quantity}
            </span>

          </div>

        ))}

      </div>

    </div>

  )}

</div>

);

};

export default TrackOrder;
