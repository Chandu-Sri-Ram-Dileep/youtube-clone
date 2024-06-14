let html2 = '';
        datas.forEach((data,index) => {
            html2 += `
                <div class="box2">
                    <div class="mini">
                        <img class="img2" src="${data.thumbnail}">
                        <div class="time2">${data.time}</div>
                    </div>
                    <div class="grid2">
                        <p class="desc3">${data.information}</p>
                        <div class="channel-info3">${data.channel}</div>
                        <div class="views2">${data.views}</div>
                    </div>
                </div>
            `;
        });
        document.querySelector('.arr').innerHTML = html2;