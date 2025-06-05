import bank from "/src/assets/bank.svg";
import Navigation from "../navigation/Navigation";

export default function Header() {
  return (
    <header className="p-2 text-bg-dark" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999 }}>
      <div className="container d-flex justify-content-between align-items-center">
        <img src={bank} alt="Home Bank" style={{ height: "32px" }} />
        <Navigation />
      </div>
    </header>
  );
}
