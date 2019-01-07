import React,{Component} from 'react'
import Axios from 'axios';
export default class Table extends Component{
    state={
        book:[]
    };
    getBook=()=>{
        Axios.get("https://api-demo.koding.sch.id/api/author/")
        .then((res)=>{
            console.log(res.data.data);
            this.setState({
                    book:res.data.data
            })
        })
        .catch((err)=>{
            console.log("error")
        })
    }
    componentDidMount(){
        this.getBook();
    }
    render(){
        return(
            <div>
                <p>{this.state.book}</p>
            </div>
        )
    }
}

