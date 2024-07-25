import logo from "./logo.svg";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserComponendList from "./componends/listComponend/UserComponendList";
import NavbarComponend from "./componends/navbar/navbarComponend";
import FooterComponend from "./componends/footer/footerComponend";
import AddUser from "./componends/addComponend/addUser";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavbarComponend />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<UserComponendList />}></Route>
            <Route path="/users" element={<UserComponendList />}></Route>
            <Route path="/add-user" element={<AddUser />}></Route>
          </Routes>
        </div>
        <FooterComponend />
      </Router>
    </div>
  );
}

export default App;
