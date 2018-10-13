/*
let navxxk = document.getElementById('kq-nav-two');
let navlis = navxxk.getElementsByTagName('li');
let navdivs = navxxk.getElementsByClassName('kq-hiu');
let kqsy = document.getElementById('kq-nav-sy');
let kqjj = document.getElementById('kq-nav-jjsx');


for (let i = 0; i <navlis.length ; i++) {
    navlis[i].index = i;
    navlis[i].onclick = function () {
        for (let j = 0; j <navlis.length ; j++) {
            navlis[j].className = '';
            navdivs[j].className = '';

        }
        this.className = 'active';
        navdivs[this.index].className = 'active';

    }
}
kqsy.onclick = function (){
    kqjj.style.border = 'none';
    kqsy.style.borderBottom = '3px solid white'
};
kqjj.onclick = function () {
    kqsy.style.border = 'none';
    kqjj.style.borderBottom='3px solid white'
};*/

let Lbtbanner = (function () {
    let LBT = document.getElementById('kq-LBT');
    let swiper = document.getElementById('kq-swiper');
    let focus = document.getElementById('kq-focus');
    let imgs = swiper.getElementsByTagName('img');
    let lis = focus.getElementsByTagName('li');
    let left = LBT.getElementsByTagName('a')[0];
    let right = LBT.getElementsByTagName('a')[1];
    let data = null;
    let step = 0;
    let timer = null;
    let isClick = true;

    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', 'data.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
                bindHtml()
            }
        };
        xhr.send();
        console.log(data);
    }

    function bindHtml() {
        let imgStr = ``,lisStr = ``;
        for (let i = 0; i <data.length ; i++) {
            imgStr += `<div><img data-src="img/${data[i].src}" alt=""></div>`;
            lisStr +=`<li class="${i===0?'selected':''}"></li>`;
        }
        imgStr += `<div><img data-src="img/${data[0].src}" alt=""></div>`;
        swiper.innerHTML = imgStr;
        focus.innerHTML = lisStr;
        utils.css(swiper, 'width', 960 * (data.length + 1));
        lazyImg()
    }

    function lazyImg() {
        for (let i = 0; i < imgs.length; i++) {
            let cur = imgs[i];
            let newImg = new Image;
            let url = cur.getAttribute('data-src');
            newImg.src = url;
            newImg.onload = function () {
                cur.src = this.src;
                newImg = null;
                animate(cur, {opacity: 1}, 300)
            }
        }
    }

    function auto() {
        timer = setInterval(autoMove, 3000);
    }

    function autoMove() {
        if (step >= data.length) {
            step = 0;
            utils.css(swiper, 'left', 0)
        }
        step++;
        animate(swiper, {left: step * -960}, 1000, function () {
            isClick = true;
        });
        focusTip()
    }

    function focusTip() {
        for (let i = 0; i < lis.length; i++) {
            if (step === i) {
                lis[i].classList.add('selected');
            } else {
                lis[i].classList.remove('selected')
            }
            if (step === data.length) {
                lis[0].classList.add('selected')
            }
        }
    }

    function mousemove() {
        LBT.onmouseover = function () {
            clearInterval(timer);
            utils.css(left, 'display', 'block');
            //left.style.display = 'block';
            utils.css(right, 'display', 'block');
            //right.style.display = 'block'
        };
        LBT.onmouseout = function () {
            timer = setInterval(autoMove, 2000);
            utils.css(left, 'display', 'none');
            //left.style.display = 'none';
            utils.css(right, 'display', 'none');
            //right.style.display = 'none'
        }
    }

    function click() {
        right.onclick = function () {
            if (isClick) {
                isClick = false;
                autoMove()
            }
        };
        left.onclick = function () {
            if (isClick) {
                isClick = false;
                if (step <= 0) {
                    step = data.length;
                    utils.css(swiper, 'left', step * -960)
                }
                step--;
                animate(swiper, {left: -960 * step}, 1000, function () {
                    isClick = true;
                });
                focusTip()
            }

        };
    }

    function focusClick() {
        for (let i = 0; i < lis.length; i++) {
            lis[i].onmouseenter = function () {
                if (isClick) {
                    isClick = false;
                    step = i-1;
                    autoMove();
                }
            }
        }
    }

    document.onvisibilitychange = function () {
        if (document.visibilityState == "hidden") {
            clearInterval(timer);
        } else {
            timer = setInterval(autoMove, 2000);
        }
    };

    return{
        init:function () {
            ajax();
            auto();
            mousemove();
            click();
            focusClick();
        }
    }
})();


let box = document.getElementById('box');
let uls = document.getElementById('aaaa');
let imgs = box.getElementsByTagName('img');
let data1  = null;
let minH = null;
let stop = 0;

ajax();
function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get','data1.json',false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState==4&&xhr.status==200){
            data1 = JSON.parse(xhr.responseText);
bindHtml(24)
        }
    };
    xhr.send()
}
console.log(data1);

function bindHtml(n) {
    let ulsStr = ``;
    for (let i = 0; i < data1.length; i++) {
        ulsStr += `<li>
                <a href="javascript:;" class="box-a1">
                    <img src="${data1[i].img}" alt="">
                </a>
                <a href="javascript:;" class="box-a2">
                    <div class="textHide">${data1[i].title}</div>
                    <div class="priceText">
                        <span>快抢价<span class="cur">¥${data1[i].price}</span></span>
                        <del class="old">¥76.00</del>
                    </div>
                    <div class="statusBar">
                        <div class="status-bar-text text_hide">已抢${data1[i].yq}件</div>
                    </div>
                    <div class="buyBtn">
                        <span class="buy-btn">立即抢购</span>
                        <span class="left-text">仅剩${data1[i].js}件</span>
                    </div>
                </a>
            </li>`
    }
    uls.innerHTML = ulsStr;
}

bindHtml();



function lazyImg(ele) {
    if (ele.load)return;
    let imgH = ele.offsetHeight/2;
    let imgT = utils.offset(ele).top;
    let winT = utils.win('scrollTop');
    if (winT+winH>imgH+imgT){
        let newImg = new Image;
        let url = ele.getAttribute('data-src');
        newImg.src = url;
        newImg.onload = function () {
            ele.src = this.src;
            newImg = null;
            ele.load = true;
            ele.parentNode.style.background = 'none';

            fideIn(ele)
        }

    }
}

function fideIn(ele) {
    let opacity = utils.css(ele,'opacity');
    ele.timer = setInterval(()=>{
        opacity +=0.1;
        utils.css(ele,'opacity',opacity);
        if (opacity>=1){
            clearInterval(ele.timer);
            utils.css(ele,'opacity',1)
        }

    },50);

}




























































