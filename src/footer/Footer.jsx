import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Footer() {
  const user = useContext(AuthContext);

  return (
    <footer className="p-3 text-bg-dark mt-auto">
      <div className="container">
        <div className="text-center">2025 All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
