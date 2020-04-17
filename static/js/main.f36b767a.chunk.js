(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{35:function(e,t,a){e.exports=a(47)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),c=a.n(r),o=(a(40),a(4)),i=a(5),l=a(7),u=a(6),m=a(71),d=a(70),h=a(68),p=a(32),f=a(69),b=a(27),v=a.n(b),g=a(26),y=a(11),j=function(){function e(){Object(o.a)(this,e),this.baseUrl="http://localhost:5000"}return Object(i.a)(e,[{key:"getHistory",value:function(e){this.doRequest(this.baseUrl+"/chatbot/history",e)}},{key:"getWelcomeMessage",value:function(e,t){this.doRequest(this.baseUrl+"/chatbot/welcome",e,t)}},{key:"sendMessage",value:function(e,t,a){var n=this.baseUrl+"/chatbot/get?"+(e?"message="+e:"");this.doRequest(n,t,a)}},{key:"getData",value:function(e){this.doRequest(this.baseUrl+"/chatbot/data",e)}},{key:"doRequest",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=(new Date).getTime();fetch(e,{credentials:"include"}).then((function(e){return e.json()})).then((function(e){var s=(new Date).getTime();setTimeout((function(){t(e)}),a-(s-n))}))}}]),e}(),O=(a(41),new j),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"avatar"})}}]),a}(n.Component),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("li",{className:"message ".concat(this.props.appearance," appeared")},s.a.createElement(k,null),s.a.createElement("div",{className:"text_wrapper"},s.a.createElement("div",{className:"text"},this.props.message)))}}]),a}(n.Component),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).scrollToBottom=function(){var e=n.refs.scroll;e.scrollTop=e.scrollHeight},n.createBotMessages=n.createBotMessages.bind(Object(y.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"createBotMessages",value:function(){return this.props.messages.map((function(e,t){return s.a.createElement(C,{key:t,message:e.message,appearance:e.isbotmessage?"left":"right"})}))}},{key:"render",value:function(){return s.a.createElement("ul",{className:"messages",ref:"scroll"},this.createBotMessages())}}]),a}(n.Component),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"message_input_wrapper"},s.a.createElement("input",{id:"msg_input",className:"message_input",placeholder:"Type your message here...",value:this.props.message,onChange:this.props.onChange,onKeyPress:this.props._handleKeyPress}))}}]),a}(n.Component),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"send_message",onClick:this.props.handleClick},s.a.createElement("div",{className:"text"},"send"))}}]),a}(n.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e))._isMounted=!1,n.state={messages:[],current_message:""},n.handleClick=n.handleClick.bind(Object(y.a)(n)),n._handleKeyPress=n._handleKeyPress.bind(Object(y.a)(n)),n.onChange=n.onChange.bind(Object(y.a)(n)),n.addMessageBox=n.addMessageBox.bind(Object(y.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(){this.addMessageBox()}},{key:"_handleKeyPress",value:function(e){this.addMessageBox("Enter"===e.key)}},{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,O.getHistory((function(t){e._isMounted&&(e.setState({messages:t}),O.getWelcomeMessage((function(t){e._isMounted&&e.setState({messages:[].concat(Object(g.a)(e.state.messages),[t])})})))}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"onChange",value:function(e){this.setState({current_message:e.target.value})}},{key:"addMessageBox",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=this.state.messages,n=this.state.current_message;n&&t&&(a=[].concat(Object(g.a)(a),[{message:n}]),O.sendMessage(n,(function(t){e.setState({messages:[].concat(Object(g.a)(e.state.messages),[t])})})),n=""),this.setState({current_message:n,messages:a})}},{key:"render",value:function(){return s.a.createElement("div",{className:"chat_window"},s.a.createElement(E,{messages:this.state.messages}),s.a.createElement("div",{className:"bottom_wrapper clearfix"},s.a.createElement(_,{_handleKeyPress:this._handleKeyPress,onChange:this.onChange,message:this.state.current_message}),s.a.createElement(M,{handleClick:this.handleClick})))}}]),a}(n.Component),N=(a(42),new j),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("li",{className:"data_item appeared"},s.a.createElement("div",{className:"message"},s.a.createElement("div",{className:"text"},this.props.message)),s.a.createElement("div",{className:"response"},s.a.createElement("div",{className:"text"},this.props.response)))}}]),a}(n.Component),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).scrollToTop=function(){n.refs.scroll.scrollTop=0},n.createDataItems=n.createDataItems.bind(Object(y.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.scrollToTop()}},{key:"createDataItems",value:function(){return this.props.data.map((function(e,t){return s.a.createElement(T,{key:t,message:e.message,normalized_message:e.normalized_message,response:e.response})}))}},{key:"render",value:function(){return s.a.createElement("ul",{className:"data",ref:"scroll"},this.createDataItems())}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"filter_input_wrapper"},s.a.createElement("input",{className:"filter_input",placeholder:"Type here to filter...",value:this.props.filter,onChange:this.props.onChange}))}}]),a}(n.Component),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"refresh_button",onClick:this.props.handleClick},s.a.createElement("div",{className:"text"},"refresh data"))}}]),a}(n.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e))._isMounted=!0,n.state={data:[],filtered_data:[],current_filter:""},n.onFilterChange=n.onFilterChange.bind(Object(y.a)(n)),n.loadData=n.loadData.bind(Object(y.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.loadData()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"onFilterChange",value:function(e){var t=e.target.value,a=t.toLowerCase().split(" "),n=this.state.data.filter((function(e){return a.every((function(t){return e.message.toLowerCase().includes(t)||e.normalized_message.toLowerCase().includes(t)||e.response.toLowerCase().includes(t)}))}));this.setState({filtered_data:n,current_filter:t})}},{key:"loadData",value:function(){var e=this;N.getData((function(t){e._isMounted&&e.setState({data:t,filtered_data:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"cms_window"},s.a.createElement(D,{data:this.state.filtered_data}),s.a.createElement("div",{className:"bottom_wrapper clearfix"},s.a.createElement(x,{onChange:this.onFilterChange,filter:this.state.current_filter}),s.a.createElement(B,{handleClick:this.loadData})))}}]),a}(n.Component),U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null)}}]),a}(n.Component),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null)}}]),a}(n.Component),P=(a(43),Object(p.a)({palette:{primary:v.a,secondary:v.a},overrides:{MuiTab:{root:{"&:hover":{backgroundColor:"#ffda99",borderRadius:15}}}}})),W=[s.a.createElement(w,{label:"Chatbot"}),s.a.createElement(S,{label:"CMS"}),s.a.createElement(U,{label:"Statistics"}),s.a.createElement(K,{label:"Configuration"})],R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState({selectedTab:t})},n.state={user_name:"Guest",selectedTab:0},n}return Object(i.a)(a,[{key:"getTabs",value:function(){return W.map((function(e,t){return s.a.createElement(h.a,{key:t,label:e.props.label})}))}},{key:"getTabContent",value:function(){var e=this;return W.map((function(t,a){return s.a.createElement("div",{key:a,style:{display:a===e.state.selectedTab?"block":"none"}},t)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(f.a,{theme:P},s.a.createElement(m.a,{className:"appbar",position:"static",color:"default"},s.a.createElement(d.a,{indicatorColor:"primary",textColor:"secondary",variant:"fullWidth",value:this.state.selectedTab,onChange:this.handleChange},this.getTabs())),s.a.createElement("div",{className:"content"},this.getTabContent())))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.f36b767a.chunk.js.map