import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogIndex from "./pages/BlogIndex";


function Home(){
  return <h1> Welcome to my blog!</h1>;
}

function App(){
  return (
    //this allowes routing in the app. wraps entire app
    <BrowserRouter>

    //contain for all the routes
    <Routes>

      //route to the home
      <Route path="/" element={<Home/>}/>
      <Route path="/blog" element={<BlogIndex />} />
    </Routes>
    </BrowserRouter>
  )
}

//exports app component so it can be used in main.tsx
export default App;