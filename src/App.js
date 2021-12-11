import "./assets/main.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import progress from "./components/Progress";
import Qna from "./components/Qna";
import courses from "./components/Courses";
import Enroll from "./components/Enroll";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import progressWatch from "./components/ProgressWatch";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={courses} />
        <Route exact path="/progress" component={progress} />
        <Route exact path="/Qna" component={Qna} />
        <Route exact path="/enroll" component={Enroll} />
        <Route exact path="/progressWatch" component={progressWatch} />
        <Route exact path="/profile" component={Profile} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
