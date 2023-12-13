


  const style = document.createElement('style');
  style.innerText = `
    .barrage {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #ffffffe6;
      color: #333;
      padding: 10px 15px;
      border-radius: 5px;
      z-index: 9999;
      display: flex;
      align-items: center;
    }

    .barrage-icon {
      display: block;
      width: 20px;
      height: 20px;
      background-image: url('https://cdn3.codesign.qq.com/screens/previews/2023/10/24/jM93UEfMyMIRXfy8jBGwHATwiF0mBZ3ngnmn0qcd.png'); 
      background-size: cover;
      margin-right: 5px;
      margin-left: -5px;
      line-height: 20px;
    }
  `;
  document.head.appendChild(style);

  function showBarrage(event) {
    if (window.innerWidth < 768) {
      return;
    }

    event.preventDefault(); 

    const barrage = document.createElement('span');
    barrage.innerHTML = '<span class="barrage-icon"></span>为了您更好的游览体验，本站禁用右键。复制卡密请左键选中后 Ctrl+C 进行复制';
    barrage.classList.add('barrage');
    document.body.appendChild(barrage);

    const { clientWidth, clientHeight } = document.documentElement;
    barrage.style.left = `${clientWidth / 2}px`;
    barrage.style.top = `${clientHeight / 6}px`;

    setTimeout(() => {
      document.body.removeChild(barrage); 
    }, 5000);
  }

  function updateBarrageDisplay() {
    const isSmallScreen = window.innerWidth < 768;


    if (isSmallScreen) {
      document.body.removeEventListener('contextmenu', showBarrage);
    } else {
      document.body.addEventListener('contextmenu', showBarrage);
    }
  }
document.oncontextmenu = function (e) {
        return true;
    }

  updateBarrageDisplay();

  window.addEventListener('resize', updateBarrageDisplay);
