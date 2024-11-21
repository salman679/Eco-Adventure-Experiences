import React, { useContext, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AllContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { passwordReset } = useContext(AuthContext);

  useEffect(() => {
    // Prefill email if passed from login page
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    passwordReset(email)
      .then((result) => {
        toast.success("email has been sent!");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = "https://mail.google.com";
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md my-24 p-10">
        <h3 className="font-bold text-2xl text-center">Forget Password</h3>
        <form onSubmit={handleResetPassword}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
