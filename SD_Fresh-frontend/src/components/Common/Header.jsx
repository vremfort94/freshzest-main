import React, { useEffect, useState } from "react";
import ImageCartLogo from "../../assets/img/shopping_cart-__1135_.png";
import { signOut } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <header>
      <section class="header-box">
        <a href="/">
          <div class="header">
            <span class="views">FreshZest</span>
          </div>
        </a>
        <div class="header-links">
          <p class="sign-in-link">
            {checkUser ? (
              <span class="logout" onClick={signOutButton}>
                Logout
              </span>
            ) : (
              <a href="/signin" class="sign-in">
                Sign In
              </a>
            )}
          </p>
          {checkUser && (
            <p class="img">
              <a href="/cart">
                <img src={ImageCartLogo} alt="" />
              </a>
            </p>
          )}
        </div>
      </section>
    </header>
  );
}
