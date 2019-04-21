import React,{Component,Fragment} from'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
class News extends Component{
constructor(props){
super(props);
this.state={
    list:[
        {
            aid:'1',
            title:'我是新闻1' 
        },
        {
            aid:'2',
            title:'我是新闻2' 
        },
        {
            aid:'3',
            title:'我是新闻3' 
        },
        {
            aid:'4',
            title:'我是新闻4' 
        },
        {
            aid:'5',
            title:'我是新闻5' 
        },
    ]
 };
}
    render(){
        return(<div>
            我是新闻组件
            <ul>{
                this.state.list.map((value,key)=>{
                    return (
                        <li key={key}>
                        <Link to={`/content/${value.aid}`}>{value.title}</Link>
                        </li>
                    )       
                })
            }
            </ul>
        </div>)
    }
}

export  default News;