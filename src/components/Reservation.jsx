import { useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Reservation = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "reservations"), {
      ...formData,
      status: "Pending",
      createdAt: new Date(),
    });

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

  } catch (error) {
    console.error(error);
    alert("Failed to save reservation");
  }
};

  return (
    <section
      id="booking"
      className="py-24 px-6 bg-[#140d09] dark:bg-[#140d09] light:bg-[#f8f5f2]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[6px] text-[#d4a373] mb-4">
            Reserve Table
          </p>

          <h2 className="text-5xl font-black mb-6">
            Book Your Cozy Spot ☕
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Reserve your table and enjoy handcrafted coffee,
            delicious meals, and unforgettable moments.
          </p>

        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-[#1f120d] border border-[#3b2a23] rounded-3xl p-10 shadow-2xl"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#140d09] border border-[#d4a373]/30 rounded-xl px-5 py-4 outline-none text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#140d09] border border-[#d4a373]/30 rounded-xl px-5 py-4 outline-none text-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-[#140d09] border border-[#d4a373]/30 rounded-xl px-5 py-4 outline-none text-white"
            />

            <input
              type="number"
              name="guests"
              placeholder="Guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="bg-[#140d09] border border-[#d4a373]/30 rounded-xl px-5 py-4 outline-none text-white"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="bg-[#140d09] border border-[#d4a373]/30 rounded-xl px-5 py-4 outline-none text-white"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="bg-[#140d09] border border-[#d4a373]/30 rounded-xl px-5 py-4 outline-none text-white"
            />

          </div>

          <textarea
            name="message"
            placeholder="Special Request..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full mt-6 bg-[#140d09] border border-[#d4a373]/30 rounded-xl px-5 py-4 outline-none text-white"
          />

          <button
            type="submit"
            className="w-full mt-8 bg-[#d4a373] text-black py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
          >
            Reserve Now
          </button>

          {success && (
            <p className="text-green-400 text-center mt-6 font-semibold">
              Reservation Submitted Successfully ✅
            </p>
          )}

        </motion.form>

      </div>
    </section>
  );
};

export default Reservation;