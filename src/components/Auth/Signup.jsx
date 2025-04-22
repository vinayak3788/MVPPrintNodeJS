import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../services/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        mobile: formData.mobile,
        createdAt: new Date(),
      });

      navigate("/"); // Redirect to homepage/dashboard
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        createdAt: new Date(),
      });
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                onChange={handleChange}
                value={formData.firstName}
                placeholder="First Name"
                className="input input-bordered w-full"
              />
              <input
                name="lastName"
                type="text"
                onChange={handleChange}
                value={formData.lastName}
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>

            <input
              name="mobile"
              type="tel"
              onChange={handleChange}
              value={formData.mobile}
              placeholder="Mobile Number"
              className="input input-bordered w-full"
            />

            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email address"
              className="input input-bordered w-full"
              required
            />

            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500">OR</div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="mt-4 w-full flex items-center justify-center py-2 px-4 border rounded-md bg-white text-gray-700 shadow-sm hover:shadow"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
