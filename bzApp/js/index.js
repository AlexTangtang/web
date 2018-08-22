/**
 * Created by AlexTang on 2018/8/21.
 */
function addFirstPage() {
    var naviframe = document.getElementById('navIframe')
    naviframe.setAttribute('src','./homePage.html')

    changeSelectStatus(1)
}
function  addSecondPage() {
    alert('第二页未有内容')
    changeSelectStatus(2)
}
function  addThirdPage() {
    alert('第三页未有内容')
    changeSelectStatus(3)
}
function  addFourthPage() {
    var naviframe = document.getElementById('navIframe')
    naviframe.setAttribute('src','../html/userCenter.html')
    changeSelectStatus(4)
}
//当选中某一按钮时 改变选中状态
function  changeSelectStatus(someP) {
    var title1 = document.getElementById('itemTitle1')
    title1.style.color = '#333333'
    var img1 = document.getElementById('itemImg1')
    img1.src = '../resource/tabbar_1.png'
    var title2 = document.getElementById('itemTitle2')
    title2.style.color = '#333333'
    var img2 = document.getElementById('itemImg2')
    img2.src = '../resource/tabbar_2.png'
    var title3 = document.getElementById('itemTitle3')
    title3.style.color = '#333333'
    var img3 = document.getElementById('itemImg3')
    img3.src = '../resource/tabbar_3.png'
    var title4 = document.getElementById('itemTitle4')
    title4.style.color = '#333333'
    var img4 = document.getElementById('itemImg4')
    img4.src = '../resource/tabbar_4.png'

    switch (someP){
        case 1:
            title1.style.color = '#e31436'
            img1.src = '../resource/tabbar_1_s.png'
            break;
        case 2:
            title2.style.color = '#e31436'
            img2.src = '../resource/tabbar_2_s.png'
            break;
        case 3:
            title3.style.color = '#e31436'
            img3.src = '../resource/tabbar_3_s.png'
            break;
        case 4:
            title4.style.color = '#e31436'
            img4.src = '../resource/tabbar_4_s.png'
            break;
    }
}
window.onload = function () {
    addFirstPage()
}