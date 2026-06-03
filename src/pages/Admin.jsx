import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase";
import * as XLSX from "xlsx";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Admin = () => {
const [reservations, setReservations] = useState([]);
const [orders, setOrders] = useState([]);
const [revenue, setRevenue] = useState(0);
const [searchTerm, setSearchTerm] = useState("");
const [todayOrders, setTodayOrders] = useState(0);
const [todayRevenue, setTodayRevenue] = useState(0);
const [totalCustomers, setTotalCustomers] = useState(0);
const [mostOrderedItem, setMostOrderedItem] = useState("-");
const navigate = useNavigate();
const operationsData = [
  {
    name: "Orders",
    value: orders.length,
  },
  {
    name: "Reservations",
    value: reservations.length,
  },
];
const chartData = [
  {
    name: "Orders",
    value: orders.length,
  },
  {
    name: "Reservations",
    value: reservations.length,
  },
  {
    name: "Revenue",
    value: revenue,
  },
];
const deleteOrder = async (id) => {
try {
await deleteDoc(doc(db, "orders", id));
} catch (error) {
console.error(error);
}
};

const deleteReservation = async (id) => {
try {
await deleteDoc(doc(db, "reservations", id));
} catch (error) {
console.error(error);
}
};
const updateReservationStatus = async (
  id,
  status
) => {

  try {

    await updateDoc(
      doc(db, "reservations", id),
      {
        status,
      }
    );

  } catch (error) {

    console.error(error);

  }

};
const updateOrderStatus = async (id, status) => {

  try {

    await updateDoc(
      doc(db, "orders", id),
      {
        status: status,
      }
    );

  } catch (error) {

    console.error(error);

  }

};
const exportOrders = () => {

  const data = orders.map((order) => ({

    Customer: order.customerName,

    Phone: order.customerPhone,

    Address: order.customerAddress,

    Payment: order.paymentMethod,

    Total: order.total,

    Status: order.status,

    Date: order.createdAt?.toDate
      ? order.createdAt.toDate().toLocaleString()
      : "",

  }));

  const worksheet =
    XLSX.utils.json_to_sheet(data);

  const workbook =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Orders"
  );

  XLSX.writeFile(
    workbook,
    "CoffeeCrumbsOrders.xlsx"
  );

};
const handleLogout = async () => {

  try {

    await signOut(auth);

    navigate("/login");

  } catch (error) {

    console.error(error);

  }

};

useEffect(() => {
const unsubscribeReservations = onSnapshot(
collection(db, "reservations"),
(snapshot) => {
const data = snapshot.docs.map((doc) => ({
id: doc.id,
...doc.data(),
}));

    setReservations(data);
  }
);

const unsubscribeOrders = onSnapshot(
  collection(db, "orders"),
  (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setOrders(data);

    const totalRevenue = data.reduce(
      (sum, order) => sum + Number(order.total || 0),
      0
    );

    setRevenue(totalRevenue);
    const today = new Date().toDateString();

const todaysOrders = data.filter((order) => {

  if (!order.createdAt) return false;

  const orderDate = order.createdAt.toDate
    ? order.createdAt.toDate()
    : new Date(order.createdAt);

  return orderDate.toDateString() === today;

});

setTodayOrders(todaysOrders.length);

const todaysRevenue = todaysOrders.reduce(
  (sum, order) => sum + Number(order.total || 0),
  0
);

setTodayRevenue(todaysRevenue);

const customers = new Set(
  data.map((order) => order.customerName)
);

setTotalCustomers(customers.size);

const itemCount = {};

data.forEach((order) => {

  order.items?.forEach((item) => {

    itemCount[item.name] =
      (itemCount[item.name] || 0) +
      item.quantity;

  });

});

let topItem = "-";
let max = 0;

for (const item in itemCount) {

  if (itemCount[item] > max) {

    max = itemCount[item];
    topItem = item;

  }

}

setMostOrderedItem(topItem);
  }
);

return () => {
  unsubscribeReservations();
  unsubscribeOrders();
};
}, []);

