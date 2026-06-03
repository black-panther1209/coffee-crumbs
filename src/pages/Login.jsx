import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin");

    } catch (error) {

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="min-h-screen bg-[#140d09] flex items-center justify-center px-6">

      <div className="bg-[#1f120d] p-10 rounded-3xl border border-[#3b2a23] w-full max-w-md">

        <h1 className="text-4xl font-black text-[#d4a373] mb-8 text-center">
          Admin Login ☕
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl bg-[#140d09] border border-[#3b2a23] text-white placeholder:text-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-6 rounded-xl bg-[#140d09] border border-[#3b2a23] text-white placeholder:text-gray-500"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#d4a373] text-black py-4 rounded-xl font-bold"
        >
          Login
        </button>

      </div>

    </div>

  );

};

export default Login;