import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Missing from "./Missing";
import NewPost from "./NewPost";
import Postpost from "./Postpost";
import Header from "./Header";
import Nav from "./Nav";
import { Route, useNavigate,Routes } from 'react-router-dom';
import EditPost from "./EditPost";
import { DataProvider } from "./context/dataContext";

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title='Social Media' />
        <Nav />
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Post'>
            <Route path='NewPost' element={<NewPost/>}/>
            <Route path=':id' element={<Postpost/>}/>
          </Route>
          <Route path="/edit/:id" element={<EditPost />}/>
          <Route path='/About' element={<About/>}/>
          <Route path='*' element={<Missing/>}/>
        </Routes>
        <Footer/>
      </DataProvider>

      
    </div>
  );
}

export default App;
