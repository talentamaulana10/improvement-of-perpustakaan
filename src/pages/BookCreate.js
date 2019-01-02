import React,{Component} from 'react'
import './book.css'
import Axios from 'axios'
export default class BookCreate extends Component{
    state={
        author:[],
        judul:"",
        id_author:2,
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
              console.log(err);
          });
        };
        postBook=()=>{
            Axios.post('https://api-demo.koding.sch.id/api/book/',{
            judul:"belajar menyimpan",
            id_author:1
        })
        .then(()=>{
            alert("data succes di transfer")
        })
        .catch(()=>{
            alert("gagal")
        })
    }
    componentDidMount(){
        this.getAuthor();
    }
    render(){
        const{author}=this.state
        return(
            <div className="mebook">
            <h1>Selamat datang di halaman tambah buku</h1>
                <input placeholder="Tulis Judul buku"/><br/>
                <p>pilih nama penulis :</p>
                <select>
                    {author.map((value, index)=>{
                        return <option value={index}>{value.name}</option>
                    })}

                </select><br/>
                
                    <button onClick={()=>{this.postBook()}}>Simpan</button>
                
            </div>
        )
    }
}