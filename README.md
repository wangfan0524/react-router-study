#主要是学习了路由和路由的传值
##路由
##路由的传值
###动态路由
    动态路由传值主要是在Content和News组件
    1.动态路由配置
        <Route exact path="/content/:aid" component={Content}/>
    2.对应的动态路由加载的组件里获取传值
        this.props.match.params
    3.跳转：<Link to={`/content/${value.aid}`}>{value.title}</Link> 使用了模板字符串
###get传值
    get传值只要用到了组件Producer组件和ProducerDetail组件
    使用get传值会将值封装在this.props.loaction.search里边需要安装url解析组件进行解析（npm install url --save）