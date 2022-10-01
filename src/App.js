import "./assets/main.css";
import React from "react";
import NavBar from "./components/Nav&Foot/NavBar";
import Footer from "./components/Nav&Foot/Footer";
import progress from "./components/Progress/Progress";
import Qna from "./components/QnA/Qna";
import courses from "./components/Courses/Courses";
import Enroll from "./components/Courses/Enroll";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import progressWatch from "./components/Progress/ProgressWatch";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

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
