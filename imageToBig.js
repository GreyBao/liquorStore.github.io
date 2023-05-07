// 選取所有需要啟用此功能的圖片
const images = document.querySelectorAll('.imageSele');

// 將事件監聽器加入
images.forEach(image => {
  image.addEventListener('mouseenter', enterHandler);
  image.addEventListener('mousemove', moveHandler);
  image.addEventListener('mouseleave', leaveHandler);
});

// 事件處理函式
function enterHandler(e) {
  e.target.setAttribute('zoomed', 1);
}

function moveHandler(e) {
  let rect = e.target.getBoundingClientRect();
  let x = e.offsetX / rect.width;
  let y = e.offsetY / rect.height;

  e.target.style.setProperty('--x', x);
  e.target.style.setProperty('--y', y);
}

function leaveHandler(e) {
  e.target.removeAttribute('zoomed');
}


    // //     //1
    //     document.querySelector('.image1').addEventListener('mouseenter',enterHandler1);
    //     document.querySelector('.image1').addEventListener('mousemove',moveHandler1);
    //     document.querySelector('.image1').addEventListener('mouseleave',leaveHandler1);
    //     function enterHandler1(e) {
    //     e.target.setAttribute('zoomed1',1);
    //    }
    //    function moveHandler1(e) {
    //     let rect1 = e.target.getBoundingClientRect();
    //     let x1 = e.offsetX / rect1.width;
    //     let y1 = e.offsetY / rect1.height;

    //     e.target.style.setProperty('--x',x1);
    //     e.target.style.setProperty('--y',y1);
        
    // }
    // function leaveHandler1(e) {
    //     e.target.removeAttribute('zoomed1');
    // } 

