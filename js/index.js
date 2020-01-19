$(function(){
  theaMsForm($('.sign-in'));

  var swiper1 = new Swiper('.swiper1', {
    pagination : '.swiper-pagination',
    autoplay: 3000,//可选选项，自动滑动
    paginationClickable :true,
  })

  function tabHandle(headEle, contEle, className){
    $(headEle).each(function(i){
      $(this).click(function(){
        $(this).addClass(className).siblings().removeClass(className);
        $($(contEle)[i]).addClass(className).siblings().removeClass(className);
      })
    })
  }
  // 学校
  tabHandle('.schools-cont .tab-head li', '.schools-cont .detail-item', 'cur');
  // 课程
  tabHandle('.course-cont .tab-head li', '.course-cont .detail-item', 'cur');

  $('#visit').click(function() {
    $('.mask').show();
    $('.tc').show();
  });
  $('.xl-close').click(function() {
    $('.mask').hide();
    $('.tc').hide();
  });
})