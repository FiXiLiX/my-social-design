function scrollOver(px){return document.body.scrollTop > px || document.documentElement.scrollTop > px}
var navToggle = $('.navbar-toggle')
var btnToTop = $('#btn-to-top')

function viewToTop() {
    document.body.scrollTop = 0 
    document.documentElement.scrollTop = 0
}

function onScroll(){
    scrollOver(300) ?
        $('.navbar').addClass('navbar-non-transparent')
    :
        $('.navbar').removeClass('navbar-non-transparent')
    scrollOver(20) ?
        btnToTop.css('display', 'block')
    :
        btnToTop.css('display', 'none')
}

$(document).ready(function (){
    $(window).scroll(onScroll)
    btnToTop.click(viewToTop)
    navToggle.click(function(){
        var navbar = $(navToggle.data('navbar'))
        for(let ul of navbar.children())
            if($(ul).hasClass('navbar-list')){
                if($(ul).css('display')=='none'){
                    $(ul).css('display', 'block')
                    navbar.addClass('navbar-non-transparent')
                }else{
                    $(ul).css('display', 'none')
                    onScroll()
                }
            }
    })
})