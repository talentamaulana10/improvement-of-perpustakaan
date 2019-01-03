import React,{Component} from 'react';
import { Table } from 'reactstrap';
import Axios from 'axios'

import Cards from '../component/Card';

import { from } from 'rxjs';
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
      <div>
        {this.state.books.map((value,index)=>{
          return<Cards title={value.judul} author={value.id_author}/>
        })}
       
      </div>
    );
  }
}