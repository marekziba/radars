(this.webpackJsonpleaflet_test=this.webpackJsonpleaflet_test||[]).push([[0],{39:function(e,t,a){e.exports=a(67)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),c=(a(44),a(12)),i=a(13),o=a(15),m=a(14),u=(a(45),a(46),a(26)),p=a(28),d=a(25),h=a(23),g=a.n(h),f=a(2),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={val:e.props.default},e.onChange=function(t){e.setState({val:t.target.value});var a=parseInt(t.target.value)/100;e.props.handler(a)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,this.props.name+"  "+this.state.val+"%"),r.a.createElement("input",{type:"range",min:this.props.min,max:this.props.max,className:"opacitySlider",defaultValue:this.props.default,onChange:this.onChange}))}}]),a}(n.Component),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).refContainer=function(e){n.container=e,e&&f.DomEvent.disableScrollPropagation(e)},n.changeOpacity=function(e){n.props.changeOpacity(e)},n.container=null,n}return Object(i.a)(a,[{key:"render",value:function(){return"desktop"===this.props.type?r.a.createElement("div",{className:"menu",ref:this.refContainer},r.a.createElement("div",{className:"productHeader"},r.a.createElement("h1",null,this.props.sensor.name),r.a.createElement("h1",null,"PPI(dBZ) 0.5\xb0"),r.a.createElement("h1",null,this.props.sensor.images[this.props.imgID].date)),r.a.createElement("div",{className:"productHeaderMobile"},r.a.createElement("h1",null,this.props.sensor.name),r.a.createElement("h1",null,"PPI(dBZ) 0.5\xb0 "+this.props.sensor.images[this.props.imgID].date)),r.a.createElement("div",{className:"animationToolkit"},r.a.createElement("button",{id:"animBtn",className:"animationButton play",onClick:this.props.animate})),r.a.createElement("div",{className:"scaleWrapper"},r.a.createElement("img",{src:"./test_scale.svg",className:"scale"})),r.a.createElement("div",{className:"metadata"},r.a.createElement("div",{className:"left-metadata"},r.a.createElement("p",{className:"left-metadata-entry"},"Skan:"),r.a.createElement("p",{className:"left-metadata-entry"},"Zasi\u0119g:"),r.a.createElement("p",{className:"left-metadata-entry"},"Rozdzielczo\u015b\u0107:")),r.a.createElement("div",{className:"right-metadata"},r.a.createElement("p",{className:"right-metadata-entry"},"doppler"),r.a.createElement("p",{className:"right-metadata-entry"},"125km"),r.a.createElement("p",{className:"right-metadata-entry"},"0.5km/px"))),r.a.createElement("div",{className:"settings"},r.a.createElement(v,{name:"Przezroczysto\u015b\u0107:",min:"0",max:"100",default:"60",handler:this.changeOpacity}),r.a.createElement("div",{className:"toggleWrapper"},r.a.createElement("div",{className:"ipolSwitch"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{className:"slider round"}))),r.a.createElement("div",{className:"ipolLegend"},r.a.createElement("p",null,"Interpolacja"))),r.a.createElement("p",null,"Pr\u0119dko\u015b\u0107 animacji:"),r.a.createElement("input",{type:"range",min:"0",max:"100",defaultValue:"60",className:"opacitySlider"}))):(console.log("dupa xd"),r.a.createElement("div",{className:"mobileMenu"},r.a.createElement("div",{className:"productHeader"},r.a.createElement("h1",null,this.props.sensor.name+" PPI(dBZ) 0.5\xb0"),r.a.createElement("h1",null,this.props.sensor.images[this.props.imgID].date))))}}]),a}(n.Component),I=a(27),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.list.map((function(t){return r.a.createElement(I.a,{position:t.location,onclick:e.props.changeSensor.bind(e,t)})}))}}]),a}(n.Component),N=a(38),S=a.n(N),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={radars:null,imageOpacity:.6,currentSensorId:"null",currentImageID:0,interval:null},e.function=function(){},e.changeSensor=function(t){console.log(t.id);var a=e.state.currentImageID;e.setState({currentSensorId:"null",currentImageID:0}),e.setState({currentSensorId:t.id,currentImageID:a})},e.changeOpacity=function(t){console.log(t),e.setState({imageOpacity:t})},e.getSensorByID=function(t){return e.state.radars.filter((function(e){return e.id===t}))[0]},e.getCurrentSensor=function(){return e.state.radars.filter((function(t){return t.id===e.state.currentSensorId}))[0]},e.incrementImage=function(){e.setState({currentImageID:(e.state.currentImageID+1)%12})},e.animation=function(){e.state.interval?(console.log("animation off"),document.getElementById("animBtn").className="animationButton play",e.setState({interval:clearInterval(e.state.interval)})):(console.log("animation on"),document.getElementById("animBtn").className="animationButton pause",e.setState({interval:setInterval(e.incrementImage,250)}))},e.changeImage=function(t){console.log(t.target.value),e.state.interval&&e.setState({interval:clearInterval(e.state.interval)}),e.setState({currentImageID:parseInt(t.target.value)-1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("./radars.json").then((function(t){console.log(t.data),e.setState({radars:t.data,currentSensorId:"LEG",imageOpacity:.6,currentImageID:t.data.filter((function(e){return"LEG"===e.id}))[0].images.length-1,interval:null})}))}},{key:"render",value:function(){return this.state.radars?r.a.createElement(u.a,{center:[52,19],zoom:8,zoomControl:!1,id:"map"},r.a.createElement(p.a,{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",minZoom:2,maxZoom:18}),r.a.createElement(d.a,{url:this.getCurrentSensor().images[this.state.currentImageID].path,bounds:this.getCurrentSensor().boundingBox,opacity:this.state.imageOpacity}),r.a.createElement(g.a,{position:"topright",className:"desktopControl"},r.a.createElement(E,{sensor:this.getCurrentSensor(),imgID:this.state.currentImageID,changeOpacity:this.changeOpacity,animate:this.animation,type:"desktop"})),r.a.createElement(g.a,{position:"bottomleft",className:"animationControl"},r.a.createElement("input",{type:"range",id:"sliderange",className:"animationSlider",min:1,max:12,value:this.state.currentImageID+1,onInput:this.changeImage})),r.a.createElement(y,{list:this.state.radars,changeSensor:this.changeSensor})):null}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f77a5005.chunk.js.map