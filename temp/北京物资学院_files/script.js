headerFix()
 Nav('#nav')//导航
SerMax()//搜索
mobideMenu()// 移动端主导航
//搜索点击弹出效果
function SerMax(){
    $('.bwu-serBtn').click(function(){
    	$(this).fadeOut(300)
    	$('#ser').addClass('open')
	})
}
/*tab切换*/
;(function($){
    $.fn.extend({
        tab: function (options){
            var defaults = {         //默认参数
                ev : 'mouseover',    //默认事件'mouseover','click'
                delay : 100,         //延迟时间
                auto : true,         //是否自动切换 true,false
                speed : 2000,        //自动切换间隔时间(毫秒)
                more : false         //是否有more,false,true
            };
            var options = $.extend(defaults, options);  //用户设置参数覆盖默认参数
            return this.each(function (){
                var o = options;
                var obj = $(this);
                var oTil = obj.find('.til_tab');
                var oBox = obj.find('.tabListBox');
                var oMore = null;
                var iNum = 0;
                var iLen = oTil.length;
                $('.more_tab').eq(0).css('display','block')
                oBox.eq(0).css('display','block')
                oTil.eq(0).addClass('on')
                //鼠标事件绑定
                oTil.bind(o.ev , function (){
                    var _this = this;
                    if(o.ev == 'mouseover' && o.delay){
                        _this.timer = setTimeout(function (){
                            change(_this);
                        },o.delay);
                    }else{
                        change(_this);
                    };
                })

                oTil.bind('mouseout',function (){
                    var _this = this;
                    clearTimeout(_this.timer);
                });

                //自动切换效果
                (function autoPlay(){
                    var timer2 = null;
                    if(o.auto){
                        function play(){
                            iNum++;
                            if(iNum >= iLen){
                                iNum =0;
                            };
                            change(oTil.eq(iNum));
                        };
                        timer2 = setInterval(play,o.speed);

                        obj.on('mouseover',function (){
                            clearInterval(timer2);
                        })

                        obj.on('mouseout',function (){
                            timer2 = setInterval(play,o.speed);
                        })
                    };
                })();

                function change(box){
                    iNum = $(box).index();
                    oTil.removeClass('on');
                    oBox.css('display','none');
                    if(o.more){
                        oMore = obj.find('.more_tab');
                        oMore.css('display','none');
                        oMore.eq(iNum).css('display','block');
                    };
                    oTil.eq(iNum).addClass('on');
                    oBox.eq(iNum).css('display','block');
                }
            });
        }
    })
})(jQuery);

//下拉菜单 例调用：Nav('#nav');
function Nav(id){
	var oNav = $(id);
	var aLi = oNav.find('li');

	aLi.hover(function (){
        $(this).addClass('on');
       $(this).find('.bwu-subNav').addClass('flipInY');
       //$(this).find('.subNav').removClass('flipOutY');
        //$(this).css('z-index','9999');
	},function (){
        $(this).removeClass('on');
        $(this).find('.bwu-subNav').removeClass('flipInY');
       //$(this).find('.subNav').addClass('flipOutY');
        //$(this).css('z-index','999');
	})
};
//移动端主导航
function mobideMenu(){
	$(".mobile-inner-header .mobile-inner-header-icon").click(function(){
	  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
	  	$('.logo').toggleClass('mobile_logo');
	  	$('.mobile_bg02').fadeToggle(200)
	  	$(".mobile-inner-nav").slideToggle(250);
	  	// if($(this).hasClass('mobile-inner-header-icon-click')){
	  	// 	$(this).html('&times;')
	  	// }else{
	  	// 	$(this).html('+')
	  	// }
	  });
	  $(".mobile-inner-nav li").each(function( index ) {
	  	$( this ).css({'animation-delay': (index/30)+'s'});
	  });
	  $('.mobile-inner-nav li strong').click(function(){
	  	$(this).next('dl').slideToggle(500);
	  	$(this).toggleClass('on');
	  	if($(this).hasClass('on')){
	  		$(this).html("&times;")
	  	}else{
	  		$(this).html("+")
	  	}
	  })




}

// function n2(){
// 	$('.systemList').find('li').each(function(e){
// 		if(e%2==1){
// 			$(this).addClass('n2')
// 		}
// 	})
// }
//移动端顶部点击弹出下拉菜单
function Menu(menu,main){
		$(menu).click(function(){
	  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
	  	$(this).find('.iconfont').toggleClass("iconjia1 iconjian")
	  	$(".sub_navm").slideToggle(250);
		$('.sub_navm').find('.phone_toggle').click(function(){
			$(this).next('dl').slideToggle(500);
			$(this).toggleClass('on');
			if($(this).hasClass('on')){
				$(this).html("&times;")
			}else{
				$(this).html("+")
			}
			})
	  });
};
function subLeft(){
	$('.subLeft').find('.active').each(function(){
        if($(this).parent().parent().hasClass('second_nav')){
            $(this).parent().parent().css('display','block');
             $(this).parent().parent().parent().addClass('active')
             $(this).parent().parent().prev('.toggles').html('&times;')

        }
    })
	$('.subLeft').find('.toggles').click(function(){
		if($(this).parent('li').hasClass('active')){
				$(this).html("+")
				$(this).next('.second_nav').slideUp(500)
				$(this).parent('li').removeClass('active')
			}else{
				$(this).html("&times;")
				$(this).next('.second_nav').slideDown(500);
				$(this).parent().siblings().find('.second_nav').slideUp(500)
				$(this).parent().siblings().removeClass('active')
				$(this).parent().siblings().find('.toggles').html("+")
				$(this).parent('li').addClass('active')
			}
		})
	}
