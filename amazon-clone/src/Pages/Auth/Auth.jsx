import React, { useState, useContext } from "react";
import styles from "./signUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import LayOut from "../../components/layOut/LayOut";
import { auth } from "../../Utility/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { DataContext } from "../../components/dataProvider/DataProvider.jsx";
import { type } from "../../Utility/actionType.js";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const userInfo = await signInWithEmailAndPassword(
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
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Sign in failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayOut>
      <section className={styles.page}>
        <Link to="/">
          <img src="/amazon-logo.png" alt="Amazon" className={styles.logo} />
        </Link>

        <div className={styles.card}>
          <h1>Sign In</h1>

          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? (
                <FadeLoader height={6} width={3} radius={2} color="#111" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className={styles.infoText}>
            By continuing, you agree to AMAZON CLONE Conditions of Use & Sale.
          </p>

          <div className={styles.divider}>
            <span>New to Amazon?</span>
          </div>

          <Link to="/signup" className={styles.secondaryButton}>
            Create your Amazon account
          </Link>
        </div>
      </section>
    </LayOut>
  );
}

export default Auth;
