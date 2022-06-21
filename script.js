jQuery(document).ready(function(){
jQuery(window).scroll(function(){
    if(this.scrollY>20){
        jQuery(".navbar").addClass("sticky")
        jQuery(".theme").removeClass("show1")}
    else{
        jQuery(".navbar").removeClass("sticky")
        jQuery(".theme").addClass("show1")

    }
    if(this.scrollY>500){
        jQuery(".scroll-up-btn").addClass("show")
         }
         else{
        jQuery(".scroll-up-btn").removeClass("show")


         }
})  
/* slide up script*/

jQuery(".scroll-up-btn").click(function(){
          jQuery("body").animate(
              { scrollTop:0,},10
         );
});


        /*typing animation script */

         var typed =new Typed("#Typing",{

            strings:["mobile developer","app Designer","web developer","network administrator"],
            loop:true,
            typeSpeed:100,
            backSpeed:10,
         });






jQuery(".menu-btn").click(function(){
    jQuery(".navbar .menu").toggleClass("active");
    jQuery(".menu-btn i").toggleClass("active");

})

//owl carousel script

jQuery('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplaytimeOut:2000,
    autoplayHoverPause:true,
    responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
        items:2,
        nav:false
    },
    1000:{
        items:3,
        nav:false
    }



    }

});

})
  

    let element2= document.querySelectorAll('.themebutton')

       
            element2.forEach(color=>{
                color.addEventListener('click',()=>{
            
                 let dataColor=color.getAttribute('data-color')
                document.querySelector(':root').style.setProperty('--main-color',dataColor)
                         
            })})
            
            
        