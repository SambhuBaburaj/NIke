$('.color').click(function(){
    var img=$(this).attr('src');
    $('.shoeimage').attr('src',img)
})
gsap.from(".shoeimage", { 
    scale: 0.5, 
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });