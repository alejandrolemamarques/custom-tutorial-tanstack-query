import{i as p,h as v,a as N,j as e,R as _}from"./index-CROjpMMh.js";import{Q as b,u as y}from"./useBaseQuery-yCOZ2zrK.js";import{D as w}from"./DescriptionBox-mZa1W4Jk.js";var I=class extends b{constructor(t,i){super(t,i)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t){super.setOptions({...t,behavior:p()})}getOptimisticResult(t){return t.behavior=p(),super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,i){var f,P;const{state:s}=t,a=super.createResult(t,i),{isFetching:o,isRefetching:r,isError:c,isRefetchError:d}=a,h=(P=(f=s.fetchMeta)==null?void 0:f.fetchMore)==null?void 0:P.direction,l=c&&h==="forward",g=o&&h==="forward",u=c&&h==="backward",m=o&&h==="backward";return{...a,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:N(i,s.data),hasPreviousPage:v(i,s.data),isFetchNextPageError:l,isFetchingNextPage:g,isFetchPreviousPageError:u,isFetchingPreviousPage:m,isRefetchError:d&&!l&&!u,isRefetching:r&&!g&&!m}}};function C(t,i){return y(t,I)}const x=45,j=10,F=async({pageParam:t=1})=>{console.log(`Fetching infinite data - pageParam: ${t}`),await new Promise(r=>setTimeout(r,750));const i=(t-1)*j,s=i+j,a=Array.from({length:x},(r,c)=>`Infinite Item ${c+1}`).slice(i,s),o=s<x?t+1:null;return{items:a,nextPage:o,totalItems:x}},R="_container_v8ch6_1",T="_descriptionColumn_v8ch6_23",M="_exampleColumn_v8ch6_33",E="_heading_v8ch6_49",L="_itemList_v8ch6_63",Q="_item_v8ch6_63",k="_loadMoreContainer_v8ch6_91",D="_button_v8ch6_107",O="_loadingText_v8ch6_153",q="_errorText_v8ch6_169",n={container:R,descriptionColumn:T,exampleColumn:M,heading:E,itemList:L,item:Q,loadMoreContainer:k,button:D,loadingText:O,errorText:q},K=()=>{const{data:t,error:i,fetchNextPage:s,hasNextPage:a,isFetching:o,isFetchingNextPage:r,status:c}=C({queryKey:["infiniteData"],queryFn:F,initialPageParam:1,getNextPageParam:d=>d.nextPage});return e.jsxs("div",{className:n.container,children:[e.jsx("div",{className:n.descriptionColumn,children:e.jsxs(w,{title:"Infinite Loading with useInfiniteQuery",children:[e.jsxs("p",{children:["This example uses ",e.jsx("code",{children:"useInfiniteQuery"}),' for loading data in chunks, suitable for "load more" or infinite scroll interfaces.']}),e.jsxs("ul",{children:[e.jsxs("li",{children:["The API function (",e.jsx("code",{children:"fetchInfiniteData"}),") receives a ",e.jsx("code",{children:"pageParam"})," and is expected to return the data items along with information about the ",e.jsx("em",{children:"next"})," page (",e.jsx("code",{children:"nextPage"})," in this case)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"initialPageParam: 1"})," tells React Query what parameter to use for the very first fetch."]}),e.jsxs("li",{children:[e.jsx("code",{children:"getNextPageParam"})," is a function that receives the ",e.jsx("em",{children:"last fetched page"})," and determines the parameter for the ",e.jsx("em",{children:"next"})," page request. Here, it simply returns the"," ",e.jsx("code",{children:"nextPage"})," value from our API response. It returns ",e.jsx("code",{children:"undefined"})," or"," ",e.jsx("code",{children:"null"})," when there are no more pages."]}),e.jsxs("li",{children:["The fetched data is accumulated in"," ",e.jsx("code",{children:"data.pages"}),", an array where each element corresponds to the data returned for one page fetch. We need to map over this array to render all items."]}),e.jsxs("li",{children:[e.jsx("code",{children:"fetchNextPage()"})," is called to trigger loading the next chunk of data."]}),e.jsxs("li",{children:[e.jsx("code",{children:"hasNextPage"})," is a boolean derived from the return value of ",e.jsx("code",{children:"getNextPageParam"}),", indicating if more data can be loaded."]}),e.jsxs("li",{children:[e.jsx("code",{children:"isFetchingNextPage"})," is true specifically when the ",e.jsx("em",{children:"next"})," page is being fetched via"," ",e.jsx("code",{children:"fetchNextPage"}),"."]})]})]})}),e.jsxs("div",{className:n.exampleColumn,children:[e.jsx("h1",{className:n.heading,children:"Infinite Loading Example"}),c==="pending"?e.jsx("p",{className:n.loadingText,children:"Loading initial data..."}):c==="error"?e.jsxs("p",{className:n.errorText,children:["Error:"," ",i instanceof Error?i.message:"Unknown error"]}):e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:n.itemList,children:t&&t.pages.map((d,h)=>e.jsxs(_.Fragment,{children:[" ",d.items.map(l=>e.jsx("li",{className:n.item,children:l},l))]},h))}),e.jsx("div",{className:n.loadMoreContainer,children:e.jsx("button",{onClick:()=>s(),disabled:!a||r,className:n.button,children:r?"Loading more...":a?"Load More":"Nothing more to load"})}),o&&!r&&e.jsx("div",{className:n.loadingText,children:"Fetching in background..."})]})]})]})};export{K as InfiniteLoadingExample};