return ( <div className="min-h-screen bg-[#140d09] text-white p-10"> <div className="mb-12"> 
<div className="flex justify-between items-center mb-12">

  <div>

    <h1 className="text-6xl font-black text-[#d4a373] mb-2">
      Admin Dashboard ☕
    </h1>

    <p className="text-gray-400 text-lg">
      Coffee Crumbs Management System
    </p>

  </div>

  <button
    onClick={handleLogout}
    className="bg-red-500 px-5 py-3 rounded-xl font-bold hover:bg-red-600 transition"
  >
    Logout
  </button>

</div>

```
  
    <button
  onClick={exportOrders}
  className="mt-6 bg-[#d4a373] text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
>
  📥 Download Orders
</button>
    <input
  type="text"
  placeholder="Search by customer name..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="mt-6 w-full max-w-md p-3 rounded-xl bg-[#1f120d] border border-[#3b2a23] outline-none"
/>
  </div>

  {/* Stats */}

  <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-14">
    <div className="bg-[#1f120d] p-8 rounded-3xl border border-[#3b2a23]">
      <h2 className="text-4xl font-black text-[#d4a373] mb-3">
        {orders.length}
      </h2>

      <p className="text-gray-300">Total Orders</p>
    </div>
  <div className="bg-[#1f120d] p-6 rounded-3xl border border-[#3b2a23]">
  <h2 className="text-3xl font-black text-[#d4a373]">
    {todayOrders}
  </h2>
  <p className="text-gray-300">
    Today Orders
  </p>
</div>
<div className="bg-[#1f120d] p-6 rounded-3xl border border-[#3b2a23]">
  <h2 className="text-3xl font-black text-[#d4a373]">
    ₹{todayRevenue}
  </h2>
  <p className="text-gray-300">
    Today Revenue
  </p>
</div>
<div className="bg-[#1f120d] p-6 rounded-3xl border border-[#3b2a23]">
  <h2 className="text-3xl font-black text-[#d4a373]">
    {totalCustomers}
  </h2>
  <p className="text-gray-300">
    Customers
  </p>
</div>
<div className="bg-[#1f120d] p-6 rounded-3xl border border-[#3b2a23]">
  <h2 className="text-lg font-black text-[#d4a373]">
    {mostOrderedItem}
  </h2>
  <p className="text-gray-300">
    Top Item
  </p>
</div>
    <div className="bg-[#1f120d] p-8 rounded-3xl border border-[#3b2a23]">
      <h2 className="text-4xl font-black text-[#d4a373] mb-3">
        {reservations.length}
      </h2>

      <p className="text-gray-300">Reservations</p>
    </div>

    <div className="bg-[#1f120d] p-8 rounded-3xl border border-[#3b2a23]">
      <h2 className="text-4xl font-black text-[#d4a373] mb-3">
        ₹{revenue}
      </h2>

      <p className="text-gray-300">Revenue</p>
    </div>
  </div>

  {/* Orders */}

  <div className="bg-[#1f120d] rounded-3xl p-8 border border-[#3b2a23] mb-12">
    <h2 className="text-3xl font-black text-[#d4a373] mb-8">
      Recent Orders 🍔
    </h2>

    <div className="space-y-5">
      {orders.length === 0 ? (
        <p className="text-gray-400">No Orders Yet</p>
      ) : (
        orders
  .filter((order) =>
    (order.customerName || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .map((order) => (
          <div
            key={order.id}
            className="flex justify-between border-b border-white/10 pb-4"
          >
            <div>
              <h3 className="font-bold">
                {order.customerName || "Customer"}
              </h3>

              <p className="text-gray-400">
                {order.paymentMethod || "Payment"}
              </p>
               <p className="text-[#d4a373] text-sm mt-1">
               Status: {order.status || "Pending"}
               </p>
              <div className="text-sm text-gray-500 mt-2">
                {order.items?.map((item, index) => (
                  <p key={index}>
                    {item.name} × {item.quantity}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">

  <button
    onClick={() =>
      updateOrderStatus(order.id, "Pending")
    }
    className="px-3 py-1 bg-yellow-600 rounded-lg text-xs"
  >
    Pending
  </button>

  <button
    onClick={() =>
      updateOrderStatus(order.id, "Preparing")
    }
    className="px-3 py-1 bg-blue-600 rounded-lg text-xs"
  >
    Preparing
  </button>

  <button
    onClick={() =>
      updateOrderStatus(
        order.id,
        "Out For Delivery"
      )
    }
    className="px-3 py-1 bg-purple-600 rounded-lg text-xs"
  >
    Out For Delivery
  </button>

  <button
    onClick={() =>
      updateOrderStatus(order.id, "Delivered")
    }
    className="px-3 py-1 bg-green-600 rounded-lg text-xs"
  >
    Delivered
  </button>

</div>
            </div>

            <div className="text-right">
              <p className="text-[#d4a373] font-bold">
                ₹{order.total}
              </p>

              <button
                onClick={() => deleteOrder(order.id)}
                className="text-red-400 text-sm mt-2 hover:text-red-500"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>

  {/* Reservations */}
 <div className="bg-[#1f120d] rounded-3xl p-8 border border-[#3b2a23] mt-12">

  <h2 className="text-3xl font-black text-[#d4a373] mb-8">
    Analytics Chart 📈
  </h2>

  <ResponsiveContainer
    width="100%"
    height={350}
  >

    <BarChart data={chartData}>

      <XAxis dataKey="name" />

      <YAxis />

      <Tooltip />

      <Bar
        dataKey="value"
        fill="#d4a373"
      />

    </BarChart>

  </ResponsiveContainer>

</div>
  <div className="bg-[#1f120d] rounded-3xl p-8 border border-[#3b2a23]">
    <h2 className="text-3xl font-black text-[#d4a373] mb-8">
      Reservations 📅
    </h2>

    <div className="space-y-5">
      {reservations.length === 0 ? (
        <p className="text-gray-400">
          No Reservations Yet
        </p>
      ) : (
        reservations
  .filter((reservation) =>
    (reservation.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .map((reservation) => (
          <div
            key={reservation.id}
            className="flex justify-between border-b border-white/10 pb-4"
          >
            <div>
              <h3 className="font-bold">
                {reservation.name}
              </h3>

              <p className="text-gray-400">
                {reservation.date} • {reservation.time}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[#d4a373]">
                Table for {reservation.guests}
              </p>
             <p className="text-sm text-gray-400 mt-1">
  Status:
  <span className="text-[#d4a373] ml-1">
    {reservation.status || "Pending"}
  </span>
</p>
<div className="flex flex-wrap gap-2 mt-3">

  <button
    onClick={() =>
      updateReservationStatus(
        reservation.id,
        "Pending"
      )
    }
    className="px-3 py-1 bg-yellow-600 rounded-lg text-xs"
  >
    Pending
  </button>

  <button
    onClick={() =>
      updateReservationStatus(
        reservation.id,
        "Confirmed"
      )
    }
    className="px-3 py-1 bg-blue-600 rounded-lg text-xs"
  >
    Confirmed
  </button>

  <button
    onClick={() =>
      updateReservationStatus(
        reservation.id,
        "Completed"
      )
    }
    className="px-3 py-1 bg-green-600 rounded-lg text-xs"
  >
    Completed
  </button>

  <button
    onClick={() =>
      updateReservationStatus(
        reservation.id,
        "Cancelled"
      )
    }
    className="px-3 py-1 bg-red-600 rounded-lg text-xs"
  >
    Cancelled
  </button>

</div>
              <button
                onClick={() =>
                  deleteReservation(reservation.id)
                }
                className="text-red-400 text-sm mt-2 hover:text-red-500"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>
);
};
export default Admin;