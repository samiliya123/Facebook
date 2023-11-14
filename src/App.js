import './App.css';
import Feed from './feed/Feed';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar'; 
import Widget from './widgets/Widget';
import Login from './login/Login';
import { useStateValue } from './stateProvider';

function App() {
  // const [{user}, dispatch] = useStateValue()
  const user = null

  return (
    <div className="app">
      {!user ? (
        <Login />
      ):(
      
      <>
       <Header />

       <div className='app__body'>
         <Sidebar />
         <Feed />
         <Widget />
       </div>
       </>)}
      
    
    </div>
  );
}

export default App;
