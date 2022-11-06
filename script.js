let burger_check = true;
$('.Questions-block').click(function(){
    $(this).find('p').css('transform','rotate(45deg)');
    $(this).find('.Questions-block-bottom');
});
$('.burger-menu-img').click(function(){
    if(burger_check){
        $('.burger-menu-list').css('display','block');
        return burger_check = false;
    }
    if(!burger_check){
        $('.burger-menu-list').css('display','none');
        return burger_check = true;
    }
});