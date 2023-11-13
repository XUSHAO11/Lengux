$(document).ready(function () {
    $(".darkmodes").click(function(){
         $('<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"></div></div>').appendTo($('body')),
        setTimeout(function () {
            $('body').hasClass('DarkMode') ? ($('body').removeClass('DarkMode'), localStorage.setItem('isDark', '0'), $('#nightMode').removeClass('fa-moon-o').addClass('fa-lightbulb-o')) : ($('body').addClass('DarkMode'), localStorage.setItem('isDark', '1'), $('#nightMode').removeClass('fa-lightbulb-o').addClass('fa-moon-o')),
                setTimeout(function () {
                    $('.Cuteen_DarkSky').fadeOut(1e3, function () {
                        $(this).remove()
                    })
                }, 2e3)
        })
        if ($(".darkmodes").css("color")== "rgb(0, 0, 0)") {
            $(".darkmodes").css({
                'color':'#fff'
            })
        }else{
            $(".darkmodes").css({
                'color':'rgb(0, 0, 0)'
            })
        }
    })
   
     

})

if (localStorage.getItem('isDark') == '1') {
    $('body').addClass('DarkMode')
}


