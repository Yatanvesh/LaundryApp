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
import Status from './components/OrderCard/Status/Status';
import './App.css';
import Redirect from "react-router/es/Redirect";

const dummyUser={
    name:"Abhinav",
    type:'customer',
    email:'q',
    password:'q',
    phone:'1234567890',
    address:'Hno 9 Dum street ',
    gis:null
};

const dummyRetailer={
    name:"Ajit",
    type:'retail',
    email:'w',
    password:'w',
    phone:'1234567890',
    address:'Hno 9 dum dum st',
    gis:'',
};

const initialUserState={
    name:'',
    type:'',
    orders:[],
    phone:'',
    address:'',
    email:'',
    gis:null,
}

setGlobal({
    signedIn:false,
    user:{
        name:'',
        type:'',
        orders:[],
        phone:'',
        address:'',
        email:'',
        gis:'',
    },
    guest:{
        name:'',
        type:'',
        orders:[],
        phone:'',
        address:'',
        email:'',
        gis:'',
    },
    history:null,
    registerSuccess:false,
    titleBg:'#303841',
    blueGrey:'#303841',
    fadedBlue:'#384259',
    lightGrey:'#233142',
});

class App extends Component {

    onSignIn = (data,history)=>{
        fetch("http://localhost:3005/signin", {
            method:'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then( result => {
                console.log(result);
                if(result.email){
                    this.setGlobal(Object.assign(this.global.user, {
                        name: result.name,
                        type:'customer',
                        phone:result.phone,
                        address:result.address,
                        email:result.email
                    }));
                    this.setGlobal({signedIn:true});
                    this.setGlobal({titleBg:this.global.fadedBlue});
                    history.push("/dashboard");
                    this.setGlobal({history:history});
                    return true;
                }
            })
            .catch(err => console.log('err', err));

        // if( data.email.toLowerCase() === dummyRetailer.email.toLowerCase() && data.password === dummyRetailer.password ) {
        //     this.setGlobal(Object.assign(this.global.user, {
        //         name: dummyRetailer.name,
        //         type:dummyRetailer.type,
        //         phone:dummyRetailer.phone,
        //         address:dummyRetailer.address,
        //         email:dummyRetailer.email
        //     }));
        //     this.setGlobal({signedIn:true});
        //     this.setGlobal({titleBg:this.global.lightGrey});
        //     history.push("/dashboard");
        //     this.setGlobal({history:history});
        // }

       return false;
    };

    signOut = ()=>{
        this.setGlobal({signedIn:false});
        this.setGlobal({titleBg:this.global.blueGrey});
        this.global.history.push('./signin');
        this.setGlobal(Object.assign(this.global.user, initialUserState));
    }

    onRegister = (userRequest) =>{
        fetch("http://localhost:3005/register", {
            method:'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(userRequest)
        })
            .then(response => response.json())
            .then( result => {
                if(result.email){
                    this.setGlobal({registerSuccess: true})

                }

            })
            .catch(err => console.log('err', err));

    };

  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL }>
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
                    <Route path='/ts' component={Status}/>
                    <Route component={Error404}/>
                </Switch>
                <Footer/>

            </div>

        </BrowserRouter>
    );
  }
}

export default App;


