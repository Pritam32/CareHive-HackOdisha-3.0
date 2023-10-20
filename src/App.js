
import './App.css';
import PostForm from './components/PostForm';
import Babysitter from './Pages/Babysitter';
import Cook from './Pages/Cook';
import {Landing} from './Pages/Landing'
import Caretaker from './Pages/Caretaker';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Errorpage from './Pages/Errorpage';

function App() {

  const { logout,user,isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      
        
        <Routes>
          <Route index element={<Landing/>}/>
          
        <Route path='/Babysitter' element={<Babysitter/>}/>
        <Route path='/Caretaker' element={<Caretaker/>}/>
        <Route path='/Cook' element={<Cook/>}/>
        <Route path='/*' element={<Errorpage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
