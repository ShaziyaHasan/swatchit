import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/common/AppNavbar/AppNavbar';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <LoginPage />
    </div>
  );
}

export default App;
