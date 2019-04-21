import React,{Component} from 'react';
import url from 'url';
class ProductDetail extends Component{
    constructor(props){
        super(props);
        this.state={
           
         };
    }
    //声明周期函数
    componentDidMount(){
        //获取动态路由的传值
       console.log(url.parse(this.props.location.search,true));
       var query=url.parse(this.props.location.search,true).query;
       console.log(query)
    }
    render(){ 
        return(<div>我是商品详情
            
        </div>)
    }
}

export default ProductDetail;