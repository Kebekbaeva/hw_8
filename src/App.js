import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostPage from "./pages/postPage/PostPage";
import Info from "./components/info/Info";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="" element={<PostPage/>}/>
            <Route path="/:id" element={<Info/>}/>
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
