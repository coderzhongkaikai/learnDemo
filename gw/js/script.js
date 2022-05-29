//Get user information from temporary storage
let loginInfo = sessionStorage.getItem('isLogin')
console.log(loginInfo, ' isLogin?')
//User information exists, update style
if (loginInfo) {
    document.querySelector('.login-sign').style.display = "none"
}
//init Home page style
handleHome()
//go like page
function toLike() {
    window.location.href = './like.html'
}
//get like list and show the list
function handleLike(type) {
    var getLikeList = localStorage.getItem('likeList')
    console.log(getLikeList, 'getLikeList')
    document.querySelector('.dialog').style.display = 'block'
    if (getLikeList && getLikeList.length) {
        var list = JSON.parse(getLikeList);
        list = list.concat(type)
        localStorage.setItem('likeList', JSON.stringify([...new Set(list)]))
    } else {
        let list = [type]
        console.log(type, list, 'getLikeList')
        localStorage.setItem('likeList', JSON.stringify(list))
    }
    document.querySelector('.dialog').style.display = 'flex'
    setTimeout(function () {
        document.querySelector('.dialog').style.display = 'none'
    }, 500)
}

function toLogin() {
    window.location.href = './login.html'
}

function toSign() {
    window.location.href = './sign.html'
}

function handleExit() {
    window.location.href = './login.html'
    sessionStorage.setItem('isLogin', '')
}

//banner   show the Home style
function handleHome() {
    document.querySelector('.tab-icon-home').src = './images/icon_home_active.png'
    document.querySelector('.ticket-tab').style.background = "#BD9751"
    document.querySelector('.food-tab').style.background = "#BD9751"
    document.querySelector('.Accommodation-tab').style.background = "#BD9751"
    document.querySelector('.shop-tab').style.background = "#BD9751"

    document.querySelector('.home').style.display = 'block'
    document.querySelector('.food-content').style.display = 'none'
    document.querySelector('.Accommodation-content').style.display = 'none'
    document.querySelector('.shop-content').style.display = 'none'
    document.querySelector('.ticket-content').style.display = 'none'

    document.querySelector('.icon-ticketl').style.display = 'none'
    document.querySelector('.icon-wall').style.display = 'block'
    document.querySelector('.icon-hotels').style.display = 'none'
    document.querySelector('.icon-shop').style.display = 'none'
    document.querySelector('.icon-food').style.display = 'none'

}
//banner    show to the Tick style

function handleTick() {
    if (!loginInfo) {
        window.location.href = './login.html'
    }
    console.log('ticket', document.querySelector('.ticket-tab').style)
    document.querySelector('.tab-icon-home').src = './images/icon_home_default.png'
    document.querySelector('.ticket-tab').style.background = "red"
    document.querySelector('.food-tab').style.background = "#BD9751"
    document.querySelector('.Accommodation-tab').style.background = "#BD9751"
    document.querySelector('.shop-tab').style.background = "#BD9751"

    document.querySelector('.home').style.display = 'none'
    document.querySelector('.food-content').style.display = 'none'
    document.querySelector('.Accommodation-content').style.display = 'none'
    document.querySelector('.shop-content').style.display = 'none'
    document.querySelector('.ticket-content').style.display = 'block'

    document.querySelector('.icon-ticketl').style.display = 'block'
    document.querySelector('.icon-wall').style.display = 'none'
    document.querySelector('.icon-hotels').style.display = 'none'
    document.querySelector('.icon-shop').style.display = 'none'
    document.querySelector('.icon-food').style.display = 'none'
}
//banner    show to the Food style
function handleFood() {
    if (!loginInfo) {
        window.location.href = './login.html'
    }
    document.querySelector('.food-tab').style.background = "red"
    document.querySelector('.ticket-tab').style.background = "#BD9751"
    document.querySelector('.Accommodation-tab').style.background = "#BD9751"
    document.querySelector('.shop-tab').style.background = "#BD9751"
    document.querySelector('.tab-icon-home').src = './images/icon_home_default.png'

    document.querySelector('.home').style.display = 'none'
    document.querySelector('.ticket-content').style.display = 'none'
    document.querySelector('.food-content').style.display = 'block'
    document.querySelector('.Accommodation-content').style.display = 'none'
    document.querySelector('.shop-content').style.display = 'none'

    document.querySelector('.icon-ticketl').style.display = 'none'
    document.querySelector('.icon-wall').style.display = 'none'
    document.querySelector('.icon-hotels').style.display = 'none'
    document.querySelector('.icon-shop').style.display = 'none'
    document.querySelector('.icon-food').style.display = 'block'
}
//banner    show to the Accommodation style
function handleAccommodation() {
    if (!loginInfo) {
        window.location.href = './login.html'
    }
    document.querySelector('.Accommodation-tab').style.background = "red"
    document.querySelector('.food-tab').style.background = "#BD9751"
    document.querySelector('.ticket-tab').style.background = "#BD9751"
    document.querySelector('.shop-tab').style.background = "#BD9751"
    document.querySelector('.tab-icon-home').src = './images/icon_home_default.png'

    document.querySelector('.home').style.display = 'none'
    document.querySelector('.ticket-content').style.display = 'none'
    document.querySelector('.food-content').style.display = 'none'
    document.querySelector('.Accommodation-content').style.display = 'block'

    document.querySelector('.icon-ticketl').style.display = 'none'
    document.querySelector('.icon-wall').style.display = 'none'
    document.querySelector('.icon-hotels').style.display = 'block'
    document.querySelector('.icon-shop').style.display = 'none'
    document.querySelector('.icon-food').style.display = 'none'

}
//banner    show to the shop style
function handleShop() {
    if (!loginInfo) {
        window.location.href = './login.html'
    }
    document.querySelector('.shop-tab').style.background = "red"
    document.querySelector('.Accommodation-tab').style.background = "#BD9751"
    document.querySelector('.food-tab').style.background = "#BD9751"
    document.querySelector('.ticket-tab').style.background = "#BD9751"
    document.querySelector('.tab-icon-home').src = './images/icon_home_default.png'

    document.querySelector('.home').style.display = 'none'
    document.querySelector('.ticket-content').style.display = 'none'
    document.querySelector('.food-content').style.display = 'none'
    document.querySelector('.Accommodation-content').style.display = 'none'
    document.querySelector('.shop-content').style.display = 'block'

    document.querySelector('.icon-ticketl').style.display = 'none'
    document.querySelector('.icon-wall').style.display = 'none'
    document.querySelector('.icon-hotels').style.display = 'none'
    document.querySelector('.icon-shop').style.display = 'block'
    document.querySelector('.icon-food').style.display = 'none'
}