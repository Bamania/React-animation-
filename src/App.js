
import './App.css';
import { Header } from './components/Header';
import {Middle} from "./components/Middle"
import { Motive } from './components/Motive';
import { Banner } from './components/Banner';



function App() {
  return (
    <div className="app">
       <Header/>
       <Middle/>
       <Motive/>
       <Banner/>
       
        
    </div>

  );
}

export default App;
