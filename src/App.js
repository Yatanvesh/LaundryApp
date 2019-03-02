import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error404';
import User from './containers/User';
import Admin from './containers/Admin';
import Retail from './containers/Retail';
import Home from './components/Home/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/about' component={About}/>
                    <Route path='/user'
                           render= {(props) => <User {...props} userName={'TestUser'} />}
                    />
                    <Route path='/admin' component={Admin}/>
                    <Route path='/retail' component={Retail}/>
                    <Route component={Error404}/>
                </Switch>



                <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;


