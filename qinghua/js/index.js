	//ie
// 	if ( $.browser.msie){
//         if(parseInt( $.browser.version )<=9){
//             $("body").prepend("<div class='ie' style='display:block;'><span>关闭</span><div>抱歉，我们不再支持您的浏览器。<br>请升级您的Internet Explorer（IE）浏览器到<a href='http://browsehappy.osfipin.com/' target='_blank' style='text-decoration:underline'>最新版本</a>，或将<a href='http://browsehappy.osfipin.com/' target='_blank' style='text-decoration:underline'> 搜狗、360、QQ </a>等浏览器切换到急速模式，您还可以下载安装<a href='http://browsehappy.osfipin.com/' target='_blank' style='text-decoration:underline'> 谷歌、火狐 </a>浏览器以达到最佳观看模式。</div></div>");
//             $(".ie span").click(function(){$(".ie").slideUp()});
//    }};
// //ie


fontSize();
$(window).resize(function () {
   fontSize();
});

function fontSize() {
   var size;
   var winW = $(window).width();
   if (winW <= 1500 && winW > 800) {
       size = Math.round(winW / 15);
   } else if (winW <= 800) {
       size = Math.round(winW / 7.5);
       if (size > 65) {
           size = 65;
       }
   } else {
       size = 100;
   }
   $('html').css({
       'font-size': size + 'px'
   })
}
$(function () {
    $('.major').find('.list').each(function () {
        var list = $(this);
        list.find('li').each(function () {
            var li = $(this);
            li.find('.name').click(function () {
                if(li.hasClass('on')){
                    li.removeClass('on');
                    li.find('.container').stop(true, true).slideUp(300)
                }else{
                    list.find('li').removeClass('on');
                    li.addClass('on');
                    list.find('li').find('.container').stop(true, true).slideUp(300);
                    li.find('.container').stop(true, true).slideDown(300)
                }
            })
        })
    })
})

$(function () {
   //--
   $('.navA').click(function () {
       if($('body').hasClass('navShow')){
           $('body').removeClass('navShow')
       }else{
           $('body').addClass('navShow')
       }
   });
   $('.navBg').click(function () {
       $('body').removeClass('navShow');
   });
   //head 栏 的动画
   $('.nav').find('li').each(function () {
       if ($(window).width() > 800) return;
       var li = $(this);
       if (li.find('.list').length > 0) {
           li.find('a.name').click(function () {
               if (li.hasClass('on')) {
                   li.removeClass('on');
                   li.find('.list').hide();
               } else {
                   $('.nav').find('li').removeClass('on');
                   $('.nav').find('.list').hide();
                   li.addClass('on');
                   li.find('.list').show();
               }
               return false;
           })
       }
       li.find('dd').each(function () {
           var dd = $(this);
           if(dd.find('.list2').length > 0){
               dd.find('a:first').click(function () {
                   if(dd.hasClass('on')){
                       dd.removeClass('on');
                       dd.find('.list2').hide()
                   }else{
                       dd.addClass('on');
                       dd.find('.list2').show()
                   }
                   return false;
               })
           }
       })
   });
   //--选项卡
   $('.tabContentDiv').find('.tabContent:first').show();
   $('.tab').each(function (i) {
       var _this = $(this);
       var tabContentDiv = $('.tabContentDiv').eq(i).find('.tabContent');
       $(this).find('li').each(function (ii) {
           $(this).click(
               function () {
                   _this.find('li').removeClass('on');
                   $(this).addClass('on');
                   tabContentDiv.hide();
                   tabContentDiv.eq(ii).show();
               }
           )
       })
   });
   //--返回顶部
   $('.topA').click(function () {
       $('body,html').stop(true, true).animate({scrollTop: 0}, 300);
   });

   $(window).scroll(function () {
       if($(window).scrollTop() > $(window).height()*.5){
           $('.topA').fadeIn(300)
       }else{
           $('.topA').fadeOut(300)
       }
   });

   $('.icon-share').click(function () {
       if($('.sharewrapper').hasClass('show')){
           $('.sharewrapper').removeClass('show')
       }else{
           $('.sharewrapper').addClass('show')
       }
   });


   //--js下拉选择框
   $('.select').each(function () {
       
       var _this = $(this);
       _this.find('select').change(function () {
           _this.find('span').html($(this).find("option:selected").text());
       })
   });

   $('.sideNav').find('li').each(function () {
       var li = $(this);
       if(li.find('dl').length > 0){
           li.find('a:first').click(function () {
               console.log("dsfsdfsfsf")
               if(li.hasClass('on')){
                   li.removeClass('on');
                   $(this).removeClass('on');
                   li.find('dl').stop(true, true).slideUp(300)
               }else{
                   li.addClass('on');
                   $(this).addClass('on');
                   li.find('dl').stop(true, true).slideDown(300)
               }
               return false
           })
       }
   });

   //没有被用到
//    $('.foot').find('.link').hover(
//        function () {
//            $(this).addClass('on');
//            $('.foot').find('.linkBg').addClass('show')
//        },
//        function () {
//            $(this).removeClass('on');
//            $('.foot').find('.linkBg').removeClass('show')
//        }
//    );
//    $('.foot').find('.linkBg').click(function () {
//        $('.foot').find('.link').removeClass('on');
//        $('.foot').find('.linkBg').removeClass('show')
//    })

   
   

});

function channelFun() {
   var title = $('.channel').find('.title'),
       li = $('.sideNav').find('li');

   li.each(function (i) {
       $(this).find('a').click(function () {
           $('body,html').stop(true, true).animate({scrollTop: title.eq(i).offset().top}, 300);
           li.find('a').removeClass('on');
           $(this).addClass('on');
           return false
       })
   });
   
   $(window).scroll(function () {
       if($(window).scrollTop() > $('.head').height() + $('.pageBanner').height()){
           $('.sideNav').addClass('on')
       }else{
           $('.sideNav').removeClass('on')
       }
       var mt = ($('.foot').offset().top - 50) - ($(window).scrollTop() + $('.sideNav').height());
       if(mt > 0){
           mt = 0
       }
       $('.sideNav').css({
           'margin-top': mt
       });
       title.each(function (i) {
           if($(window).scrollTop() > $(this).offset().top - 20){
               li.find('a').removeClass('on');
               li.eq(i).find('a').addClass('on')
           }
       })
   })
}