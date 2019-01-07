import React,{Component} from 'react';
import Axios from 'axios'
import './buku.css'
import Navbar from '../component/Navbar'
import {Link} from 'react-router-dom'
import Button from '../component/Button'
import Cards from '../component/Card';
import Table from '../component/Table';
export default class Example extends React.Component {
  state={
    books:[]
  };

  getBook=()=>{
    Axios.get('https://api-demo.koding.sch.id/api/book/')
    .then((res)=>{
      console.log(res.data.data);
      this.setState({
        books:res.data.data
      })

      
    })
    .catch((err)=>{
        alert("data gagal dimuat, mungkin anda sedang ofline")
    });
  };
  
  componentDidMount(){
    this.getBook();
  }

  render() {
    return (
      <div className="sija">
      <div className="navigator">
        <Navbar/>
        </div>
        {this.state.books.map((value,index)=>{
          return<div className="senju"><Cards title={value.judul} author={value.name}/></div>
        })}
        <Button tag={Link} to="/book/create"/>
        
       
      </div>
    );
  }
}