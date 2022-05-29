
        let loginInfo = sessionStorage.getItem('isLogin')
        
        console.log(loginInfo, ' 是否登录')
        if (loginInfo) {
            document.querySelector('.login-sign').style.display = "none"
        }

        function toLike () {
            window.location.href = './like.html'
        }
        function handleLike ( type ) {
            var getLikeList = localStorage.getItem('likeList')
            console.log( getLikeList, 'getLikeList')
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
            setTimeout(function(){
                document.querySelector('.dialog').style.display = 'none'
            }, 500)
        }
        function toLogin () {
            window.location.href = './login.html'
        }
        function toSign () {
            window.location.href = './sign.html'
        }
        function handleExit () {
            window.location.href = './login.html'
            sessionStorage.setItem('isLogin', '')   
        }
        function handleHome () {
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
        function handleTick() {
            if (!loginInfo) {
                window.location.href = './login.html'
            }
            console.log('车票',document.querySelector('.ticket-tab').style)
            document.querySelector('.tab-icon-home').src = './images/icon_home_default.png'
            document.querySelector('.ticket-tab').style.background = "red"
            document.querySelector('.food-tab').style.background = "#BD9751"
            document.querySelector('.Accommodation-tab').style.background = "#BD9751"
            document.querySelector('.shop-tab').style.background = "#BD9751"

            document.querySelector('.home').style.display = 'none'
            document.querySelector('.food-content').style.display = 'none'
            document.querySelector('.Accommodation-content').style.display = 'none'
            document.querySelector('.shop-content').style.display = 'none'
            document.querySelector('.ticket-content').style.display = 'flex'

            document.querySelector('.icon-ticketl').style.display = 'block'
            document.querySelector('.icon-wall').style.display = 'none'
            document.querySelector('.icon-hotels').style.display = 'none'
            document.querySelector('.icon-shop').style.display = 'none'
            document.querySelector('.icon-food').style.display = 'none'
        }
        function handleFood () {
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
            document.querySelector('.food-content').style.display = 'flex'
            document.querySelector('.Accommodation-content').style.display = 'none'
            document.querySelector('.shop-content').style.display = 'none'
            
            document.querySelector('.icon-ticketl').style.display = 'none'
            document.querySelector('.icon-wall').style.display = 'none'
            document.querySelector('.icon-hotels').style.display = 'none'
            document.querySelector('.icon-shop').style.display = 'none'
            document.querySelector('.icon-food').style.display = 'block'
        }
        function handleAccommodation () {
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
            document.querySelector('.Accommodation-content').style.display = 'flex'

            document.querySelector('.icon-ticketl').style.display = 'none'
            document.querySelector('.icon-wall').style.display = 'none'
            document.querySelector('.icon-hotels').style.display = 'block'
            document.querySelector('.icon-shop').style.display = 'none'
            document.querySelector('.icon-food').style.display = 'none'
            
        }
        function handleShop () {
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
            document.querySelector('.shop-content').style.display = 'flex'

            document.querySelector('.icon-ticketl').style.display = 'none'
            document.querySelector('.icon-wall').style.display = 'none'
            document.querySelector('.icon-hotels').style.display = 'none'
            document.querySelector('.icon-shop').style.display = 'block'
            document.querySelector('.icon-food').style.display = 'none'
        }