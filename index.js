import{a as p,S as m,i}from"./assets/vendor-GgwdjDaY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",h="56000534-6fce5c682f9afcb7cf08332eb";function g(n){const r={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"};return p.get(d,{params:r}).then(s=>s.data)}const c=document.querySelector(".gallery");document.querySelector(".loader");const y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const r=n.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span>${t}</span></p>
          <p class="info-item"><b>Views</b><span>${a}</span></p>
          <p class="info-item"><b>Comments</b><span>${u}</span></p>
          <p class="info-item"><b>Downloads</b><span>${f}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}const l=document.querySelector(".loader");function S(){l.classList.remove("hidden")}function P(){l.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",w);function w(n){n.preventDefault();const r=n.currentTarget,s=r.elements["search-text"].value.trim();if(s===""){i.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}L(),S(),g(s).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{console.error(o),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P(),r.reset()})}
//# sourceMappingURL=index.js.map
