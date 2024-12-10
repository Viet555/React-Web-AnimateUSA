
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AppRoutes from './Routes/AppRoutes';
import FooterApp from './components/FooterApp';
import Banner from './components/Home/Banner/Banner';
import Dropmenu from './components/Home/MenuDrop/Dropmenu';
import { useNavigate } from 'react-router-dom';
function App() {

  return (
    <header className="App-container">
      <div className='App-header'>
        <Header />


      </div>
      <div className='App-MainContainer'>
        <Banner />
        <Dropmenu />
        <AppRoutes />
      </div>
      <div className='App-Content'>

      </div>
      <div>
        <FooterApp />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </header>
  );
}

export default App;
