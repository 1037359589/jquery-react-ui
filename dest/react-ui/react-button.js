var Btn=React.createClass({displayName: "Btn",
	render:function(){
		return (
			React.createElement("div", null, "你好，世界！！")
		)
	}
});
ReactDOM.render(React.createElement(Btn, null),document.getElementById('app'));