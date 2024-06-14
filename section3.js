 function function1(data) {
          let html;
          html = `
          <iframe height="500px" width="900px" src="${data.video}" 
                  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen></iframe>
          <p class="desc2">${data.information}</p>
          <div class="flex3">
              <img class="log01" src="${data.logo}">
              <div class="channel-info2">${data.channel}</div>
              <div class="subscribed">
                  <button class="subscribe" onclick="myfunction3()">subscribe</button>
              </div>
              <button class="like" onclick="myFunction1()">
                  <i class="fa fa-thumbs-up"></i>
                  <span class="btn">like</span>
              </button>
              <button class="dislike" onclick="myFunction2()">
                  <i class="fa fa-thumbs-down"></i>
                  <span class="btn">dislike</span>
              </button>
              <button class="share">
                  <i class="fa fa-share-square"></i><span class="btn">share</span>
              </button>
              <button class="download">
                  <i class="fa fa-download"></i><span class="btn">download</span>
              </button>
          </div>`;
      
          document.querySelector('.image').innerHTML = html;
      }
function myFunction1(){
  const x=document.querySelector('.like')
  if( x.style.color!='black'){
  x.style.color='black';
  x.style.backgroundColor='white';
  const b=document.querySelector('.dislike');
  b.style.color='';
  b.style.backgroundColor='';
  }
  else{
    x.style.color='white';
    x.style.backgroundColor='';
  }
} 
function myFunction2(){
  const x=document.querySelector('.dislike')
  if( x.style.color!='black'){
  x.style.color='black';
  x.style.backgroundColor='white';
  const b=document.querySelector('.like');
  b.style.color='';
  b.style.backgroundColor='';
  }
  else{
    x.style.color='white';
    x.style.backgroundColor=''
  }
} 
function myfunction3(){
  const c=document.querySelector('.subscribe');
  if(c.textContent==='subscribe')
{
  c.textContent='subscribed'
  c.style.color='white';
  c.style.backgroundColor='red';
}
else{
  c.textContent='subscribe'
  c.style.color='';
  c.style.backgroundColor='';

}
}
document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('videoData'));
  if (data) {
      function1(data);
  }
});