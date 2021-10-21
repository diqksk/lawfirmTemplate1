import './App.css';
import {Route} from "react-router-dom"
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Members from "./pages/members/Members";
import Fields from "./pages/fields/Fields";
import News from "./pages/news/News";
import Header from "./commons/componentes/Header";
import Footer from "./commons/componentes/Footer";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Route path={"/"} component={Main} exact ></Route>
        <Route path={"/about"} exact component={About}></Route>
        <Route path={"/members"} exact component={Members}></Route>
        <Route path={"/fields"} exact component={Fields}></Route>
        <Route path={"/news"} exact  component={News}></Route>
        <Footer></Footer>
    </div>
  );
}

export default App;
