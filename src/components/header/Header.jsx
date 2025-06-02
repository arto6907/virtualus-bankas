import bank from "/src/assets/bank.svg";
import Navigation from "../navigation/Navigation";


export default function Header() {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container-fluid">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <img src={bank} alt="Home Bank" height="40" />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

