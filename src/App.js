import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Consulting from "./pages/Consulting";
import Mobile from "./pages/Mobile";
import Development from "./pages/Development";
import Infrastructure from "./pages/Infrastructure";
import Submit from "./components/Submit";
import Contract from "./pages/Contract";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import JobListing from "./components/JobListing";

import PostJob from "./pages/PostJob";
import Preview from "./pages/Preview";
import Login from "./components/Login";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectList from "./pages/ProjectList";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    // let params = serializeFormQuery(event.target);
    // searchParams.get("__firebase_request_key")
    // setSearchParams({});
  }

  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/development" element={<Development />} />
          <Route path="/infra" element={<Infrastructure />} />
          {/* <Route path="/projects" element={<Home />} /> */}
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projectdetail" element={<ProjectDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="?code=<.*>" component={<Infrastructure />} />
          <Route exact path="/jobs" element={<JobListing />} />
          <Route path="/jobs/:number" element={<Search />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/login" element={<Login />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/edit/:jobId" element={<PostJob />} />
        </Routes>
        <Footer />
      </HashRouter>
    </Provider>
  );
}

export default App;
