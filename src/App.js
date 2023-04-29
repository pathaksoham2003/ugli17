import Root from "./components/Root.js";
import Products from "./components/Products.js";
import {createBrowserRouter , Route , RouterProvider , createRoutesFromElements} from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Site from "./components/Site.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/ugli17/" element = {<Root/>}>
      <Route index element = {<Home/>}/>
      <Route path = "products" element = {<Products/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "site" element = {<Site/>}/>
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router = {router}/>
      
    </>
  );
}

export default App;
