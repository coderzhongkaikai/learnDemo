let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        console.log(userInfo, 'userInfo')
        function login () {
            var name = document.getElementById('name').value
            var password = document.getElementById('password').value
            if (!name) {
                document.querySelector('.error-name').style.display = "block"
            } else {
                document.querySelector('.error-name').style.display = "none"
            }
            if (!password) {
                document.querySelector('.error-password').style.display = "block"
                return
            } else {
                document.querySelector('.error-password').style.display = "none"
            }
            if (!name && !password) {
                document.querySelector('.error-name').style.display = "block"
                document.querySelector('.error-password').style.display = "block"
            }
            if( userInfo && userInfo.length) {
                var isName = userInfo.filter(item => item.name == name)
                console.log(isName,name, password,'name')
                if(isName.length) {
                    if (  password == isName[0].password ) {
                        window.location.href = './index.html'
                        sessionStorage.setItem('isLogin', 1)   
                    } else {
                        document.querySelector('.incorrect').style.display = "block"
                    }
                } else {
                    document.querySelector('.dialog').style.display = "flex"
                }
            } else {
                document.querySelector('.dialog').style.display = "flex"
            }
        }

        function cancelDialog () {
            document.querySelector('.dialog').style.display = "none"
        }

        function toSign () {
            window.location.href = './sign.html'
        }