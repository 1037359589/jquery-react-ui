/**
 * Created by bll on 16/1/1.
 */
/*
* @speed:显示速度，以毫秒为单位
* @delay:多长时间切换一次
* @nextEvent:下一张图显示后的回调函数
* @prevEvent:上一张显示后的回调函数
* */
(function($,window,document){
    var FadeSlide=function(ele,options){
        var that=this;
        that.$ele=ele;
        that.nodes={
            slideItemList:$(".slide-item-list"),
            slideItemIndex:$(".slide-item-index"),
            slidePrev:$(".slide-prev"),
            slideNext:$(".slide-next")
        };
        that.default={
            delay:options.delay||500,
            activeIndex:0,
            total:that.nodes.slideItemList.find('li').length,
            inter:"",
            timeOut:""
        };
        that.opt= $.extend({},that.default,options);

        that.interval=function(){
                that.opt.inter=setInterval(function(){
                    that.opt.activeIndex++;
                    if(that.opt.activeIndex>that.opt.total-1){
                        that.opt.activeIndex=0;
                    }
                    that.show(that.opt.activeIndex,that.opt.nextEvent);
                },that.opt.delay);
                return this;
            };
        that.opt.delayGoing=function(){
            that.opt.timeOut=setTimeout(function(){
                that.interval();
            },that.opt.delay);
        };
        that.init=function(){
            that.opt.activeIndex=0;
            that.nodes.slideNext.show();
            that.nodes.slideItemList.find("li").eq(that.opt.activeIndex).fadeIn(that.opt.speed);
            that.nodes.slideItemIndex.find("li").eq(that.opt.activeIndex).addClass("index-active");
            that.interval().next(that.opt.nextEvent).prev(that.opt.prevEvent);
        };
        that.next=function(fn){
            that.nodes.slideNext.on("click",function(){
                clearInterval(that.opt.inter);
                clearTimeout(that.opt.timeOut);
                that.opt.delayGoing();
                that.opt.activeIndex++;
                if(that.opt.activeIndex>that.opt.total-1){
                    that.opt.activeIndex=that.opt.total-1;
                    return false;
                }
                that.show(that.opt.activeIndex,fn);
            });
            return this;
        };
        that.prev=function(fn){
             that.nodes.slidePrev.on("click",function(){
                 clearInterval(that.opt.inter);
                 clearTimeout(that.opt.timeOut);
                 that.opt.delayGoing();
                 that.opt.activeIndex--;
                 if(that.opt.activeIndex<0){
                     that.opt.activeIndex=0;
                     return false;
                 }
                 that.show(that.opt.activeIndex,fn);
             });
        };
        that.show=function(index,fn){
            that.nodes.slideItemList.find("li").hide();
            that.nodes.slideItemList.find("li").eq(index).fadeIn(that.opt.speed);
            that.nodes.slideItemIndex.find("li").removeClass("index-active").eq(that.opt.activeIndex).addClass("index-active");
            if(that.opt.activeIndex==0){
                that.nodes.slidePrev.hide();
            }else{
                that.nodes.slidePrev.show();
            }
            if(that.opt.activeIndex==that.opt.total-1){
                that.nodes.slideNext.hide();
            }else{
                that.nodes.slideNext.show();
            }
            if(fn!='undefined'&&typeof fn=='function'){
                fn(that.opt.activeIndex);
            }
        };
        return that.init();

    };
    $.fn.FadeSlide=function(options){
        return new FadeSlide(this,options);
    };
})(jQuery,window,window);