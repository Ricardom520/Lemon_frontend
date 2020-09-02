<template>
    <div class="login">
        <div class="back_img">
            <div class="banner-bg">
                <ul>
                    <li v-for="(item, index) in bubbles" :key="index"></li>
                </ul>
            </div>
        </div>
        <div class="box">
            <div class="content">
                <div class="logo_box">
                    <img src="@/assets/images/common/logo.jpg"/>
                </div>
                <div class="form_box">
                    <div class="title_line">
                        <h3>欢迎登录</h3>
                    </div>
                    <div class="form_line">
                        <p>
                          <i class="iconfont wk-icon-user"></i><input class="wk-input" placeholder="请输入用户名" v-model="username"/>
                        </p>
                        <p>
                          <i class="iconfont wk-icon-password"></i><input class="wk-input" placeholder="请输入用户密码" type="password" v-model="password"/>
                        </p>
                    </div>
                    <div class="submit_line">
                        <wk-button class="submit" :onClick="handleSubmit">登录</wk-button>
                    </div>
                    <div class="to_regis">
                      <router-link :to="{path: '/register'}">尚未账号?立即注册</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { encryptDes } from '@/utils/crypto';
import { setToken } from '@/utils/auth';
import service from '@/utils/request';

export default {
    name: 'login',
    data() {
        return {
            bubbles: [],
            username: '',
            password: '',
        }
    },
    created() {
        this.bubbles.length = 10;
    },
    methods: {
        handleSubmit() {
            if (!this.username) {
                this.$toast({
                    type: 'warning',
                    message: '用户名不能为空'
                })
                return;
            }
            if (!this.password) {
                this.$toast({
                    type: 'warning',
                    message: '用户密码不能为空'
                });
                return;
            }
            service.post('/user/login', {
                username: this.username,
                password: encryptDes(this.password),
            })
            .then(res => {
                if (res.code === 200) {
                    if (res.data.success) {
                        this.$toast({
                            message: res.data.msg,
                            type: 'success',
                        });
                        setToken(res.data.token);
                        this.$router.push({path: '/house', query: {uid: res.data.uid}})
                    } else {
                        this.$toast({
                            message: res.data.msg,
                            type: 'fail',
                        })  
                    }           
                } else {
                    this.$toast({
                        message: res.data.msg,
                        type: 'fail',
                    })   
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #74C3CA;
    .logo_box {
        text-align: center;
        img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }
    }
    .back_img {
        position: relative;
        height: 100%;
        .banner-bg {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            ul {
                position: relative;
                height: 100%;
                li {
                    position: absolute;
                    bottom: 0;
                    opacity: 0;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    background-color: rgba(252, 253, 254, .85);
                    animation: square 15s infinite;
                    transition-timing-function: linear;
                    &:nth-child(1) {
                        left: 10%;
                    }
                    &:nth-child(2) {
                        left: 22%;
                        width: 2.5rem;
                        height: 2.5rem;
                        animation-delay: 2s;
                        animation-duration: 7s;
                    }
                    &:nth-child(3) {
                        left: 25%;
                        animation-delay: 4s;
                    }
                    &:nth-child(4) {
                        left: 40%;
                        width: 2rem;
                        height: 2rem;
                        animation-duration: 8s;
                        background-color: rgba(252, 255, 255, .3);
                    }
                    &:nth-child(5) {
                        left: 70%;
                        animation-duration: 3s;
                        background-color: rgba(255, 255, 255, .4);
                    }
                    &:nth-child(6) {
                        left: 80%;
                        width: 3rem;
                        height: 3rem;
                        animation-delay: 3s;
                        background-color: rgba(255, 255, 255, .2);
                    }
                    &:nth-child(7) {
                        left: 32%;
                        width: 4rem;
                        height: 4rem;
                    }
                    &:nth-child(8) {
                        left: 55%;
                        width: 20px;
                        height: 20px;
                        animation-delay: 4s;
                        animation-duration: 15s;
                    }
                    &:nth-child(9) {
                        left: 25%;
                        width: .8rem;
                        height: .8rem;
                        animation-duration: 2s;
                        animation-duration: 12s;
                        background-color: rgba(255, 255, 255, .3);
                    }
                    &:nth-child(10) {
                        left: 85%;
                        width: 4rem;
                        height: 4rem;
                        animation-delay: 5s;
                    }
                }
            }
        }
    }
    .box {
        position: absolute;
        top: 7rem;
        width: 100%;
        .content {
            width: 70%;
            margin: 0 auto;
            .form_box {
                .title_line {
                    text-align: center;
                    h3 {
                        color: #fff;
                        font-size: 2rem;
                    }
                }
                .form_line {
                    margin-top: 2rem;
                    p {
                        display: flex;
                        align-items: center;
                        margin: 1rem 0;
                        padding: .6rem .2rem;
                        border-radius: 2rem;
                        background: #B3DFE2;
                        i {
                            margin: 0 .5rem;
                            font-size: 1.5rem;
                            color: #fff;
                        }
                        .wk-input {
                            display: inline-block;
                            outline: none;
                            border: none;
                            box-sizing: border-box;
                            color: #606266;
                            padding: 0.4rem 0;
                            background: transparent;
                        }
                        input::placeholder {
                            color: #fff;
                        }
                    }
                }
                .submit_line {
                    margin-top: 3rem;
                    .submit {
                        font-size: 1.2rem;
                        font-weight: bold;
                        color: #91CFD5;
                        width: 100%;
                    }
                }
                .to_regis {
                  text-align: center;
                  margin-top: 1rem;
                }
            }
        }
    }
}
@keyframes square {
    0% {
        opacity: .9;
        transform: translateY(10rem) rotate(45deg);
    }
    25% {
        opacity: .95;
        transform: translateY(-20rem) rotate(90deg);
    }
    50% {
        opacity: 1;
        transform: translateY(-40rem) rotate(135deg);
    }
    100% {
        opacity: 0;
        transform: translateY(-60rem) rotate(180deg);
    }
}
</style>

<style lang="less">
.login {
  .log_input {
    .wk-input__suffix__pre {
      i {
        font-size: 1.5rem;
        color: #fff;
      }
    }
    .wk-input__inner {
      color: #fff;
      margin-left: .5rem;
      border: none;
      background: transparent;
    }
    .wk-input__inner::placeholder {
      color: #fff;
    }
  }
}
</style>