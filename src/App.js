import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomeScreen } from './pages/HomeScreen'
import { AboutScreen } from './pages/AboutScreen'
import { ProductsScreen } from './pages/ProductsScreen'
import { GlobalProvider } from './context/GlobalState';
import { ProductDetailScreen } from './pages/ProductDetailScreen'
import { ContactScreen } from './pages/ContactScreen'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutScreen} exact />
        <Route path='/products' component={ProductsScreen} exact />
        <Route path='/product/:product' component={ProductDetailScreen} exact />
        <Route path='/contact' component={ContactScreen} exact />
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
