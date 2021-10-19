/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2020, 12, 3) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 8500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p><audio id="audio" src={url}></audio>爱上你的第<span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">

                <div className="date">{date()}</div>
                <div id="autotype">
                    <h1 style={{ fontWeight: 900 }}>写给越越</h1>
                    <p>本来这个主题是一封情书的形式，但有人不让我玩尬的，我全给他删掉了</p>
                    <p>这个准备了几个月，本来打算在你生日的时候作为你生日的一个小礼物送给你的，
                        但我的宝昨天的心情好像不太好，于是就提前给你看看啦，到时候生日再给你重新做一个吧</p>
                    <p>本来还想放上你的照片的，但好像那张机车少女的颜色和这个背景不太搭</p>
                    <p>之前准备的内容我临时给删掉了，所以内容看上去会很乱，哈哈哈哈哈哈哈哈哈哈哈全文下来
                        估计都是我的碎碎念，想到啥写啥，希望我的宝不会嫌弃</p>
                    <p>虽然都是碎碎念，但希望你可以在碎碎念中看出来我喜欢你</p>
                    <p>我是垃圾，但我的爱不是！！！</p>
                    <p>哈哈哈哈哈哈哈哈哈哈哈 好啦好啦不玩尬，希望我的宝不要因为这个衣服难过伤心哦</p>
                    <p>不过是一件衣服而已，咱不要他啦！以后一定会有更好看的衣服等着我的宝！毕竟我的宝这么好看</p>
                    <p>要天天开心哦，今天的你也是这么的可爱</p>
                    <p>爱你</p>
                    <p>(ps.不知道你有没有发现鼠标随便点可以放烟花这个特效呢)</p>
                    <p>顺颂时祺</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>llb</p>
                        <p>2021年10月日19</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Main