/*回到顶部*/
$('.goTop').click(function(){

	$('body,html').stop().animate({scrollTop:0});
	return false;

});
$(window).scroll(function(){
    //获取窗口的滚动条的垂直位置
    var s = $(window).scrollTop();
    //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
    if( s > 200){
        $(".goTop").fadeIn(100);
    }else{
        $(".goTop").fadeOut(200);
    };
});
function slideToggle(){
	$('.teacherList03').find('dl').each(function(){
		if($(this).hasClass('open')){
			$(this).find('dd').css('display','block');
		}
	})
	$('.teacherList03').find('dl dt span').click(function(){
		$(this).parent().nextAll('dd').slideToggle(500);
		$(this).parent().parent().toggleClass('open');
	})

}




//二级页面大图高度问题
function subBanner(){
	var iWSon = document.documentElement.clientWidth;
 	if(iWSon>=1920){
    	$('.subBanner').css('height', 280+'px');

    }else{
    	$('.subBanner').css('height',iWSon * (280/1920)+'px');
    }
}
function headerFix(){
	var iWSon = document.documentElement.clientWidth;
	var $windowHeight = $(window).height();
	var bodyHeight = $(document.body).height();
	var $headerHeight = $('.bwu-header').height()*2;
	$(window).scroll(function(){
	  var scrollTop = $(window).scrollTop();
	  if(scrollTop >= 136 && bodyHeight > $windowHeight+$headerHeight){
	  	if(iWSon > 1020){
	  		$('.bwu-header').addClass('currents');
	  	}else{
	  		$('.bwu-header').removeClass('currents');
	  	}
	  }else{
	  	$('.bwu-header').removeClass('currents');
	  }
	})
}

function menuToggle(){
	$('.menu_btn').click(function(){
		$(this).next('.system_list').slideToggle(500)
		})
	}



// $(function(){
// 	var sWSon = document.documentElement.clientWidth;
// 	if(sWSon >=1225){
// 		var headerHeight = $('.header').height();
// 		var bannerHeight = $('.subBanner').height();
// 		var footerHeight = $('.footer').height();
// 		var cHeight = document.documentElement.clientHeight;
// 		var subPage_height =cHeight-headerHeight-bannerHeight-footerHeight-114;
// 		$('.subPage').css('min-height',subPage_height+"px");
// 	}
// })
function share(){
	$('.share_btn').click(function(){
		$(this).next('.bdsharebuttonbox').slideToggle(500)
	})

}
function odd_even(id,odd,even){
	$(id).find("tr").each(function(index,element){
	if(index%2==1)
		$(this).css(odd);
		//$(this).addClass('odd');
	else
		$(this).css(even);
		//$(this).addClass('even');
	});
}
$('window').resize(function(){
	headerFix()
})
function weChat(){
	var iWSon = document.documentElement.clientWidth;
	$('.codeBtn').each(function(){
		var $this =$(this)
		if(iWSon>=998){
			$this.hover(function(){
				$(this).find('.code').stop().fadeToggle(300)
			})
		}else{
			$this.click(function(event){
				event.stopPropagation();
				$(this).find('.code').fadeToggle(300);
				return false;
			})
		}

	})
}
//点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
 $(document).click(function(event){
	 var _con = $('.codeBtn');  // 设置目标区域
	 if(!_con.is(event.target) && _con.has(event.target).length === 0){
		$('.codeBtn').find('.code').slideUp(300);     //淡出消失
	 }

});

 function SubImgHeight(){
    var iWSon = document.documentElement.clientWidth;
    var oSubbanner = document.getElementById('subbanner');

    if(iWSon>=1920){
        oSubbanner.style.height = 350+'px';
    }else if(iWSon<1920){
        oSubbanner.style.height = iWSon * (350/1920)+'px';
    }

    window.onscroll = window.onresize = function (){
        var iWSon = document.documentElement.clientWidth;
        if(iWSon>=1920){
            oSubbanner.style.height = 350+'px';
        }else if(iWSon<1920){
            oSubbanner.style.height = iWSon * (350/1920)+'px';
        }
    }

}

function FontSize2(Size,obj){
    var iNum = 13;

    $(Size).find('.max').bind('click',function (){
        iNum+=2;
        if(iNum>=24){
            iNum = 24;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })

    $(Size).find('.mid').bind('click',function (){
        iNum = 13;
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })

    $(Size).find('.min').bind('click',function (){
        iNum-=2;
        if(iNum<=14){
            iNum = 12;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })
};

function navMin() {
    $("#mbtn").click(function(){
        $(".navm").toggle(300);
    });
};