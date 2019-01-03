import React,{Component} from 'react'
import Book from './Book'
import './home.css'
import Navbar from '../component/Navbar'
export default class Home extends Component{
    render(){
        return(
            <div>
                <h1 className="ta">Wellcome to perpus</h1>
                <Navbar/>
            </div>
        )
    }
}