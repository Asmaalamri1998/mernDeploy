import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import PirateForm from './components/PirateForm';
import Show from './views/Show';
import Detail from './views/Detail';




    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      

        <Route exact path="/pirates/new">
        <PirateForm/>
        </Route>

        <Route exact path="/pirates">
        <Show/>
        </Route>

        <Route exact path="/pirate/:id">
          <Detail />
        </Route>

       


        
        
         
      </div>
    </BrowserRouter>
  );
}
    
export default App;