(this.webpackJsonpleaflet_test=this.webpackJsonpleaflet_test||[]).push([[0],{39:function(e,t,a){e.exports=a(66)},44:function(e,t,a){},45:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),l=(a(44),a(12)),o=a(13),i=a(15),m=a(14),u=(a(45),a(25)),p=a(27),d=a(24),h=a(36),g=a.n(h),f=a(2),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={val:e.props.default},e.onChange=function(t){e.setState({val:t.target.value});var a=parseInt(t.target.value)/100;e.props.handler(a)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,this.props.name+"  "+this.state.val+"%"),r.a.createElement("input",{type:"range",min:this.props.min,max:this.props.max,className:"opacitySlider",defaultValue:this.props.default,onChange:this.onChange}))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).refContainer=function(e){n.container=e,e&&f.DomEvent.disableScrollPropagation(e)},n.changeOpacity=function(e){n.props.changeOpacity(e)},n.container=null,n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu",ref:this.refContainer},r.a.createElement("div",{className:"productHeader"},r.a.createElement("h1",null,this.props.sensor.name),r.a.createElement("h1",null,"PPI(dBZ) 0.5\xb0"),r.a.createElement("h1",null,this.props.sensor.images[this.props.imgID].date)),r.a.createElement("div",{className:"scaleWrapper"},r.a.createElement("img",{src:"./test_scale.svg",className:"scale"})),r.a.createElement("div",{className:"metadata"},r.a.createElement("div",{className:"left-metadata"},r.a.createElement("p",{className:"left-metadata-entry"},"Skan:"),r.a.createElement("p",{className:"left-metadata-entry"},"Zasi\u0119g:"),r.a.createElement("p",{className:"left-metadata-entry"},"Rozdzielczo\u015b\u0107:")),r.a.createElement("div",{className:"right-metadata"},r.a.createElement("p",{className:"right-metadata-entry"},"doppler"),r.a.createElement("p",{className:"right-metadata-entry"},"125km"),r.a.createElement("p",{className:"right-metadata-entry"},"0.5km/px"))),r.a.createElement("div",{className:"settings"},r.a.createElement(E,{name:"Przezroczysto\u015b\u0107:",min:"0",max:"100",default:"60",handler:this.changeOpacity}),r.a.createElement("div",{className:"toggleWrapper"},r.a.createElement("div",{className:"ipolSwitch"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{className:"slider round"}))),r.a.createElement("div",{className:"ipolLegend"},r.a.createElement("p",null,"Interpolacja"))),r.a.createElement("p",null,"Pr\u0119dko\u015b\u0107 animacji:"),r.a.createElement("input",{type:"range",min:"0",max:"100",defaultValue:"60",className:"opacitySlider"})))}}]),a}(n.Component),y=a(26),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.props.list.map((function(t){return r.a.createElement(y.a,{position:t.location,onclick:e.props.changeSensor.bind(e,t)})}))}}]),a}(n.Component),O=a(38),I=a.n(O),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={radars:[{name:"null",location:[0,0],id:"null",images:[{path:"",date:""}],boundingBox:[[0,0],[0,0]]}],imageOpacity:.6,currentSensorId:"null",currentImageID:0},e.changeSensor=function(t){console.log(t.id),e.setState({currentSensorId:"null",currentImageID:0}),e.setState({currentSensorId:t.id,currentImageID:6})},e.changeOpacity=function(t){console.log(t),e.setState({imageOpacity:t})},e.getCurrentSensor=function(){return e.state.radars.filter((function(t){return t.id===e.state.currentSensorId}))[0]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;I.a.get("./radars.json").then((function(t){e.setState({radars:t.data,currentSensorId:"LEG",currentImageID:6})}))}},{key:"render",value:function(){return r.a.createElement(u.a,{center:[52,19],zoom:8,zoomControl:!1},r.a.createElement(p.a,{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",detectRetina:!0,minZoom:2,maxZoom:18,maxNativeZoom:17}),r.a.createElement(d.a,{url:this.getCurrentSensor().images[this.state.currentImageID].path,bounds:this.getCurrentSensor().boundingBox,opacity:this.state.imageOpacity,zIndex:899}),r.a.createElement(g.a,{position:"topright",className:"control"},r.a.createElement(v,{sensor:this.getCurrentSensor(),imgID:this.state.currentImageID,changeOpacity:this.changeOpacity})),r.a.createElement(b,{list:this.state.radars,changeSensor:this.changeSensor}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.3f506a5f.chunk.js.map