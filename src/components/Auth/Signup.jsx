import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../services/firebaseConfig";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google signup error", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Create your account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <input
              name="firstName"
              onChange={handleChange}
              placeholder="First Name"
              className="w-1/2 px-4 py-2 border rounded-md text-sm"
            />
            <input
              name="lastName"
              onChange={handleChange}
              placeholder="Last Name"
              className="w-1/2 px-4 py-2 border rounded-md text-sm"
            />
          </div>
          <input
            name="mobileNumber"
            onChange={handleChange}
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-sm"
          />
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 text-sm"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-400 text-sm">OR</div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 text-sm"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            className="h-5 w-5"
          />
          Sign up with Google
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
