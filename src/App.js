import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/ProfileImage/Profile";

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header></Header>
            <NavBar></NavBar>
            <Profile></Profile>
            <Footer></Footer>
        </div>
  );
}

export default App;

