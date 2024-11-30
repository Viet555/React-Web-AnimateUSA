
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AppRoutes from './Routes/AppRoutes';
import FooterApp from './components/FooterApp';
function App() {
  return (
    <header className="App-container">
      <div className='App-header'>
        <Header />

      </div>
      <div className='App-MainContainer'>

        <div className='sidenav-container'>
        </div>
      </div>
      <div className='App-Content'>
        <AppRoutes />
      </div>
      <div>
        <FooterApp />
      </div>
    </header>
  );
}

export default App;
