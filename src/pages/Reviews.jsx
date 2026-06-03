import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Reviews = () => {

const [name, setName] = useState("");
const [rating, setRating] = useState(5);
const [review, setReview] = useState("");
const [reviewSubmitted, setReviewSubmitted] = useState(false);

const navigate = useNavigate();

const submitReview = async () => {


if (!name || !review) {

  alert("Please fill all fields");

  return;

}

try {

  await addDoc(collection(db, "reviews"), {

    name,
    rating,
    review,
    createdAt: new Date(),

  });

  setReviewSubmitted(true);

  setName("");
  setRating(5);
  setReview("");

} catch (error) {

  console.error(error);

}

};

return (


<>

  {reviewSubmitted && (

    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[200]">

      <div className="relative bg-[#1a120d] p-12 rounded-3xl text-center border border-[#d4a373] max-w-md w-full mx-4">

        <h2 className="text-5xl mb-6">
          ⭐
        </h2>

        <h1 className="text-4xl font-black text-[#d4a373] mb-4">
          Review Submitted!
        </h1>

        <p className="text-gray-300 mb-8">
          Thank you for sharing your feedback ☕
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-[#d4a373] text-black px-6 py-3 rounded-xl font-bold"
        >
          🏠 Back To Home
        </button>

      </div>

    </div>

  )}

  <div className="min-h-screen bg-[#140d09] text-white p-10">

    <h1 className="text-5xl font-black text-[#d4a373] mb-10">
      Leave A Review ⭐
    </h1>

    <div className="max-w-xl space-y-5">

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f120d] border border-[#3b2a23] text-white"
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="w-full p-4 rounded-xl bg-[#1f120d] border border-[#3b2a23] text-white"
      >
        <option value={5}>⭐⭐⭐⭐⭐</option>
        <option value={4}>⭐⭐⭐⭐</option>
        <option value={3}>⭐⭐⭐</option>
        <option value={2}>⭐⭐</option>
        <option value={1}>⭐</option>
      </select>

      <textarea
        rows="5"
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="w-full p-4 rounded-xl bg-[#1f120d] border border-[#3b2a23] text-white"
      />

      <button
        onClick={submitReview}
        className="bg-[#d4a373] text-black px-6 py-3 rounded-xl font-bold"
      >
        Submit Review 🚀
      </button>

    </div>

  </div>

</>


);

};

export default Reviews;
