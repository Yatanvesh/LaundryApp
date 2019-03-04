import React, { Component, setGlobal} from 'reactn';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Error404 from './components/Error404/Error404';
import User from './containers/User';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Book from './containers/Book/Book';
import DashBoard from './containers/DashBoard/DashBoard';
import './App.css';

const dummyUser={
    name:"roh",
    email:'roh',
    password:'123',
    phone:'1234567890',
    address:'Hno 9 Dum street ',

};

const initialUserState={
    name:'',
    orders:{},
    phone:'',
    address:'',
    email:'',
}

setGlobal({
    signedIn:false,
    user:{
        name:'',
        orders:[],
        phone:'',
        address:'',
        email:'',
    },
    guest:{
        name:'',
        orders:[],
        phone:'',
        address:'',
        email:'',
    },
    history:null,
});

class App extends Component {

    onSignIn = (data,history)=>{
        if( data.email.toLowerCase() === dummyUser.email.toLowerCase() && data.password === dummyUser.password ){
            this.setGlobal(Object.assign(this.global.user, {
                name: dummyUser.name,
                phone:dummyUser.phone,
                address:dummyUser.address,
                email:dummyUser.email
            }));
            this.setGlobal({signedIn:true});
            history.push("/dashboard");
            this.setGlobal({history:history});
        }
        else return false;
    };

    signOut = ()=>{
        this.setGlobal({signedIn:false});
        this.global.history.push('./signin');
        this.setGlobal(Object.assign(this.global.user, initialUserState));
    }

    onRegister(data){

    }

  render() {
    return (
        <BrowserRouter>
            <div className='app-container'>
                <NavBar signOut={this.signOut}/>
                <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/signin' render={ (props) => <SignIn {...props} onSignIn={this.onSignIn} />} />
                    <Route path='/register' render={ (props) => <Register {...props} onRegister={this.onRegister} />}  />
                    <Route path='/user'
                           render= {(props) => <User {...props} userName={'TestUser'} />}
                    />
                    <Route path='/book'
                           render= {(props) => <Book {...props}  />}
                    />
                    <Route path='/dashboard' component={DashBoard} />
                    <Route component={Error404}/>
                </Switch>



                <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;


