import { BrowserRouter as Router , Switch , Route , } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Navigation from './components/Navigation';
import Products from './components/Products';



const App =() => {
    return (
        <>
          <Router>
            <Navigation />
            <Switch>
                <Route path="/" component={Home} exact></Route>
                {/* <Route path="/about" component={About}></Route> */}
                <Route path="/product" component={Product}></Route>
                <Route path="/cart" component={Cart}></Route>
            </Switch>
            <Products/>
          </Router>
        </>
      
    ) 
}




export default App;