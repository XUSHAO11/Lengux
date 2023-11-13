$(document).ready(function () {
  $(".list").click(function () {
    if ($(".headertop").css("height") == "0px") {
      $(".headertop").addClass("screen-headerblock")
      $(".header-top").css({
        'top': '500px',
        'background-color': '#314373'
      })
    } else {
      $(".headertop").removeClass("screen-headerblock")
      $(".header-top").css({
        'top': '0px',
      })

    }
   
    
  });
  // 置顶
  $("#toptop").click(function () {
    var myTimer = -1;
    var scrollTo = document.documentElement.scrollTop || document.body.scrollTop
    if (myTimer == -1) {
      myTimer = setInterval(() => {
        scrollTo -= 60
        if (scrollTo <= 0) {
          scrollTo = 0
          window.clearInterval(myTimer)
          myTimer = -1
        }
        window.scrollTo(0, scrollTo)
      }, 10);

    }
  })

  function getTime() {
    var date = new Date();
    var year = date.getFullYear(); //获取年份
    var month = date.getMonth() + 1; //获取月份
    var day = date.getDate(); //获取日期
    return year + '年' + month + '月' + day + '日&nbsp;';
  }

  document.querySelector('.timer').innerHTML = getTime();
  $(window).scroll(function () {
    var toTop = document.querySelector("#content-outer").offsetTop
    $("#updown").click(() => {
      window.scrollTo({
        top: toTop,
        behavior: "smooth"
      })
    });
    var scrollToptop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollToptop >= 600) {
      $("#toptop").css({
        'opacity': "1"
      })
    } else {
      $("#toptop").css({
        'opacity': "0"
      })
    }
    if (scrollToptop > 0) {
      $(".header-top").css({
        'background': "#314373"
      })
      $('.header-top>.menu-list>a').css({
        'color': '#f4f4f4',
      });
      $('#list').css({
        'color': '#fff'
      })
    } else {
      $(".header-top").css({
        'background': ""
      })
      $('.header-top>.menu-list>a').css({
        'color': '#000',
      });
      $('#list').css({
        'color': '#000'
      })
    }
  })
});

// 监听地址栏变化
if (window.location.pathname !== "/") {
  window.scrollTo({
    top: 900,
    behavior: "smooth"
  });

}



// 响应式优化
if ($(".list").click) {
  $(window).resize(function () {
    $(".headertop").removeClass("screen-headerblock")
    $(".header-top").css({
      'top': '0px'
    })
  });
}

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "/funny.ico");
    document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "/favicon.ico");
    document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
const egg = `
                       
 ██▓    ▓█████  ███▄    █   ▄████  █    ██ ▒██   ██▒
 ▓██▒    ▓█   ▀  ██ ▀█   █  ██▒ ▀█▒ ██  ▓██▒▒▒ █ █ ▒░
 ▒██░    ▒███   ▓██  ▀█ ██▒▒██░▄▄▄░▓██  ▒██░░░  █   ░
 ▒██░    ▒▓█  ▄ ▓██▒  ▐▌██▒░▓█  ██▓▓▓█  ░██░ ░ █ █ ▒ 
 ░██████▒░▒████▒▒██░   ▓██░░▒▓███▀▒▒▒█████▓ ▒██▒ ▒██▒
 ░ ▒░▓  ░░░ ▒░ ░░ ▒░   ▒ ▒  ░▒   ▒ ░▒▓▒ ▒ ▒ ▒▒ ░ ░▓ ░
 ░ ░ ▒  ░ ░ ░  ░░ ░░   ░ ▒░  ░   ░ ░░▒░ ░ ░ ░░   ░▒ ░
   ░ ░      ░      ░   ░ ░ ░ ░   ░  ░░░ ░ ░  ░    ░  
     ░  ░   ░  ░         ░       ░    ░      ░    ░        @Lengux. `;
console.log(egg);



