const myDiv = document.getElementById('myDiv');

  
    const style = document.createElement('style');
    style.innerText = `
      .barrage {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #dae0e880;
        color: #333;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 9999;
      }
    `;
    document.head.appendChild(style);

    function showBarrage(event) {
      event.preventDefault();

      const barrage = document.createElement('span');
      barrage.innerText = '为了您更好的游览体验 本站禁用右键。复制请使用 Ctrl+C';
      barrage.classList.add('barrage');
      document.body.appendChild(barrage);

      
      const { clientWidth, clientHeight } = document.documentElement;
      barrage.style.left = `${clientWidth / 2}px`;
      barrage.style.top = `${clientHeight / 4}px`;

      setTimeout(() => {
        document.body.removeChild(barrage); 
      }, 5000);
    }

    document.body.addEventListener('contextmenu', showBarrage);
