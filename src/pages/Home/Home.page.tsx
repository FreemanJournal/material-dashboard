import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
export default function Home() {
  // TODO:Implement Authentication here
  // FIXME: Set up proper google authentication

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          
        </div>
      </div>
    </div>
  );
}
