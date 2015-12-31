

//var BtnSmall=React.createClass({
//	render:function(){
//		return (
//			<button className="btn default small hover">
//				DEFAULT
//			</button>
//		)
//	}
//});
//ReactDOM.render(<BtnSmall/>,document.getElementById('app'));
var Btn;
(function(win,document){
    Btn={
        options:{},
        init:function(options){
            this.options=options;
            this.render();
        },
        render:function(){
            var that=this;
            var Button=React.createClass({
                getInitialState:function(){
                    return {
                        class:that.options.class,
                        text:that.options.text
                    }
                },
                handleClick:function(){
                    that.options.eventClick()
                    if(that.options.eventClick!='undefined'&&typeof that.options.eventClick!==''){
                        return false;
                    }
                },
                render:function(){
                    return (
                        <button className={this.state.class} onClick={this.handleClick}>
                        {this.state.text}
                        </button>
                        )
                }
            });
            ReactDOM.render(<Button/>,document.getElementById(Btn.options.node));
            return that;
        }
    };
})(window,document)
window.onload=function(){
    Btn.init({
        node:'app',
        class:'btn default normal red hover',
        text:"btn default small hover",
        eventClick:function(){
            console.log(1);
        }
    });
};




