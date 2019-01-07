import React,{Component} from 'react';
import Axios from 'axios'
import Navbar from '../component/Navbar'
import Cards from '../component/Card';
export default class Example extends React.Component {
  state={
    books:[]
  };

  getBook=()=>{
    Axios.get('https://api-demo.koding.sch.id/api/author/')
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
  deleteAuthor=(id)=>{
    Axios.delete(`https://api-demo.koding.sch.id/api/author/${id}`)
    .then((res)=>{
      alert("hapus data berhasil")
      this.getBook();
    })
    .catch((err)=>{
      alert("hapus data gagal")
    })
  }
  
  componentDidMount(){
    this.getBook();
  }

  render() {
    return (
      <div>
        <Navbar/>
        {this.state.books.map((value,index)=>{
          return<Cards title={value.name} author={value.id_author} delete={this.deleteAuthor} id={value.name}/>
        })}
       
      </div>
    );
  }
}