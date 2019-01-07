import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../component/Navbar'
import Axios from 'axios'
import "./author.css"
export default class AuthorCreate extends Component{
    render(){
        return(
            <div className="meaut">
            <Navbar/>
                <p>"Selamat Datang Di Halaman Tambah Penulis"</p>
            <input placeholder="tulis nama penulis"/>
            <input type="number" placeholder="tulis id penulis"/><br/>
            <button className="simpan">Simpan</button>
            <button className="batal">Batal</button><br/>
            
            </div>
        )
    }
}