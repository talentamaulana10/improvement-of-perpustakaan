import React,{Component} from 'react'
import './book.css'
import {Redirect} from 'react-router-dom';
import Navbar from '../component/Navbar'
import Axios from 'axios'
export default class BookEdit extends Component{
    state={
        author:[],
        judul:"",
        id_author:0,
        isEdit:false,
    }
    getAuthor=()=>{
        Axios.get('https://api-demo.koding.sch.id/api/author/')
        .then((res)=>{
            console.log(res.data.data);
            this.setState({
              author:res.data.data
            })
            console.log(this.state.author)
          })
          .catch((err)=>{
              
          });
        };

    editBook=()=>{
            Axios.put(`https://api-demo.koding.sch.id/api/book/${this.props.match.params.id}`,{
            judul:this.state.judul,
            id_author:this.state.id_author
        })
        .then(()=>{
            this.setState({
                isEdit : true
            })
        })
        .catch(()=>{
            alert("transfer data gagal, mungkin anda sedang ofline")
        })
        
    }
    batal=()=>{
        this.setState({
            judul:""
        })
    }
    handleChanges=(event)=>{
        this.setState({
            judul:event.target.value
        })
    }
    selectHandleChanges=(event)=>{
        console.log(event.target.value)
        this.setState({
            id_author:event.target.value
        })
    }
    componentDidMount(){
        this.getAuthor();
    }
    render(){
        const{author}=this.state
        return(
            
            <div className="mebook">
            {this.state.isEdit === true && (<Redirect to="/book" />)}
            <Navbar/>
            <h1>"Selamat datang di halaman tambah buku"</h1>
            <hr/>
                <input onChange={this.handleChanges} placeholder="Tulis Judul buku" value={this.state.judul}/><br/>
                
                <select onChange={this.selectHandleChanges}>
                    {author.map((value, index)=>{
                        return <option value={value.id}>{value.name}</option>
                    })}

                </select><br/>
                
                    <button className="mybutton" onClick={()=>{this.editBook()}}>Simpan</button>
                    <button className="mybuttont" onClick={()=>{this.batal()}} >Batal</button><br/>
                    
                    
            </div>
        )
    }
}