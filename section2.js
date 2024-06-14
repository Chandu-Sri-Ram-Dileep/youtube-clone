let htmlobject='';
let you;
datas.forEach((data,index)=> {
    htmlobject+=`
    <div class="box" onclick="my(${index})">
    <div class="video-play">
        <img class="img1" data-thumbnail=${data.thumbnail} src="${data.thumbnail}">
        <p class="time" data-time=>${data.time}</p>
</div>
        <div class="log_desc">
        <img class="log01" logo=${data.logo} src="${data.logo}">
        <div class="grid">
        <p class="desc" data-desc=${data.information}>${data.information}</p>
    <div class="channel-info" data-channel= ${data.channel}>
     ${data.channel}
</div >
    <div class="views">${data.views}</div>
</div>
</div>
</div>
  `
 });
 function my(index){
    localStorage.setItem('videoData', JSON.stringify(datas[index]));
    window.location.href = "section2.html";  
 }
 console.log(htmlobject);
 document.querySelector('.js-set').innerHTML=htmlobject;