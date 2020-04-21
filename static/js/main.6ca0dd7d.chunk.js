(this.webpackJsonpunify=this.webpackJsonpunify||[]).push([[0],{39:function(e,t){},43:function(e,t,a){e.exports=a(72)},48:function(e,t,a){},49:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(48),a(7)),i=a(8),u=a(11),s=a(10),d=(a(49),a(14)),p=a(13),m=a(18),h=a(9),f=a(16),E=a.n(f),v="http://localhost:8000/products",y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={productName:"",price:"",type:"",refresh:!1},n.handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.addProduct(n.state),n.setState({refresh:!0})},n}return Object(i.a)(a,[{key:"render",value:function(){return this.state.refresh?r.a.createElement(p.a,{to:"/products"}):r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Add Products"),r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"row"},r.a.createElement("input",{placeholder:"Product Name",id:"productName",type:"text",name:"productName",value:this.state.productName,onChange:this.handleChange})),r.a.createElement("div",{className:"row"},r.a.createElement("input",{placeholder:"Price",id:"price",type:"text",name:"price",value:this.state.price,onChange:this.handleChange})),r.a.createElement("div",{className:"row"},r.a.createElement("input",{placeholder:"Type",id:"type",type:"text",name:"type",value:this.state.type,onChange:this.handleChange})),r.a.createElement("div",{className:"row displayNone"},r.a.createElement("input",{type:"text",name:"id",value:this.state.id})),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn right-align"},"Add"))))}}]),a}(n.Component),b=Object(h.b)(null,(function(e){return{addProduct:function(t){return e(function(e){return function(t){return E.a.post(v,{productName:e.productName,price:e.price,type:e.type}).then((function(e){var a=e.data;t({type:"ADD_PRODUCT",payload:{productName:a.productName,price:a.price,type:a.type,id:a.id}})})).catch((function(e){return t({error:e})}))}}(t))}}}))(y),N=a(12),g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).handleEdit=function(e){n.props.updateProduct(n.state)},n.handleSubmit=function(e){e.preventDefault(),n.setState({refresh:!0})};var r=n.props.location.state.product;return n.state={productName:void 0!==r.productName?r.productName:"",price:void 0!==r.price?r.price:"",type:void 0!==r.type?r.type:"",id:void 0!==r.id?r.id:"",refresh:!1},n.handleChangeName=n.handleChangeName.bind(Object(N.a)(n)),n.handleChangePrice=n.handleChangePrice.bind(Object(N.a)(n)),n.handleChangeType=n.handleChangeType.bind(Object(N.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"handleChangeName",value:function(e){e.preventDefault(),this.setState({productName:e.target.value})}},{key:"handleChangePrice",value:function(e){e.preventDefault(),this.setState({price:e.target.value})}},{key:"handleChangeType",value:function(e){e.preventDefault(),this.setState({type:e.target.value})}},{key:"render",value:function(){var e=this.props.location.state.product;return this.state.refresh?r.a.createElement(p.a,{to:"/products"}):void 0!==e?r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"Edit Products"),r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"row"},r.a.createElement("input",{placeholder:"Product Name",id:"productName",type:"text",name:"productName",value:this.state.productName,onChange:this.handleChangeName})),r.a.createElement("div",{className:"row"},r.a.createElement("input",{placeholder:"Price",id:"price",type:"text",name:"price",value:this.state.price,onChange:this.handleChangePrice})),r.a.createElement("div",{className:"row"},r.a.createElement("input",{placeholder:"Type",id:"type",type:"text",name:"type",value:this.state.type,onChange:this.handleChangeType})),r.a.createElement("div",Object(m.a)({className:"row"},"className","displayNone"),r.a.createElement("input",{disabled:!0,placeholder:"ID",id:"ID",type:"text",name:"type",value:this.state.id})),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn right-align",onClick:this.handleEdit},"Add")))):r.a.createElement("h3",null,"No Item")}}]),a}(n.Component),C=Object(h.b)(null,(function(e){return{updateProduct:function(t){return e(function(e){return function(t){return E.a.patch(v+"/"+e.id,{productName:e.productName,price:e.price,type:e.type}).then((function(e){var a=e.data;t({type:"UPDATE_PRODUCT",payload:{id:a.id,productName:a.productName,price:a.price,type:a.type}})})).catch((function(e){throw e}))}}(t))}}}))(g),O=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).editClick=function(e){n.props.history.push({pathname:"/products/".concat(e.id,"/edit"),state:{product:e}})},n.searchingFor=function(e){return function(t){return t.productName.toLowerCase().includes(e.toLowerCase())||!e}},n.state={product:"",isEdit:!1,term:"",showSearch:!1},n.searchHandler=n.searchHandler.bind(Object(N.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:8000/products").then((function(e){return e.data})).then((function(t){e.setState({products:t})}),(function(t){e.setState({error:t})}))}},{key:"searchHandler",value:function(e){this.setState({term:e.target.value,showSearch:!0})}},{key:"render",value:function(){var e=this;console.log(this.props.products);var t=this.props.products;return t.length>0?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"searchBox"},r.a.createElement("form",null,r.a.createElement("input",{className:"searchBox",placeholder:"Search",type:"text",onChange:this.searchHandler}))),r.a.createElement("table",{className:"striped tableClass"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",{className:"stripped"},t.filter(this.searchingFor(this.state.term)).map((function(a){return r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,a.productName),r.a.createElement("td",null,a.price),r.a.createElement("td",null,a.type),r.a.createElement("td",null,r.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:function(){return e.editClick(a)}},r.a.createElement("i",{className:"material-icons"},"create"))),r.a.createElement("td",null,r.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:function(){return e.props.deleteProduct(a.id,t)}},r.a.createElement("i",{className:"material-icons"},"delete"))))})))),r.a.createElement("div",null,this.state.isEdit?r.a.createElement(C,{product:this.state.product}):null)):r.a.createElement("div",null,"Kindly, refresh the page")}}]),a}(n.Component),w=Object(h.b)((function(e){return{products:e.products}}),(function(e){return{deleteProduct:function(t,a){return e(function(e,t){return function(a){return E.a.delete(v+"/"+e).then((function(n){var r=t.filter((function(t){return t.id!==e}));a({type:"DELETE_PRODUCT",payload:r})})).catch((function(e){return a({error:e})}))}}(t,a))}}}))(O),j=function(e){return r.a.createElement("nav",{className:"navbar-fixed teal lighten-2"},r.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{id:"nav-mobile",className:"left hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/products"},"Display Products")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/products/new",className:"textClass"},"Add Product"))))},P=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:w}),r.a.createElement(p.b,{exact:!0,path:"/products",component:w}),r.a.createElement(p.b,{exact:!0,path:"/products/new",component:b}),r.a.createElement(p.b,{exact:!0,path:"/products/:id/edit",component:C}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(15),S=a(39),T=a.n(S),k=a(40),x=a(27),A={products:[]};var U=Object(D.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return console.log(t),t.products;case"ADD_PRODUCT":return Object(x.a)(e.concat(t.payload));case"DELETE_PRODUCT":return Object(x.a)(t.payload);case"UPDATE_PRODUCT":return Object(k.a)({},e.map((function(e){if(e.id===t.payload.id)return{productName:t.payload.productName,price:t.payload.price,type:t.payload.type}})));default:return e}},product:T.a}),R=a(41),_=a(42),B=a.n(_),H=Object(D.d)(U,Object(D.a)(R.a,B.a));H.dispatch((function(e){return E.a.get(v).then((function(t){e({type:"GET_PRODUCTS",products:t.data})})).catch((function(e){throw e}))})),l.a.render(r.a.createElement(h.a,{store:H},r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.6ca0dd7d.chunk.js.map