$(function(){

    //main text
    const intro = gsap.timeline({

    })
    const headTxt = new SplitType('.main_vis h2', { types: 'words, chars', });
    headTxt.chars
    intro.from(headTxt.chars,{
        opacity:0,
        stagger:0.03,
        duration:1,
        x:100
    })
    .from('header h1',{opacity:0},0.5)
    .from('header .menu',{opacity:0},0.7)
    .from('header button',{opacity:0},0.8)
    .from('.main_vis a',{opacity:0},0.9)

    //menu_open
    $('.menu').click(function(){

        if($(this).hasClass('close')){
            $(this).removeClass('close')
            $('header').removeClass('on');
            $('body').removeClass('scroll_h');
            $('.menu_open, .contact').stop().slideUp();
        }else{
            $('header').addClass('on');
            $('body').toggleClass('scroll_h');
            $('.menu_open').stop().slideDown();
            $(this).addClass('close')
        }


    })

    //contact
    $('header button').click(function(){

        $('.contact').stop().slideDown();
        $('header').addClass('on');
        $('body').toggleClass('scroll_h');
        $('.menu').addClass('close')

        });
    
    //menu_hover
    $('.menu_open .work').hover(function(){
        $('.menu_open').css({"background":"indigo"});
    });
    $('.menu_open .intro').hover(function(){
        $('.menu_open').css({"background":"orange"});
    });
    $('.menu_open .people').hover(function(){
        $('.menu_open').css({"background":"indianred"});
    });

    $('.menu_open a').mouseleave(function(){
        $('.menu_open').css({"background":"black"});
    })

    //select work
    $('.main_vis a').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
    })
    
    //a
    $('.menu_open a').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 700);
        $('.menu_open').stop().slideUp('fast');
        $('.menu').removeClass('close')
        $('header').removeClass('on');
        $('body').removeClass('scroll_h');
    })



    $('.txt_motion').each(function(index, item){ 
        
        gsap.from(item,{
            scrollTrigger:{
                trigger:item,
                start:"top 80%", 
                end:"bottom top",
                //markers:true
            },
            duration:1,
            yPercent:20,
            opacity:0,
            stagger:0.1,
        })
    })


    $('body').mousemove(function(e){
        w = $('.cursor').width()/2
        h = $('.cursor').height()/2
        gsap.to('.cursor',{
            x:e.clientX - w,
            y:e.clientY - h
        })
    })

    $('a, .scale').hover(function(){
        gsap.to('.cursor',{
            scale:3,
            duration:0.2
        })
    },function(){
        gsap.to('.cursor',{
            scale:1,
            duration:0.2
        })
    })

    $('#works').hover(function(){
        $('.cursor').addClass('blue')
    },function(){
        $('.cursor').removeClass('blue')
    })

    bgArr = ['img/gucci.jpg','img/fortnum.jpg','img/nintendo.jpg','img/galaxy.jpg','img/seoul.jpg'];
    $('.con ul li').hover(function(){
        $('.cursor').addClass('hov')
        gsap.to('.cursor',{"background-image":"url("+bgArr[$(this).index()]+")",})
    },function(){
        $('.cursor').removeClass('hov')
        gsap.to('.cursor',{"background-image":"none",})
    })

});