import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/ProfileImage/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route path={"/profile/*"} element={<Profile posts={props.appState.profilePage.postsData}/>}/>
                    <Route path={"/messages/*"} element={<Dialogs dialogs={props.appState.dialogsPage.dialogsData} messages={props.appState.dialogsPage.messagesData}/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

