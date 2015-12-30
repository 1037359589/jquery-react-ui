
var BtnDiv=React.createClass({
	render:function(){
		return (
			<div>
			<BtnDefault/>
			<BtnSmall/>
			</div>
		)
	}
});
var BtnDefault=React.createClass({
	render:function(){
		return (
			<button className="btn default normal hover" id="btn">
				DEFAULT
			</button>
		)
	}
});
var BtnSmall=React.createClass({
	render:function(){
		return (
			<button className="btn default small hover">
				DEFAULT
			</button>
		)
	}
});
ReactDOM.render(<BtnDiv/>,document.getElementById('app'));
(function(win,document){
	var  ReactUi=function(btn){
		this.btn=document.getElementById(btn);
		console.log(this.btn);
	}
	var ReactUi=new ReactUi('btn');
})(window,document)
