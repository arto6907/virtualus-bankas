import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import bank from "/src/assets/bank.svg"; // logotipas

function Footer() {
  const user = useContext(AuthContext);

  return (
    <footer className="p-3 text-bg-dark mt-auto">
      <div className="container d-flex justify-content-between align-items-center">
        <img
          src={bank}
          alt="Home Bank"
          style={{
            height: "17px",
            opacity: 0.9,
          }}
        />
        <div style={{ fontSize: "0.5rem" }}>2025 All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
