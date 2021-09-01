import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home/home';
import NavBar from '../components/NavBar/navBar';
import ItemListContainer from '../pages/ItemsListContainer/itemListContainer';
import ItemDetailContainer from '../pages/itemDetailContainer/itemDetailContainer';


const Router = ()=>{
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/category/:categoryId" component={ItemListContainer}/>
                <Route path="/item/:id" component={ItemDetailContainer}/>
                <Route path="*" component={NavBar}/>
            </Switch>
        </BrowserRouter>
        
    )
}

export default Router;