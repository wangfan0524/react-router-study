// react路由的配置：
// 1.找到官方文档
// 2.安装 npm imnstall react-router-dom --save 
// 3.找到项目的跟组件引入react-router-dom
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
// 4.复制官方文档组件里面的内容进行修改（加载的组件要提前引入）
/* <Router>
      <div>
        <header className={header}>
        <Link to="/">首页</Link>

        <Link to="/news">新闻</Link>

        <Link to="/producer">商品</Link>
        </header>
        <br/>
        <hr/>
        <br/>
       
        <Route exact path="/" component={Home}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/producer" component={Producer}/>
        </div>
      </Router> */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
import Home from './Home';
import News from './News';
import Producer from './Producer';
import header from './header.css';
import  Content from './Content';
import  ProductDetial from './ProductDetial';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <header className={header}>
        <Link to="/">首页</Link>

        <Link to="/news">新闻</Link>

        <Link to="/producer">商品</Link>
        </header>
        <br/>
        <hr/>
        <br/>
       
        <Route exact path="/" component={Home}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/producer" component={Producer}/>
        <Route exact path="/content/:aid" component={Content}/>
        <Route exact path="/productdetail" component={ProductDetial}/>
        </div>
      </Router>
    );
  }
}

export default App;
