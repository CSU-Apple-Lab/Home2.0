<style socped>
.logo {
    display: inline-block;
}

.menu {
    float: right;
    margin-right: 50px;
}

.logo img {
    margin-top: 10px;
    margin-left: 50px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
}

.scollbar img {
    margin-top: 10px;
    width: 100%;
    height: 300px;
}
</style>
<template>
    <div>
        <div class="topbar">
            <Row>
                <Col span="6">
                <div class="logo">
                    <img src="../static/imgs/logo.png">
                </div>
                </Col>
                <Col span="18">
                <div class="menu">
                    <Menu mode="horizontal" :theme="theme1" active-name="1">
                        <Menu-item name="1">
                            <Icon type="home"></Icon>
                            首页
                        </Menu-item>
                        <Menu-item name="2">
                            <Icon type="clipboard"></Icon>
                            团队博客
                        </Menu-item>
                        <Menu-item name="3">
                            <Icon type="social-github"></Icon>
                            团队GitHub
                        </Menu-item>
                        <Menu-item name="4">
                            <Icon type="document-text"></Icon>
                            团队文档
                        </Menu-item>
                        <Menu-item name="5">
                            <Icon type="help"></Icon>
                            关于
                        </Menu-item>
                        <Menu-item name="6">
                            <Icon type="ios-people"></Icon>
                            成员
                        </Menu-item>
                    </Menu>
                </div>
                </Col>
            </Row>
    
        </div>
        <div class="scollbar">
            <img src="http://of8t6pu0g.bkt.clouddn.com/img_bg_1.jpg">
        </div>
    
    </div>
</template>
<script>
export default {
    data() {
        return {
            theme1: 'light',
            slideList: [
                {
                    title: '主标题1',
                    subheading: '副标题1',
                    url: 'http://fex.baidu.com/public/images/banner/h5.jpg'
                },
                {
                    title: '主标题2',
                    subheading: '副标题2',
                    url: 'http://fex.baidu.com/public/images/banner/h5.jpg'
                },
                {
                    title: '主标题3',
                    subheading: '副标题3',
                    url: 'http://fex.baidu.com/public/images/banner/h5.jpg'
                },
            ]
        }
    }
}
</script>
