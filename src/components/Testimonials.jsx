import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {

const [reviews, setReviews] = useState([]);
const [averageRating, setAverageRating] = useState(0);

const navigate = useNavigate();

useEffect(() => {

const unsubscribe = onSnapshot(

  collection(db, "reviews"),

  (snapshot) => {

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setReviews(data);

    const totalRatings = data.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    const avg =
      data.length > 0
        ? (totalRatings / data.length).toFixed(1)
        : 0;

    setAverageRating(avg);

  }

);

return () => unsubscribe();


}, []);

return (


<section className="px-8 py-28 bg-[#140d09]">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[6px] text-[#d4a373] mb-4">
        Testimonials
      </p>

      <div className="mb-12">

        <div className="bg-[#1c120d] border border-white/10 rounded-3xl p-8 max-w-md mx-auto">

          <h3 className="text-5xl mb-3">
            ⭐
          </h3>

          <h2 className="text-4xl font-black text-[#d4a373]">
            {averageRating}/5
          </h2>

          <p className="text-gray-400 mt-2">
            Based on {reviews.length} Reviews
          </p>

        </div>

      </div>

      <h2 className="text-5xl font-black mb-6">
        What Our Customers Say ❤️
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-10">

      {reviews.length === 0 ? (

        <div className="bg-[#1c120d] border border-white/10 rounded-3xl p-8">

          <p className="text-gray-300">
            No Reviews Yet ⭐
          </p>

        </div>

      ) : (

        reviews.map((review) => (

          <div
            key={review.id}
            className="bg-[#1c120d] border border-white/10 rounded-3xl p-8"
          >

            <p className="text-yellow-400 text-xl mb-4">
              {"⭐".repeat(review.rating)}
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              "{review.review}"
            </p>

            <h3 className="text-[#d4a373] font-bold text-xl">
              — {review.name}
            </h3>

          </div>

        ))

      )}

    </div>

  </div>

  <div className="flex justify-center mt-12">

    <button
      onClick={() => navigate("/reviews")}
      className="bg-[#d4a373] text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
    >
      ⭐ Leave A Review
    </button>

  </div>

</section>


);

};

export default Testimonials;
