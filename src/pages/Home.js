import { Link } from "react-router-dom";
import BannerImage from "../assets/cake.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
        <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
            <h1> Iris Backer </h1>
            <p> CAKES TO FIT ANY TASTE </p>
            <Link to="/menu">
            <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
  )
}

export default Home;
