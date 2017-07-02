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

.row {
    margin-top: 50px;
    margin-left: 5%;
    margin-right: 5%;
}

.introduceCard h2 {
    font-size: 22px;
    margin-top: 15px;
}

.introduceCard p {
    font-size: 14px;
    margin-top: 15px;
}

.introduceCard li {
    margin-left: 10px;
    list-style: none;
    display: inline-block;
}

.titleCard {
    background: #efefef;
    margin-top: 50px;
}

.titleCard h1 {
    text-align: center;
    padding-top: 40px;
    font-size: 40px;
}

.titleCard p {
    text-align: left;
    padding-top: 40px;
    padding-bottom: 50px;
    margin-left: 15%;
    margin-right: 15%;
    font-size: 18px;
    color: #333;
}

.memberIntroduce {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
}

.memberIntroduce h1 {
    text-align: left;
    padding-top: 20px;
    font-size: 28px;
}

.memberIntroduce h4 {
    text-align: left;
    padding-top: 20px;
    font-size: 18px;
}

.memberIntroduce p {
    text-align: left;
    padding-top: 20px;
    font-size: 16px;
    color: #333;
}

.memberIntroduceSpan {
    text-align: center;
    vertical-align: middle;
}

.addUs {
    height: 300px;
    background: -webkit-linear-gradient(-45deg, #4cc1bd 0%, #3f95ea 100%);
    background: -o-linear-gradient(-45deg, #4cc1bd 0%, #3f95ea 100%);
    background: -moz-linear-gradient(-45deg, #4cc1bd 0%, #3f95ea 100%);
    background: linear-gradient(-45deg, #4cc1bd 0%, #3f95ea 100%);
}

.addUsMain {
    margin-top: 40px;
}

.addUs .addUsMain p{
    color: #fff;
    font-size: 45px;
    text-align: center;
}

.addUs .addUsMain button{

}

.footer {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 50px;
    margin-bottom: 50px;
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
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide>
                    <img src="http://of8t6pu0g.bkt.clouddn.com/h1.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://of8t6pu0g.bkt.clouddn.com/h2.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://of8t6pu0g.bkt.clouddn.com/h3.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
        </div>
        <div class="introduceCard row">
            <Row type="flex" justify="space-around" class="code-row-bg">
                <Col span="8">
                <div style="text-align:center">
                    <Icon type="ios-pulse-strong" size="50" color="#2d8cf0"></Icon>
                    <h2>技术为上的力量</h2>
                    <p>技术驱动，代码定义，"Talk is cheap,show me the code"是我们的信条。</p>
                </div>
                </Col>
                <Col span="8">
                <div style="width:320px">
                    <div style="text-align:center">
                        <Icon type="ionic" size="50" color="#2d8cf0"></Icon>
                        <h2>相信个人的潜能</h2>
                        <p>追求全栈，极致挖掘，我们因每个改变世界的梦想，觉醒自己的原力。</p>
                    </div>
                </div>
                </Col>
                <Col span="8">
                <div style="width:320px">
                    <div style="text-align:center">
                        <Icon type="arrow-graph-up-right" size="50" color="#2d8cf0"></Icon>
                        <h2>发挥创造的价值</h2>
                        <p>编码未来，创造价值，我们用心写好每一行代码，开发无尽界，创造不可能。</p>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
        <div class="titleCard">
            <h1>
                我们在寻找志在未来的你
            </h1>
            <p>
                互联网如同一张张多米诺骨牌，或者一颗颗黑白棋棋子一般。而一个懂得这张网的程序员，很有可能能找到那颗最关键的棋子，一翻之下，就能反转整个棋盘。这个棋子可以是苹果，google，阿里巴巴，腾讯，facebook，也可以是你，我，或者任何一个痴迷这个世界的人。
            </p>
        </div>
        <div class="introduceCard row">
            <Row>
                <Col span="14">
                <div>
                    <div class="introduceCard-span"></div>
                    <Icon type="checkmark-circled" size="40" color="#2d8cf0"></Icon>
                    <li>
                        <h2>舒适一流的开发环境</h2>
                        <p style="margin-top:5px;">我们提供豪华的研发环境与测试设备，全Mac机房与全套测试设备，尽情coding。</p>
                    </li>
                </div>
                <div>
                    <Icon type="checkmark-circled" size="40" color="#2d8cf0"></Icon>
                    <li>
                        <h2>大牛导师与学长学姐的指导</h2>
                        <p style="margin-top:5px;">大牛导师与学长的技术指导，并且认识更多校内优秀开发者，以及实习就业时的名企内推。</p>
                    </li>
                </div>
                <div>
                    <Icon type="checkmark-circled" size="40" color="#2d8cf0"></Icon>
                    <li>
                        <h2>苹果官方活动的参与捷径</h2>
                        <p style="margin-top:5px;">WWDC Student Scholarship的推荐，直通硅谷参与苹果开发者大会的机会。</p>
                    </li>
                </div>
                </Col>
                <Col span="10">
                <div style="background-image: url(http://of8t6pu0g.bkt.clouddn.com/vedio-bg.jpg); height:300px">
    
                </div>
                </Col>
            </Row>
        </div>
        <div class="memberIntroduce">
            <Tabs type="card" closable>
                <Tab-pane label="Web组" icon="social-chrome" type="card">
                    <Row>
                        <Col span="12">
                        <div class="memberIntroduceSpan">
                            <Icon type="social-chrome-outline" size="300" color="#2d8cf0"></Icon>
                        </div>
                        </Col>
                        <Col span="12">
                        <h1>Web组</h1>
                        <h4>成员：</h4>
                        <p>前端开发、后端开发、全栈开发</p>
                        <h4>工具：</h4>
                        <p>JavaScript、PHP、Node.js、Java、Python、golang</p>
                        <h4>职责：</h4>
                        <p>用游览器作为魔法，服务器作为利刃，创意各类web应用</p>
                        </Col>
                    </Row>
                </Tab-pane>
                <Tab-pane label="移动组" icon="iphone" type="card">
                    <Row>
                        <Col span="12">
                        <div class="memberIntroduceSpan">
                            <Icon type="iphone" size="300" color="#2d8cf0"></Icon>
                        </div>
                        </Col>
                        <Col span="12">
                        <h1>移动</h1>
                        <h4>成员：</h4>
                        <p>iOS开发、Android开发</p>
                        <h4>工具：</h4>
                        <p>objective-c、Java、swift</p>
                        <h4>职责：</h4>
                        <p>基于移动平台展现创意与技术，开发各类移动app</p>
                        </Col>
                    </Row>
                </Tab-pane>
                <Tab-pane label="算法组" icon="code-download" type="card">
                    <Row>
                        <Col span="12">
                        <div class="memberIntroduceSpan">
                            <Icon type="code-download" size="300" color="#2d8cf0"></Icon>
                        </div>
                        </Col>
                        <Col span="12">
                        <h1>Web组</h1>
                        <h4>成员：</h4>
                        <p>算法开发</p>
                        <h4>工具：</h4>
                        <p>Algorithm，ML，ACM</p>
                        <h4>职责：</h4>
                        <p>算法组是算法爱好者的聚居地，研究ACM及机器学习等算法相关</p>
                        </Col>
                    </Row>
                </Tab-pane>
                <Tab-pane label="设计组" icon="social-dribbble-outline" type="card">
                    <Row>
                        <Col span="12">
                        <div class="memberIntroduceSpan">
                            <Icon type="social-dribbble-outline" size="300" color="#2d8cf0"></Icon>
                        </div>
                        </Col>
                        <Col span="12">
                        <h1>设计组</h1>
                        <h4>成员：</h4>
                        <p>UI设计、UE设计</p>
                        <h4>工具：</h4>
                        <p>Photoshop、Sketch、AfterEffects、Axure、C4D</p>
                        <h4>职责：</h4>
                        <p>为移动端与web端提供交互图与UI视觉图，关注用户体验</p>
                        </Col>
                    </Row>
                </Tab-pane>
                <Tab-pane label="运营组" icon="ios-world-outline" type="card">
                    <Row>
                        <Col span="12">
                        <div class="memberIntroduceSpan">
                            <Icon type="ios-world-outline" size="300" color="#2d8cf0"></Icon>
                        </div>
                        </Col>
                        <Col span="12">
                        <h1>运营组</h1>
                        <h4>成员：</h4>
                        <p>产品运营、产品经理</p>
                        <h4>工具：</h4>
                        <p>Axure、魔刀、Skctch</p>
                        <h4>职责：</h4>
                        <p>了解各类互联网产品的运营、发掘创新产品</p>
                        </Col>
                    </Row>
                </Tab-pane>
            </Tabs>
        </div>
        <div class="addUs">
            <div class="addUsMain">
                <p>立即加入我们的团队</p>
                <Button type="success" size="large">立即加入</Button>
            </div>
        </div>
        <div class="footer">
            <div class="copyright">
                <p>© Copyright 2016. All Rights Reserved by CSU APPLE Lab.</p>
                <p>
                    <a href="http://csuapple.com/">中南大学苹果实验室</a> 湘ICP备16019716号</p>
            </div>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

    data() {
        return {
            tab0: true,
            tab1: true,
            tab2: true,

            theme1: 'light',
            swiperOption: {
                notNextTick: true,
                autoplay: 3000,
                effect: "coverflow",
                grabCursor: true,
                setWrapperSize: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                mousewheelControl: true,
                observeParents: true,
            },
            components: {
                swiper,
                swiperSlide
            },
            computed: {
                swiper() {
                    return this.$refs.mySwiper.swiper
                }
            },
            methods: {

            }
        }
    }
}
</script>
