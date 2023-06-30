import "./../assets/css/index.css";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchTicket from "../components/SearchTicket";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <section id="content" className="px-20">
        <SearchTicket />
        <Schedule />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
