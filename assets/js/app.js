$(document).ready(function(){
    $(".hero_but").click(function(){
        $(".contact_p").slideToggle(1000);
    });
    
    $(".we_but").click(function(){
        $(".read_more").toggle(1000);
    });
    
    $(".blog_but1").click(function(){
        $(".read_more1").toggle(1000);
    });
    $(".blog_but2").click(function(){
        $(".read_more2").toggle(1000);
    });
    $(".blog_but3").click(function(){
        $(".read_more3").toggle(1000);
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 150){
            $('.got_but').fadeIn();
        }else{
            $('.got_but').fadeOut();
        }
    });

});