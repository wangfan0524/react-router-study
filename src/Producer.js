import React,{Component,Fragment} from'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
class Producer extends Component{

    constructor(props){
        super(props);
        this.state={
            list:[
            {
                pid:'1',
                title:'我是商品1' 
            },
            {
                pid:'2',
                title:'我是商品2' 
            },
            {
                pid:'3',
                title:'我是商品3' 
            },
            {
                pid:'4',
                title:'我是商品4' 
            },
            {
                pid:'5',
                title:'我是商品5' 
            },
        ]
        
    }
    }
    render(){
        return <div>Producer
             <ul>{
                this.state.list.map((value,key)=>{
                    return (
                        <li key={key}>
                        <Link to={`/productdetail?pid=${value.pid}`}>{value.title}</Link>
                        </li>
                    )       
                })
            }
            </ul>
        </div>
    }
}

export  default Producer;