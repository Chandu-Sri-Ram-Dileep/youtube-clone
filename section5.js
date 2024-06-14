let gtml = '';
const hiElements = document.querySelectorAll('.hi');

hiElements.forEach((hiElement) => {
    hiElement.addEventListener('click', () => {
        gtml = ''; 
        datas.forEach((data, index) => {
            if (data.channel.trim() === `|${hiElement.innerHTML.trim()} &#10004;`) {
                gtml += `
                    <div class="box" onclick="my(${index})">
                        <div class="video-play">
                            <img class="img1" data-thumbnail="${data.thumbnail}" src="${data.thumbnail}">
                            <p class="time" data-time="${data.time}">${data.time}</p>
                        </div>
                        <div class="log_desc">
                            <img class="log01" logo="${data.logo}" src="${data.logo}">
                            <div class="grid">
                                <p class="desc" data-desc="${data.information}">${data.information}</p>
                                <div class="channel-info" data-channel="${data.channel}">${data.channel}</div>
                                <div class="views">${data.views}</div>
                            </div>
                        </div>
                    </div>`;
            }
        });
        const setElement = document.querySelector('.set.js-set');
        if (setElement) {
            setElement.innerHTML = gtml;
        } else {
            console.error('Element with class "set js-set" not found');
        }
    });
});

function my(index) {
    localStorage.setItem('videoData', JSON.stringify(datas[index]));
    window.location.href = "section2.html";  
}
