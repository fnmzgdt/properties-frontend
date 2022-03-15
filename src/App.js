import { Switch, Route, useLocation } from "react-router-dom";
import Upload from "./Pages/Upload/Upload";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import Search from "./Pages/Search/Search";
import PostPage from "./Pages/PostPage/PostPage";

function App() {
  const location = useLocation();

  const DefaultContainer = () => {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={Home} key="home" />
        <Route exact path="/upload" component={Upload} key="upload" />
        <Route exact path="/search" component={Search} key="search" />
        <Route exact path="/post" component={PostPage} key="post" />
      </div>
    );
  };

  const containerFunction = useMemo(() => {
    return DefaultContainer;
  }, []);

  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route exact path="/(login)" component={Login} />
          <Route component={containerFunction} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
