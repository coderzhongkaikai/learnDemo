let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        console.log(userInfo, 'userinof')
        function sign () {
            var name = document.getElementById('name').value
            var password = document.getElementById('password').value
            var email = document.getElementById('email').value
            var confirmpassword = document.getElementById('confirmpassword').value
            console.log(name, password,confirmpassword, email,'注册')
            if (!name) {
                document.querySelector('.error-name').style.display = "block"
                return
            } else {
                document.querySelector('.error-name').style.display = "none"
            }
            if (!email) {
                document.querySelector('.error-email').style.display = "block"
                return
            } else {
                document.querySelector('.error-email').style.display = "none"
                const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if ( !reg.test(email) ) {
                    alert('email error！')
                    return
                }
            }
            if (!password) {
                document.querySelector('.error-password').style.display = "block"
                return
            } else {
                document.querySelector('.error-password').style.display = "none"
            }
            if (!confirmpassword) {
                document.querySelector('.error-confirm-password').style.display = "block"
                return
            } else {
                document.querySelector('.error-confirm-password').style.display = "none"
            }
            
            if(password != confirmpassword) {
                document.querySelector('.password-inconsistent').style.display = "block"
                return
            } else {
                document.querySelector('.password-inconsistent').style.display = "none"  
            }
            // let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            let newUser = {
                name: name,
                password: password
            }
            if (!userInfo) {
                let newUserInfo = [ {
                name: name,
                password: password
            }]
                
                localStorage.setItem('userInfo', JSON.stringify(newUserInfo))
            } else {
                userInfo.push({
                    name: name,
                    password: password
                })
                localStorage.setItem('userInfo', JSON.stringify(userInfo))
            }
            localStorage.setItem('likeList', [])
            window.location.href = './login.html'
        }