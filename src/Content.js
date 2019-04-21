import React,{Component} from 'react';
class Content extends Component{
    constructor(props){
        super(props);
        this.state={
           
         };
    }
    //声明周期函数
    componentDidMount(){
        //获取动态路由的
        console.log(this.props.match.params.aid);
    }
    render(){ 
        return(<div>我是新闻详情{this.props.match.params.aid}
            
        </div>)
    }
}

export default Content;