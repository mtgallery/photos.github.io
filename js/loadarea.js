$(function(){
    var $setArea = $('#loadarea'),
    $setMore = $('#loadmore'),
    loadNum = 7,
    maxNum = 53;

    $setMore.click(function(){
        var childLengh = $setArea.children('div').length;
        var loopCont = (childLengh)+(loadNum);

        if(loopCont < maxNum){
            $.each(new Array(loadNum),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/images/gallery/img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/images/gallery/img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
            });
        } else if(loopCont >= maxNum){
            var overCont = (loopCont)-(maxNum);
            var adjustCont = (loadNum)-(overCont);

            $.each(new Array(adjustCont),function(i){
                $setArea.append('<div class="list list-item list-mv07 mv07"><div class="photo bl_galleryImgBlock_item js_modalButton" style="background-image:url(https://mtgallery.github.io/portfolio/images/gallery/img' + ((childLengh)+((i)+1)) + '.jpg);" data-src="https://mtgallery.github.io/portfolio/images/gallery/img' + ((childLengh)+((i)+1)) + '.jpg" /></div>');
                $setMore.remove();
            });
        }
    });
    // $(window).load(function(){
    //     $setMore.click();
    // });
});
