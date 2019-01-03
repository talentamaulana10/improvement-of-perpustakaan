import React,{Component} from 'react'
import Book from './Book'
import './home.css'
import Navbar from '../component/Navbar'
import Jumbotron from '../component/Jumbotron'
export default class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Jumbotron/>
            </div>
        )
    }
}