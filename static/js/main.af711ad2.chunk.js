(this["webpackJsonpair-predictor"]=this["webpackJsonpair-predictor"]||[]).push([[0],{100:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(69),i=n.n(a),o=(n(99),n(8)),s=(n(100),n(70)),l=n(46),d=n(0),h=[],u=[],b=function(e){var t=e.city,n=Object(r.useState)([]),c=Object(o.a)(n,2),a=c[0],i=c[1],b=Object(r.useState)([]),x=Object(o.a)(b,2),j=x[0],m=x[1],p={labels:a,datasets:[{label:"History",data:j.slice(0,50),fill:!1,backgroundColor:"rgb(0, 255, 0)",pointBorderWidth:.1,borderWidth:5,borderColor:"rgba(0, 255, 0, 0.2)"},{label:"Predictions",data:j,fill:!1,pointBorderWidth:.1,backgroundColor:"rgb(152, 255, 152)",borderColor:"rgba(152, 255, 152, 0.2)"}]},f=function(e){return e.y_pred=+e.y_pred,e.y_pred_std=+e.y_pred_std,e.aqi=+e.aqi,e.errors=+e.errors,e};return Object(r.useEffect)((function(){u=[],h=[],function(e){Object(l.a)("https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/prediction-".concat(e,".csv"),f).then((function(e){e.forEach((function(e){return u.push(e[""])})),e.forEach((function(e){return h.push(e.aqi)}))}))}(t),function(e){Object(l.a)("https://raw.githubusercontent.com/PrzemyslawSarnacki/AirQualityPrediction/master/data/predictions/history-".concat(e,".csv"),f).then((function(e){e.forEach((function(e){return u.push(e[""])})),e.forEach((function(e){return h.push(e.y_pred)})),i(u),m(h)}))}(t)}),[t]),Object(d.jsx)("div",{children:Object(d.jsx)(s.a,{data:p,options:{elements:{point:{radius:0}},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},type:"line"})})},x=function(){return Object(d.jsx)("div",{className:"w-full container mx-auto",children:Object(d.jsxs)("div",{className:"w-full flex items-center justify-between",children:[Object(d.jsxs)("a",{className:"flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl",href:"#",children:["Air",Object(d.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500",children:"Predictor"})]}),Object(d.jsxs)("div",{className:"flex w-1/2 justify-end content-center",children:[Object(d.jsx)("a",{className:"inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out",href:"https://twitter.com/intent/tweet?url=#",children:Object(d.jsx)("svg",{className:"fill-current h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:Object(d.jsx)("path",{d:"M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"})})}),Object(d.jsx)("a",{className:"inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out",href:"https://www.facebook.com/sharer/sharer.php?u=#",children:Object(d.jsx)("svg",{className:"fill-current h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:Object(d.jsx)("path",{d:"M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"})})}),Object(d.jsx)("a",{className:"inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out",href:"https://www.github.com/PrzemyslawSarnacki/air-predictor",children:Object(d.jsx)("svg",{className:"fill-current h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})})})]})]})})},j=function(){return Object(d.jsxs)("div",{className:"flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden",children:[Object(d.jsxs)("h1",{className:"my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left",children:["Check",Object(d.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500",children:"Your City"}),"to protect yourself"]}),Object(d.jsx)("p",{className:"leading-normal text-base md:text-2xl mb-8 text-center md:text-left",children:"Check predicted air quality index for your city so you can keep your health on point."})]})},m=function(){return Object(d.jsxs)("div",{className:"w-full pt-16 pb-6 text-sm text-center md:text-left fade-in",children:[Object(d.jsx)("a",{className:"text-gray-500 no-underline hover:no-underline",href:"#",children:"\xa9 App 2020"}),"- Template by",Object(d.jsx)("a",{className:"text-gray-500 no-underline hover:no-underline",href:"https://www.tailwindtoolbox.com",children:"TailwindToolbox.com"})]})},p=function(e){var t=e.city,n=Object(r.useState)(0),c=Object(o.a)(n,2),a=c[0],i=c[1];Object(r.useEffect)((function(){s(t)}),[t]);var s=function(e){var t="https://api.openaq.org/v1/measurements?city=".concat(e,"&parameter=pm25");fetch(t).then((function(e){200===e.status?e.json().then((function(e){i(e.results[0].value)})):console.log("Looks like there was a problem. Status Code: "+e.status)})).catch((function(e){console.log("Fetch Error :-S",e)}))};return Object(d.jsxs)("form",{className:"bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 focus:ring transform transition hover:scale-105 duration-300 ease-in-out",children:[Object(d.jsx)("label",{className:"block text-blue-300 py-2 font-bold mb-2 text-center",children:"Data from within 1 hour:"}),Object(d.jsx)("p",{className:"leading-normal text-blue-300 md:text-2xl mb-8 text-center ",children:a}),Object(d.jsx)("p",{className:"my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center",children:a<50?Object(d.jsx)(d.Fragment,{children:"\ud83e\udd73"}):a>50&&a<100?Object(d.jsx)(d.Fragment,{children:"\ud83d\ude12"}):a>100&&a<200?Object(d.jsx)(d.Fragment,{children:"\ud83d\ude25"}):a>200?Object(d.jsx)(d.Fragment,{children:"\ud83d\ude30"}):void 0})]})},f=function(e){var t=e.children;return Object(d.jsxs)("form",{className:"bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4",children:[Object(d.jsx)("div",{className:"mb-4",children:Object(d.jsx)("label",{className:"block text-blue-300 py-2 font-bold mb-2",children:"Choose a city:"})}),Object(d.jsx)(d.Fragment,{children:t}),Object(d.jsx)("div",{className:"flex items-center justify-center pt-4 mt-4",children:Object(d.jsx)("button",{className:"bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",type:"button",children:"Refresh"})})]})},g=n(210),O=function(){var e=Object(r.useState)("Katowice"),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(d.jsx)("body",{className:"leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed",style:{backgroundImage:"url(/header.png)"},children:Object(d.jsxs)("div",{className:"h-full",children:[Object(d.jsx)(x,{}),Object(d.jsxs)("div",{className:"container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center",children:[Object(d.jsx)(j,{}),Object(d.jsxs)(f,{children:[Object(d.jsxs)("select",{className:"mb-5 shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out",onChange:function(e){return c(e.target.value)},children:[Object(d.jsx)("option",{children:"Katowice"}),Object(d.jsx)("option",{children:"Bia\u0142ystok"}),Object(d.jsx)("option",{children:"Warszawa"}),Object(d.jsx)("option",{children:"Pozna\u0144"}),Object(d.jsx)("option",{children:"Krak\xf3w"})]}),Object(d.jsx)(b,{city:function(e){return g(e).latinise().s.toLowerCase()}(n)})]}),Object(d.jsx)(p,{city:n})]}),Object(d.jsx)(m,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),w()},99:function(e,t,n){}},[[214,1,2]]]);
//# sourceMappingURL=main.af711ad2.chunk.js.map