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
    width: 100%;
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
                            <Icon type="help"></Icon>
                            关于
                        </Menu-item>
                        <Menu-item name="5">
                            <Icon type="ios-people"></Icon>
                            成员
    
                        </Menu-item>
                        <Menu-item name="6">
                            <Icon type="document-text"></Icon>
                            团队文档
    
                        </Menu-item>
                    </Menu>
                </div>
                </Col>
            </Row>
    
        </div>
        <div class="scollbar">
            <ur>
                <li v-for="slide in slideList">
                    <img :src="slide.url">
                </li>
            </ur>
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
                    id:1,
                    title: '主标题1',
                    subheading: '副标题1',
                    url: 'http://of8t6pu0g.bkt.clouddn.com/h1.jpg'
                },
                {
                    id:2,
                    title: '主标题1',
                    subheading: '副标题1',
                    url: 'http://of8t6pu0g.bkt.clouddn.com/h2.jpg'
                },
                {
                    id:3,
                    title: '主标题1',
                    subheading: '副标题1',
                    url: 'http://of8t6pu0g.bkt.clouddn.com/h3.jpg'
                },
            ]
        }
    }
}
</script>
