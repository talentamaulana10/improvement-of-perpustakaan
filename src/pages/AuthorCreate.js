import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios'
import "./author.css"
export default class AuthorCreate extends Component{
    render(){
        return(
            <div className="meaut">
                <p>Selamat Datang Di Halaman Tambah Penulis</p>
            <input placeholder="tulis nama penulis"/>
            <input type="number" placeholder="tulis id penulis"/><br/>
            <button className="simpan">Simpan</button>
            <button className="batal">Batal</button><br/>
            <Link className="home" to="/"><p>home</p></Link>
            <Link className="penulis" to="/author"><p>penulis</p></Link>
            </div>
        )
    }
}