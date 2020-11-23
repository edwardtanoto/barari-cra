import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomeScreen, translations } from './pages/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Footer />
    </Router>

  );
}

export default App;
