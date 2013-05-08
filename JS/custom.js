$(document).ready(function(){buttons_init();});function fonts_init()
{Cufon.replace('.cufon, h1, h2, h3, .percents .dgts');}
var maininfo_arrow_width=290;var maininfo_slides_num;var maininfo_timer=false;function maininfo_init(anim_mode,timeout)
{if(typeof(anim_mode)=='undefined')
anim_mode='sequence';if(typeof(timeout)=='undefined')
timeout=0;maininfo_slides_num=$('#maininfo_menu > li').length;$('#maininfo_menu > li').append('<div class="arrow"></div>');if(maininfo_slides_num==1)
startingSlide=0;else if(maininfo_slides_num>1)
startingSlide=1;else
return;$('#maininfo_menu > li:eq('+startingSlide+')').addClass('sel').children('.arrow').css('width',maininfo_arrow_width+'px');$('#maininfo_pics').cycle({timeout:0,speed:750,startingSlide:startingSlide});maininfo_anim_loader(startingSlide);$('#maininfo_menu > li > a').each(function(){$(this).attr('rel',$(this).parent().index());});$('#maininfo_menu > li > a').mouseenter(function(){var $par=$(this).parent();if(!$par.hasClass('sel'))
$par.children('.arrow').stop(true,true).animate({width:'13px'},200);});$('#maininfo_menu > li > a').mouseleave(function(){var $par=$(this).parent();if(!$par.hasClass('sel'))
$par.children('.arrow').stop(true,true).animate({width:'0'},100);});if(anim_mode=='sequence')
{$('#maininfo_menu > li > a').click(function(){var $par=$(this).parent();if($par.hasClass('sel'))
{$(this).blur();return false;}
$('#maininfo_menu > li').stop(true,true);var $next=$par.next('li');var $prev=$par.prev('li');if($next.hasClass('sel'))
{var rel=parseInt($(this).attr('rel'));$('#maininfo_pics').cycle(rel);maininfo_anim_loader(rel);$next.removeClass('sel');$next.children('.arrow').stop(true,true).animate({width:0},100,function(){var l=$('#maininfo_menu > li:last').detach();l.css('marginTop','-90px');l.prependTo('#maininfo_menu');$('#maininfo_menu > li:first').stop(true,true).animate({marginTop:0},250,function(){$par.addClass('sel');$par.children('.arrow').animate({width:maininfo_arrow_width+'px'},300,'easeOutExpo');});});$(this).blur();return false;}
if($prev.hasClass('sel'))
{var rel=parseInt($(this).attr('rel'));$('#maininfo_pics').cycle(rel);maininfo_anim_loader(rel);$prev.removeClass('sel');$prev.children('.arrow').stop(true,true).animate({width:0},100,function(){$('#maininfo_menu > li:first').stop(true,true).animate({marginTop:'-90px'},250,function(){var l=$('#maininfo_menu > li:first').detach();l.css('marginTop',0);l.appendTo('#maininfo_menu');$par.addClass('sel');$par.children('.arrow').animate({width:maininfo_arrow_width+'px'},300,'easeOutExpo');});});$(this).blur();return false;}});}
if(anim_mode=='semicontinuously')
{$('#maininfo_menu > li > a').click(function(){var $par=$(this).parent();if($par.hasClass('sel'))
{$(this).blur();return false;}
$('#maininfo_menu > li').stop(true,true);var $next=$par.next('li');var $prev=$par.prev('li');if($next.hasClass('sel'))
{var rel=parseInt($(this).attr('rel'));$('#maininfo_pics').cycle(rel);maininfo_anim_loader(rel);$next.removeClass('sel');$next.children('.arrow').stop(true,true).animate({width:0},150);$par.addClass('sel');$par.children('.arrow').stop(true,true).animate({width:maininfo_arrow_width+'px'},300,'easeOutExpo',function(){var l=$('#maininfo_menu > li:last').detach();l.css('marginTop','-90px');l.prependTo('#maininfo_menu');$('#maininfo_menu > li:first').animate({marginTop:0},250);});$(this).blur();return false;}
if($prev.hasClass('sel'))
{var rel=parseInt($(this).attr('rel'));$('#maininfo_pics').cycle(rel);maininfo_anim_loader(rel);$prev.removeClass('sel');$prev.children('.arrow').stop(true,true).animate({width:0},150);$par.addClass('sel');$par.children('.arrow').stop(true,true).animate({width:maininfo_arrow_width+'px'},300,'easeOutExpo',function(){$('#maininfo_menu > li:first').animate({marginTop:'-90px'},250,function(){var l=$('#maininfo_menu > li:first').detach();l.css('marginTop',0);l.appendTo('#maininfo_menu');});});$(this).blur();return false;}});}
if(anim_mode=='continuously')
{$('#maininfo_menu > li > a').click(function(){var $par=$(this).parent();if($par.hasClass('sel'))
{$(this).blur();return false;}
$('#maininfo_menu > li').stop(true,true);var $next=$par.next('li');var $prev=$par.prev('li');if($next.hasClass('sel'))
{var rel=parseInt($(this).attr('rel'));$('#maininfo_pics').cycle(rel);maininfo_anim_loader(rel);$next.removeClass('sel');$next.children('.arrow').stop(true,true).fadeOut(450,function(){$(this).css('width',0);$(this).show();});$par.addClass('sel');$par.children('.arrow').stop(true,true).animate({width:maininfo_arrow_width+'px'},650,'easeOutExpo');var l=$('#maininfo_menu > li:last').detach();l.css('marginTop','-90px');l.prependTo('#maininfo_menu');$('#maininfo_menu > li:first').animate({marginTop:0},650);$(this).blur();return false;}
if($prev.hasClass('sel'))
{var rel=parseInt($(this).attr('rel'));$('#maininfo_pics').cycle(rel);maininfo_anim_loader(rel);$prev.removeClass('sel');$prev.children('.arrow').stop(true,true).fadeOut(450,function(){$(this).css('width',0);$(this).show();});$par.addClass('sel');$par.children('.arrow').stop(true,true).animate({width:maininfo_arrow_width+'px'},650,'easeOutExpo');$('#maininfo_menu > li:first').animate({marginTop:'-90px'},650,function(){var l=$('#maininfo_menu > li:first').detach();l.css('marginTop',0);l.appendTo('#maininfo_menu');});$(this).blur();return false;}});}
if(timeout>0)
{maininfo_timer=setInterval(maininfo_cycle,timeout);$('.maininfo').mouseover(function(){if(maininfo_timer)
{clearInterval(maininfo_timer);maininfo_timer=false;}});$('.maininfo').mouseleave(function(){if(!maininfo_timer)
maininfo_timer=setInterval(maininfo_cycle,timeout);});}}
function maininfo_anim_loader(num)
{var perc;perc=Math.round((num)/(maininfo_slides_num-1)*100);if(perc<2)
perc='10px';else if(perc>99)
perc='451px';else
perc+='%';$('#maininfo_loader > .left').stop().animate({width:perc},750);}
function maininfo_cycle()
{if(maininfo_slides_num==2)
$('#maininfo_menu > li > a:eq(0)').click();else if(maininfo_slides_num>2)
$('#maininfo_menu > li > a:eq(2)').click();}
function percents_init(use_animation)
{if(typeof(use_animation)=='undefined')
use_animation=true;$('.percents').each(function(){var perc=$(this).children('.percent').text();$(this).children('.percent').empty();var html=$(this).html();$(this).html('<div class="dgts">'+perc+'</div><div class="text">'+html+'</div><div class="clear"></div>');});if(use_animation)
{$('.percents').mouseenter(function(){var $obj=$(this).children('.text').children('.percent');$obj.stop(true,true);var w=$obj.css('width');$obj.css('width','0');$obj.animate({width:w},1000);});}}
function picsline_init()
{var html=$('.picsline').html();$('.picsline').html('<div id="picsline_left"></div><div id="picsline_pics"><div class="pics_inner">'+html+'</div></div><div id="picsline_right"></div>').css('visibility','visible');html='';if($.browser.msie)
{if(parseFloat($.browser.version)<9)
{$('#picsline_pics > .pics_inner > .item').mouseenter(function(){$(this).children('.border').stop().animate({marginTop:'-25px'},400);});$('#picsline_pics > .pics_inner > .item').mouseleave(function(){$(this).children('.border').stop().animate({marginTop:0},400);});}}
$('#picsline_pics > .pics_inner > .item').each(function(){var d=$(this).children('.text').detach();var html=$(this).html();$(this).html('<div class="border"><div class="border_inner">'+html+'</div><div class="zoom"></div></div>');html='';d.appendTo(this);});var picsline_items_num=$('#picsline_pics > .pics_inner > .item').length;var picsline_item_w=parseInt($('#picsline_pics > .pics_inner > .item').outerWidth())+parseInt($('#picsline_pics > .pics_inner > .item').css('marginLeft'))+parseInt($('#picsline_pics > .pics_inner > .item').css('marginRight'));if(picsline_items_num>3)
{$('#picsline_left').mouseenter(function(){$(this).stop().css('backgroundPosition','25px -110px');$(this).animate({backgroundPosition:'22px -110px'},150,'linear');});$('#picsline_left').mouseleave(function(){$(this).stop().css('backgroundPosition','22px 40px');$(this).animate({backgroundPosition:'25px 40px'},100);});$('#picsline_left').mousedown(function(){$(this).stop().css('backgroundPosition','21px -109px');});$('#picsline_left').mouseup(function(){$(this).stop().css('backgroundPosition','22px -110px');});$('#picsline_right').mouseenter(function(){$(this).stop().css('backgroundPosition','-125px -110px');$(this).animate({backgroundPosition:'-122px -110px'},150,'linear');});$('#picsline_right').mouseleave(function(){$(this).stop().css('backgroundPosition','-122px 40px');$(this).animate({backgroundPosition:'-125px 40px'},100);});$('#picsline_right').mousedown(function(){$(this).stop().css('backgroundPosition','-121px -109px');});$('#picsline_right').mouseup(function(){$(this).stop().css('backgroundPosition','-122px -110px');});$('#picsline_right').click(function(){$('#picsline_pics > .pics_inner').stop(true,true);$('#picsline_pics > .pics_inner').animate({marginLeft:'-'+picsline_item_w+'px'},500,function(){$('#picsline_pics > .pics_inner').css('marginLeft',0);var d=$('#picsline_pics > .pics_inner > .item:first').detach();d.appendTo('#picsline_pics > .pics_inner');});});$('#picsline_left').click(function(){$('#picsline_pics > .pics_inner').stop(true,true);var d=$('#picsline_pics > .pics_inner > .item:last').detach();d.prependTo('#picsline_pics > .pics_inner');$('#picsline_pics > .pics_inner').css('marginLeft','-'+picsline_item_w+'px');$('#picsline_pics > .pics_inner').animate({marginLeft:0},500,function(){if(picsline_items_num==3)
$('#picsline_pics > .pics_inner > .item:last').remove();});});}
else
{$('#picsline_left,#picsline_right').css('visibility','hidden');}}
function picsline2_init()
{var html=$('.picsline2').html();$('.picsline2').html('<div id="picsline2_left"></div><div id="picsline2_pics"><div class="pics_inner">'+html+'</div></div><div id="picsline2_right"></div>').css('visibility','visible');html='';if($.browser.msie)
{if(parseFloat($.browser.version)<9)
{$('#picsline2_pics > .pics_inner > .item').mouseenter(function(){$(this).children('.border').stop().animate({marginTop:'-25px'},400);});$('#picsline2_pics > .pics_inner > .item').mouseleave(function(){$(this).children('.border').stop().animate({marginTop:0},400);});}}
$('#picsline2_pics > .pics_inner > .item').each(function(){var d=$(this).children('.text').detach();var html=$(this).html();$(this).html('<div class="border"><div class="border_inner">'+html+'</div><div class="zoom"></div></div>');html='';d.appendTo(this);});var picsline2_items_num=$('#picsline2_pics > .pics_inner > .item').length;var picsline2_item_w=parseInt($('#picsline2_pics > .pics_inner > .item').outerWidth())+parseInt($('#picsline2_pics > .pics_inner > .item').css('marginLeft'))+parseInt($('#picsline2_pics > .pics_inner > .item').css('marginRight'));if(picsline2_items_num>3)
{$('#picsline2_left').mouseenter(function(){$(this).stop().css('backgroundPosition','25px -110px');$(this).animate({backgroundPosition:'22px -110px'},150,'linear');});$('#picsline2_left').mouseleave(function(){$(this).stop().css('backgroundPosition','22px 40px');$(this).animate({backgroundPosition:'25px 40px'},100);});$('#picsline2_left').mousedown(function(){$(this).stop().css('backgroundPosition','21px -109px');});$('#picsline2_left').mouseup(function(){$(this).stop().css('backgroundPosition','22px -110px');});$('#picsline2_right').mouseenter(function(){$(this).stop().css('backgroundPosition','-125px -110px');$(this).animate({backgroundPosition:'-122px -110px'},150,'linear');});$('#picsline2_right').mouseleave(function(){$(this).stop().css('backgroundPosition','-122px 40px');$(this).animate({backgroundPosition:'-125px 40px'},100);});$('#picsline2_right').mousedown(function(){$(this).stop().css('backgroundPosition','-121px -109px');});$('#picsline2_right').mouseup(function(){$(this).stop().css('backgroundPosition','-122px -110px');});$('#picsline2_right').click(function(){$('#picsline2_pics > .pics_inner').stop(true,true);$('#picsline2_pics > .pics_inner').animate({marginLeft:'-'+picsline2_item_w+'px'},500,function(){$('#picsline2_pics > .pics_inner').css('marginLeft',0);var d=$('#picsline2_pics > .pics_inner > .item:first').detach();d.appendTo('#picsline2_pics > .pics_inner');});});$('#picsline2_left').click(function(){$('#picsline2_pics > .pics_inner').stop(true,true);var d=$('#picsline2_pics > .pics_inner > .item:last').detach();d.prependTo('#picsline2_pics > .pics_inner');$('#picsline2_pics > .pics_inner').css('marginLeft','-'+picsline2_item_w+'px');$('#picsline2_pics > .pics_inner').animate({marginLeft:0},500,function(){if(picsline2_items_num==3)
$('#picsline2_pics > .pics_inner > .item:last').remove();});});}
else
{$('#picsline2_left,#picsline2_right').css('visibility','hidden');}}
function fillform_init()
{var options={data:{site:1},success:fillform_success,dataType:'json',beforeSubmit:fillform_before};$("#filltheform_form").validate({submitHandler:function(form){$(form).ajaxSubmit(options);},errorPlacement:function(error,element){error.addClass('errorTip');error.insertAfter(element);},wrapper:'div'});}
function fillform_before()
{var $obj=$('#filltheform_form');$obj.fadeTo(300,0.5);$obj.before('<div id="filltheform_form_blocker" style="position:absolute;width:'+$obj.outerWidth()+'px;height:'+$obj.outerHeight()+'px;z-index:9999;background:url(img/ajax-loading.gif) no-repeat center center"></div>');}
function fillform_success(obj)
{$('#filltheform_form_blocker').remove();if(obj.error==0)
{$('#filltheform_form').fadeOut(300,function(){$('#filltheform_form').remove();$('#filltheform_form_success').fadeIn(200);});}
else
{$('#filltheform_form').fadeOut(300,function(){$('#filltheform_form').remove();$('#filltheform_form_error').fadeIn(200);});}}
function subscribe_init()
{var alt=$('#subscribe_form_input').attr('alt');if(alt)
{$('#subscribe_form_input').attr('value',alt).addClass('empt');$('#subscribe_form_input').focus(function(){if($(this).val()==$(this).attr('alt'))
$(this).attr('value','').removeClass('empt');});$('#subscribe_form_input').blur(function(){if($(this).val()=='')
$(this).attr('value',$(this).attr('alt')).addClass('empt');});}
var options={data:{site:1},success:subscribe_success,dataType:'json',beforeSubmit:subscribe_before};$("#subscribe_form").validate({submitHandler:function(form){$(form).ajaxSubmit(options);},errorPlacement:function(error,element){error.addClass('errorTip');error.insertAfter(element);},wrapper:'div'});}
function subscribe_before()
{var $obj=$('#subscribe_form');$obj.fadeTo(300,0.5);$obj.before('<div id="subscribe_form_blocker" style="position:absolute;width:'+$obj.outerWidth()+'px;height:'+$obj.outerHeight()+'px;z-index:9999;background:url(img/ajax-loading.gif) no-repeat center center"></div>');}
function subscribe_success(obj)
{$('#subscribe_form_blocker').remove();if(obj.error==0)
{$('#subscribe_form').fadeOut(300,function(){$('#subscribe_form').remove();$('#subscribe_form_success').fadeIn(200);});}
else
{$('#subscribe_form').fadeOut(300,function(){$('#subscribe_form').remove();$('#subscribe_form_error').fadeIn(200);});}}
function buttons_init()
{$('.button_dark, .button_light').each(function(){var html=$(this).html();$(this).html('<span class="normal"><span><span></span></span></span><span class="hov"><span><span></span></span></span><span class="press"><span><span></span></span></span><span class="val">'+html+'</span>');});if($.browser.msie)
$('.button_dark, .button_light').mouseenter(function(){$(this).children('.hov').show();});else
$('.button_dark, .button_light').mouseenter(function(){$(this).children('.hov').stop().fadeTo(400,1);});if($.browser.msie)
$('.button_dark, .button_light').mouseleave(function(){$(this).children('.normal').show();$(this).children('.press').hide();$(this).children('.hov').hide();});else
$('.button_dark, .button_light').mouseleave(function(){$(this).children('.normal').show();$(this).children('.press').hide();$(this).children('.hov').stop().fadeTo(300,0);});$('.button_dark, .button_light').mousedown(function(){$(this).children('.normal, .hov').hide();$(this).children('.press').show();});$('.button_dark, .button_light').mouseup(function(){$(this).children('.normal, .hov').show();$(this).children('.press').hide();});}