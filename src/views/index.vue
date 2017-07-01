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
    margin-top: 40px;
}

.introduceCard h2 {
    font-size: 22px;
    margin-top: 10px;
}

.introduceCard p {
    font-size: 14px;
    margin-top: 10px;
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
                <div style="width:320px">
                    <div style="text-align:center">
                        <Icon type="ionic" size="40" color="#2d8cf0"></Icon>
                        <h2>技术为上的力量</h2>
                        <p>技术驱动，代码定义，"Talk is cheap,show me the code"是我们的信条。</p>
                    </div>
                </div>
                </Col>
                <Col span="8">
                <div style="width:320px">
                    <div style="text-align:center">
                        <Icon type="ionic" size="40" color="#2d8cf0"></Icon>
                        <h2>相信个人的潜能</h2>
                        <p>追求全栈，极致挖掘，我们因每个改变世界的梦想，觉醒自己的原力。</p>
                    </div>
                </div>
                </Col>
                <Col span="8">
                <div style="width:320px">
                    <div style="text-align:center">
                        <Icon type="ionic" size="40" color="#2d8cf0"></Icon>
                        <h2>发挥创造的价值</h2>
                        <p>编码未来，创造价值，我们用心写好每一行代码，开发无尽界，创造不可能。</p>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {

    data() {
        return {
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
            }
        }
    }
}
</script>
