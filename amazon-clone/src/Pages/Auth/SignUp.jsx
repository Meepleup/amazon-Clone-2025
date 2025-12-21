import React, { useState, useContext } from "react";
import styles from "./signUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import LayOut from "../Components/layOut/LayOut";
import { auth } from "../../Utility/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from "../../components/dataProvider/DataProvider.jsx";
import { type } from "../../Utility/actionType.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch({
        type: type.SET_USER,
        user: userInfo.user,
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayOut>
      <section className={styles.signup}>
        <Link to="/">
          <img
            src="/amazon-logo.png"
            alt="Amazon Logo"
            className={styles.logo}
          />
        </Link>

        <div className={styles.container}>
          <h1>Create account</h1>

          <form onSubmit={handleSubmit}>
            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                required
              />
            </div>

            <button
              type="submit"
              className={styles.button}
              disabled={loading}
            >
              {loading ? (
                <FadeLoader height={6} width={3} radius={2} color="#111" />
              ) : (
                "Create your Amazon account"
              )}
            </button>
          </form>

          <p className={styles.signinText}>
            Already have an account?
            <Link to="/Auth" className={styles.signinLink}>
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </LayOut>
  );
};

export default SignUp;
