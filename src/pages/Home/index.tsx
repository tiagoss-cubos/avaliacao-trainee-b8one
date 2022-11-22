import Header from "./components/Header";
import Login from "./components/Login";
import "./styles.css";

const Home = () => {
  return (
    <div className='container__home'>
      <Header />
      <Login />
    </div>
  );
};

export default Home;
