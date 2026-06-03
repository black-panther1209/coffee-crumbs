import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import recommendations from "../data/recommendations";
import menuItems from "../data/menuData";
import { useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
const [search, setSearch] = useState("");
const [activeCategory, setActiveCategory] = useState("All");

const [checkoutOpen, setCheckoutOpen] = useState(false);
const [currentOrderNumber, setCurrentOrderNumber] = useState("");
const [customerName, setCustomerName] = useState("");
const [customerPhone, setCustomerPhone] = useState("");
const [customerAddress, setCustomerAddress] = useState("");
const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

const [orderPlaced, setOrderPlaced] = useState(false);

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
const navigate = useNavigate();
  const categories = ["All"];

  menuItems.forEach((section) => {
    if (!categories.includes(section.category)) {
      categories.push(section.category);
    }
  });

  // Add To Cart
  const addToCart = (item) => {

    const existingItem = cart.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {

      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );

    }

    else {

      setCart([...cart, { ...item, quantity: 1 }]);

    }
  };

  // Increase Quantity
  const increaseQty = (name) => {

    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQty = (name) => {

    setCart(
      cart
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const removeItem = (name) => {

    setCart(cart.filter((item) => item.name !== name));

  };

  // Total Price
  const totalPrice = cart.reduce((acc, item) => {

    return (
      acc +
      parseInt(item.price.replace("₹", "")) * item.quantity
    );

  }, 0);

const handlePlaceOrder = async () => {

  try {
    const orderNumber = "CC" + Math.floor(100000 + Math.random() * 900000);
    const docRef = await addDoc(collection(db, "orders"), {
      customerName,
      customerPhone, 
      customerAddress,
      paymentMethod,
      items: cart,
      total: totalPrice,
      status: "Pending",
      createdAt: new Date(),
      orderNumber: orderNumber,
    });
     
    setCurrentOrderNumber(orderNumber);
   const existingOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
  existingOrders.unshift({
  orderNumber,
  status: "Pending",
  total:totalPrice,
  date:new Date().toLocaleString(),
});
localStorage.setItem("orderHistory", JSON.stringify(existingOrders));
localStorage.setItem("lastOrder", orderNumber);

setOrderPlaced(true);

setCheckoutOpen(false);

setCart([]);

  } catch (error) {

    console.error(error);

  }

};
  return (

    <section
      id="menu"
      className="bg-[#140d09] py-20 px-6 text-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-[#d4a373] mb-4">
            Our Menu
          </p>

          <h2 className="text-5xl font-black">
            Coffee Crafted To Perfection ☕
          </h2>

        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">

          <input
            type="text"
            placeholder="Search delicious items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl px-6 py-4 rounded-full bg-[#1f120d] border border-[#d4a373] outline-none text-white placeholder:text-gray-400"
          />

        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((category, index) => (

            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-3 rounded-full border transition duration-300 font-semibold

              ${
                activeCategory === category
                  ? "bg-[#d4a373] text-black border-[#d4a373]"
                  : "border-[#d4a373] text-[#d4a373] hover:bg-[#d4a373] hover:text-black"
              }`}
            >

              {category}

            </button>

          ))}

        </div>

        {/* Menu */}
        <div className="space-y-16">

          {menuItems
            .filter((section) =>
              activeCategory === "All"
                ? true
                : section.category.trim() === activeCategory.trim()
            )
            .map((section, index) => {

              const filteredItems = section.items.filter((item) =>
                item.name
                  .toLowerCase()
                  .includes(search.toLowerCase().trim())
              );

              if (filteredItems.length === 0) return null;

              return (

                <div key={index}>

                  {/* Category Title */}
                  <h2 className="text-3xl font-bold text-[#d4a373] mb-8 border-b border-[#d4a373] pb-3">
                    {section.category}
                  </h2>
                   <div className="mb-10 overflow-hidden rounded-3xl border border-[#3b2a23]">

                   <img
                   src={section.image}
                   alt={section.category}
                   className="w-full h-[320px] object-cover"
                    />

                  </div>
                  {/* Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredItems.map((item, i) => (

                      <div
                        key={i}
                        className="bg-[#1f120d] border border-[#3b2a23] rounded-3xl overflow-hidden hover:scale-105 hover:border-[#d4a373] transition duration-300 shadow-xl"
                      >

                        {/* Image */}
                        <div className="p-6 text-center">

  <h3 className="text-2xl font-bold text-white mb-3">
    {item.name}
  </h3>

  <div className="w-16 h-1 bg-[#d4a373] mx-auto rounded-full"></div>

</div>

                        {/* Content */}
                        <div className="p-5">

                          <div className="flex justify-between items-center mb-5">

                            <span className="text-[#d4a373] font-bold text-2xl">
                              {item.price}
                            </span>

                          </div>

                          <button
                            onClick={() => addToCart(item)}
                            className="w-full bg-[#d4a373] text-black py-3 rounded-full font-bold hover:scale-105 transition duration-300"
                          >

                            Add To Cart

                          </button>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              );
            })}

        </div>

      </div>

      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(!cartOpen)}
        className="fixed bottom-6 left-6 z-50 bg-[#d4a373] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300"
      >

        <div className="relative">

          <ShoppingCart size={30} />

          {cart.length > 0 && (

            <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs h-6 w-6 flex items-center justify-center rounded-full">

              {cart.length}

            </span>

          )}

        </div>

      </button>

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-[#1a120d] shadow-2xl z-50 transition duration-500 overflow-y-auto

        ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        <div className="p-6">

          <h2 className="text-3xl font-bold mb-8 text-[#d4a373]">
            Your Cart 🛒
          </h2>

          {cart.length === 0 ? (

            <p className="text-gray-400">
              Cart is empty
            </p>

          ) : (

            <div className="space-y-6">

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="border-b border-white/10 pb-5"
                >

                  <div className="flex justify-between items-center mb-3">

                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>

                    <button
                      onClick={() => removeItem(item.name)}
                    >

                      <Trash2
                        size={18}
                        className="text-red-400"
                      />

                    </button>

                  </div>

                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">

                      <button
                        onClick={() => decreaseQty(item.name)}
                        className="bg-[#d4a373] text-black p-1 rounded-full"
                      >

                        <Minus size={16} />

                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.name)}
                        className="bg-[#d4a373] text-black p-1 rounded-full"
                      >

                        <Plus size={16} />

                      </button>

                    </div>

                    <span className="text-[#d4a373] font-bold">

                      ₹
                      {parseInt(
                        item.price.replace("₹", "")
                      ) * item.quantity}

                    </span>

                  </div>

                </div>

              ))}
  
{/* AI Recommendations */}

{cart.length > 0 && (

  <div className="mt-8">

    <h3 className="text-2xl font-bold text-[#d4a373] mb-4">
      🤖 You May Also Like
    </h3>

    <div className="space-y-3">

      {cart
        .flatMap(
          (cartItem) =>
            recommendations[cartItem.name] || []
        )
        .slice(0, 6)
        .map((rec, index) => (

          <div
            key={index}
            className="bg-[#1f120d] border border-[#3b2a23] rounded-xl p-4 flex justify-between items-center"
          >

            <div>

              <p className="text-sm font-semibold">
                {rec.name}
              </p>

              <p className="text-[#d4a373] text-sm">
                {rec.price}
              </p>

            </div>

            <button
              onClick={() => addToCart(rec)}
              className="bg-[#d4a373] text-black px-3 py-1 rounded-lg text-sm font-semibold hover:scale-105 transition"
            >
              Try
            </button>

          </div>

        ))}

    </div>

  </div>

)}


              {/* Total */}
              <div className="pt-6">

                <h3 className="text-2xl font-bold mb-5">

                  Total:
                  <span className="text-[#d4a373]">
                    {" "}
                    ₹{totalPrice}
                  </span>

                </h3>

        <button
  onClick={() => setCheckoutOpen(true)}
  className="w-full mt-4 bg-[#d4a373] text-black py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
>
  Proceed To Checkout
</button>

              </div>

            </div>

          )}

        </div>

      </div>
         {/* Checkout Modal */}

{checkoutOpen && (

  <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center px-6">

    <div className="bg-[#1a120d] w-full max-w-2xl rounded-3xl p-8 relative overflow-y-auto max-h-[90vh]">

      {/* Close */}
      <button
        onClick={() => setCheckoutOpen(false)}
        className="absolute top-5 right-5 text-white"
      >

        <XCircle size={30} />

      </button>

      <h2 className="text-4xl font-black text-[#d4a373] mb-8">
        Checkout 🍔
      </h2>

      {/* Customer Info */}

      <div className="space-y-5 mb-8">

        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#140d09] border border-[#3b2a23] outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#140d09] border border-[#3b2a23] outline-none"
        />

        <textarea
          placeholder="Delivery Address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#140d09] border border-[#3b2a23] outline-none h-32"
        />

      </div>

      {/* Payment */}

      <div className="mb-8">

        <h3 className="text-xl font-bold mb-4">
          Payment Method
        </h3>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#140d09] border border-[#3b2a23] outline-none"
        >

          <option>Cash On Delivery</option>
          <option>UPI</option>
          <option>Card</option>

        </select>

      </div>

      {/* Order Summary */}

      <div className="mb-8">

        <h3 className="text-2xl font-bold mb-5 text-[#d4a373]">
          Order Summary
        </h3>

        <div className="space-y-3">

          {cart.map((item, index) => (

            <div
              key={index}
              className="flex justify-between"
            >

              <p>
                {item.name} × {item.quantity}
              </p>

              <p>
                ₹
                {parseInt(
                  item.price.replace("₹", "")
                ) * item.quantity}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Total */}

      <h3 className="text-3xl font-black mb-8">

        Total:
        <span className="text-[#d4a373]">
          {" "}
          ₹{totalPrice}
        </span>

      </h3>

      {/* Place Order */}

      <button
  onClick={handlePlaceOrder}
  className="w-full bg-[#d4a373] text-black py-5 rounded-full text-xl font-black hover:scale-105 transition duration-300"
>

  Place Order 🚀

</button>


    </div>

  </div>

)}
{/* Success */}

{orderPlaced && (

  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[200]">

    <div className="relative bg-[#1a120d] p-12 rounded-3xl text-center border border-[#d4a373] max-w-md w-full mx-4">

      {/* Close Button */}

      <button
        onClick={() => setOrderPlaced(false)}
        className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
      >
        ✕
      </button>

      <h2 className="text-5xl mb-6">
        🎉
      </h2>

      <h1 className="text-4xl font-black text-[#d4a373] mb-4">
        Order Placed!
      </h1>

      <p className="text-gray-300 text-lg mb-6">
        Your delicious food is on the way 🚀
      </p>

      <p className="text-xl text-white mb-8 font-bold">
        Order Number: {currentOrderNumber}
      </p>

      <div className="flex flex-col gap-4">

        <button
          onClick={() => {
            navigator.clipboard.writeText(currentOrderNumber);
            alert("Order Number Copied!");
          }}
          className="bg-[#d4a373] text-black px-5 py-3 rounded-xl font-bold"
        >
          📋 Copy Order Number
        </button>

        <button
          onClick={() =>
            navigate(`/track-order/${currentOrderNumber}`)
          }
          className="bg-green-500 text-white px-5 py-3 rounded-xl font-bold"
        >
          📦 Track My Order
        </button>

      </div>

    </div>

  </div>

)}
    </section>

  );
};

export default Menu;