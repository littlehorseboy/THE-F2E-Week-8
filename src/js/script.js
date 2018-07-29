// 擴充 removeClassName
HTMLDivElement.prototype.removeClassName = function (className) {
  if (this.className.indexOf(className) !== -1) {
    if (this.className.indexOf(` ${className}`) !== -1) {
      this.className = this.className.replace(` ${className}`, '');
    } else {
      this.className = this.className.replace(className, '');
    }
  }

  if (this.getAttribute('class') === '') {
    this.removeAttribute('class');
  }
};

// 重整後回到頂部
window.addEventListener('load', () => {
  setTimeout(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
      // location.hash = (location.hash) ? location.hash : '';
    }
  }, 100);
});

// 第一頁開始
const opening = () => {
  const star = document.querySelector('.star');
  const circle = document.querySelector('.circle');
  const square = document.querySelector('.square');

  TweenLite.to(star, 5, { rotation: '+=360', ease: Power2.easeOut });
  TweenLite.to(circle, 5, { rotation: '+=360', ease: Power2.easeOut });
  TweenLite.to(square, 5, { rotation: '-=360', ease: Power2.easeOut });

  TweenLite.to(circle, 2.5, { css: { scale: 1.1 } });
  TweenLite.to(circle, 2.5, { css: { scale: 1 }, delay: 2.5 });

  TweenLite.to(square, 1.5, { css: { scale: 7 }, ease: Power2.easeOut, delay: 5 - 0.2 });
  TweenLite.to(circle, 1.5, { css: { scale: 7 }, ease: Power2.easeOut, delay: 5 });
  TweenLite.to(star, 0.6, { css: { scale: 7 }, ease: Power2.easeOut, delay: 5 + 0.2,
    onComplete: () => {
      const opening = document.querySelector('.opening');
      if (opening) {
        opening.remove();
        screenQ1Start();
      }
    },
  });
};

opening();

const ans = [];

const screenQ1Start = () => {
  const screenQ1 = document.querySelector('.screenQ1');
  screenQ1.style.backgroundColor = '#1469ff';

  const screenQ1Text = screenQ1.querySelector('.text-block');
  screenQ1Text.style.opacity = 0;

  // 在 screenQ1Text css 的 transition 1.5s 之後
  // setTimeout(() => {
  //   const qSection = screenQ1.querySelector('.q-section');
  //   qSection.style.opacity = 1;
  // }, 1500); 

  const qSection = screenQ1.querySelector('.q-section');
  TweenLite.to(qSection, 1.5, { css: { opacity: 1 }, delay: 1.5 });

  const square = screenQ1.querySelector('.animate-section__square'); // top: 100
  const triangle = screenQ1.querySelector('.animate-section__triangle'); // top: 300
  const circle = screenQ1.querySelector('.animate-section__circle'); // bottom: -100

  const animateSection = screenQ1.querySelector('.animate-section');
  TweenLite.to(animateSection, 1, { css: { left: '60%' }, delay: 1 });

  TweenLite.to(square, 2, { css: { top: '100px' }, ease: Power2.easeOut, delay: 1 + 1 });
  TweenLite.to(triangle, 2 + 0.2, { css: { top: '300px' }, ease: Power2.easeOut, delay: 1 + 1 });
  TweenLite.to(circle, 2, { css: { bottom: '-100px' }, ease: Power2.easeOut, delay: 1 + 1 });

  TweenLite.to(square, 4, { rotation: '+=360', delay: 1 + 1 + 2 });
  TweenLite.to(triangle, 4, { rotation: '-=360', delay: 1 + 1 + 2 });
  TweenLite.to(circle, 4, { css: { x: '+=20', y: '+=30' }, ease: Power2.easeOut, delay: 1 + 1 + 2 });


  const options = screenQ1.querySelectorAll('.q-section__options > li[data-value]');

  options.forEach(function (li) {
    li.addEventListener('click', () => {
      const value = li.getAttribute('data-value');
      ans.push(value);
      
      square.remove();
      triangle.remove();
      circle.remove();

      TweenLite.to(animateSection, 0.5, { css: { left: '0%' },
        onComplete: () => {
          screenQ1.remove();
          screenQ2Start();
        },
      });
    });
  });
};

const screenQ2Start = () => {
  const screenQ2 = document.querySelector('.screenQ2');
  const qSection = screenQ2.querySelector('.q-section');
  TweenLite.to(qSection, 1.5, { css: { opacity: 1 }, delay: 1.5 });

  const square = screenQ2.querySelector('.animate-section__square');
  const triangle = screenQ2.querySelector('.animate-section__triangle');
  const circle = screenQ2.querySelector('.animate-section__circle');

  const animateSection = screenQ2.querySelector('.animate-section');
  TweenLite.to(animateSection, 1, { css: { right: '60%' }, delay: 0.5 });

  TweenLite.to(square, 2, { css: { bottom: '200px' }, ease: Power3.easeOut, delay: 1 + 0.5 });
  TweenLite.to(triangle, 2, { css: { top: '-50px' }, ease: Power2.easeOut, delay: 1 + 0.5 });
  TweenLite.to(circle, 2, { css: { bottom: '200px' }, ease: Power2.easeOut, delay: 1 + 0.5 });

  TweenLite.to(square, 4, { rotation: '+=360', ease: Power3.easeOut, delay: 2 + 1 + 0.5 });
  TweenLite.to(triangle, 4, { rotation: '-=360', ease: Power2.easeOut, delay: 2 + 1 + 0.5 });
  TweenLite.to(circle, 4, { css: { x: 20, y: 30 }, ease: Power2.easeOut, delay: 2 + 1 + 0.5 });

  const options = screenQ2.querySelectorAll('.q-section__options > li[data-value]');

  options.forEach(function (li) {
    li.addEventListener('click', () => {
      const value = li.getAttribute('data-value');
      ans.push(value);
      
      square.remove();
      triangle.remove();
      circle.remove();

      TweenLite.to(animateSection, 0.5, { css: { right: '0%' },
        onComplete: () => {
          screenQ2.remove();
          screenQ3Start();
        },
      });
    });
  });
};

const screenQ3Start = () => {
  const screenQ3 = document.querySelector('.screenQ3');
  const qSection = screenQ3.querySelector('.q-section');
  TweenLite.to(qSection, 1.5, { css: { opacity: 1 }, delay: 1.5 });

  const square = screenQ3.querySelector('.animate-section__square');
  const triangle = screenQ3.querySelector('.animate-section__triangle');
  const circle = screenQ3.querySelector('.animate-section__circle');

  const animateSection = screenQ3.querySelector('.animate-section');
  TweenLite.to(animateSection, 1, { css: { left: '60%' }, delay: 0.5 });

  TweenLite.to(square, 2, { css: { top: '100px' }, ease: Power2.easeOut, delay: 1 + 0.5 });
  TweenLite.to(triangle, 2, { css: { bottom: '200px' }, ease: Power2.easeOut, delay: 1 + 0.5 });
  TweenLite.to(circle, 2, { css: { top: '-30px' }, ease: Power2.easeOut, delay: 1 + 0.5 });

  TweenLite.to(square, 4, { rotation: '-=60', delay: 2 + 1 + 0.5 });
  TweenLite.to(triangle, 4, { rotation: '-=360', delay: 2 + 1 + 0.5 });
  TweenLite.to(circle, 4, { css: { x: '+=20', y: '+=30' }, ease: Power2.easeOut, delay: 2 + 1 + 0.5 });


  const options = screenQ3.querySelectorAll('.q-section__options > li[data-value]');

  options.forEach(function (li) {
    li.addEventListener('click', () => {
      const value = li.getAttribute('data-value');
      ans.push(value);
      
      square.remove();
      triangle.remove();
      circle.remove();

      TweenLite.to(animateSection, 0.5, { css: { left: '0%' },
        onComplete: () => {
          screenQ3.remove();
          screenCalculating();
        },
      });
    });
  });
};

const screenCalculating = () => {
  const controller = new ScrollMagic.Controller();

  const getRandom = (lower, upper) => Math.random() * (upper - lower) + lower;

  const calculating = document.querySelector('.calculating');

  document.body.style.overflow = 'auto';

  // replace class hidden
  if (calculating.className.indexOf('hidden') !== -1) {
    if (calculating.className.indexOf(' hidden') !== -1) {
      calculating.className = calculating.className.replace(' hidden', '');
    } else {
      calculating.className = calculating.className.replace('hidden', '');
    }
  }

  // 產生無數個圓形
  const total = 30;
  const colors = ['#000', '#fff', '#0027c8'];

  for (let i = 0; i < total; i += 1) {
    const size = Math.floor(Math.random() * 200 + 100);
    const color = colors[i % 3];

    const div = document.createElement('div');
    div.className = `small-circle small-circle${i}`;
    div.style.backgroundColor = color;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    calculating.appendChild(div);
  }

  // 綁定無數個圓形的視差滾動
  for (let i = 0; i < total; i += 1) {
    const topP = getRandom(300, 500);
    const left = getRandom(500, 3000);
    const smallCircle = document.querySelector(`.small-circle${i}`);

    new ScrollMagic.Scene({ triggerElement: `.trigger${i % 4 + 1}`, duration: getRandom(500, 2500) })
      .setTween(TweenLite.to(smallCircle, 10, { css: { top: `-${topP}px`, left: `${left}px` } }))
      .addTo(controller);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY >= document.body.clientHeight - window.innerHeight) {
      calculating.remove();

      const screenResult = document.querySelector('.screenResult');
      screenResult.removeClassName('hidden');

      TweenLite.to(screenResult, 1, { css: { width: '100vw' }, ease: Power2.easeOut,
        onComplete: () => {
          screenResultStart();
        },
      });
    }
  });
};

const screenResultStart = () => {
  const phase1Duration = 2;

  TweenLite.to(document.querySelector('.triangle1'), phase1Duration, { css: { top: '50%' }, ease: Power2.easeOut });
  TweenLite.to(document.querySelector('.triangle2'), phase1Duration, { css: { top: '0' }, ease: Power2.easeOut });
  TweenLite.to(document.querySelector('.triangle3'), phase1Duration, { css: { top: '60%' }, ease: Power2.easeOut });
  TweenLite.to(document.querySelector('.triangle4'), phase1Duration, { css: { top: '20%' }, ease: Power2.easeOut });
  TweenLite.to(document.querySelector('.triangle5'), phase1Duration, { css: { top: '10%' }, ease: Power2.easeOut });
  TweenLite.to(document.querySelector('.triangle6'), phase1Duration, { css: { top: '60%' }, ease: Power2.easeOut });
  TweenLite.to(document.querySelector('.triangle7'), phase1Duration, { css: { top: '45%' }, ease: Power2.easeOut });

  TweenLite.to(document.querySelector('.screenResult__text'), phase1Duration, { css: { opacity: 1 } });
  TweenLite.to(document.querySelector('.screenResult__ans'), phase1Duration, { css: { opacity: 1 } });

  TweenLite.to(document.querySelector('.triangle-blue'), phase1Duration, { css: { bottom: '-20px' }, ease: Power2.easeOut });
  TweenLite.to(document.querySelector('.triangle-white'), phase1Duration, { css: { bottom: '0' }, ease: Power1.easeOut });
  TweenLite.to(document.querySelector('.triangle-black'), phase1Duration, { css: { bottom: '-30px' }, ease: Power3.easeOut });

  const phase2Duration = 2;

  TweenLite.to(document.querySelector('.triangle3'), 2, { css: { top: '312px', left: '814px' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.triangle5'), 2, { css: { top: '230px', left: '814px' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.triangle7'), 2, { css: { top: '395px', left: '814px' }, ease: Power3.easeOut, delay: phase2Duration });

  TweenLite.to(document.querySelector('.triangle1'), 2, { css: { top: '-200px' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.triangle2'), 2, { css: { top: '-200px' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.triangle4'), 2, { css: { top: '-200px' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.triangle6'), 2, { css: { top: '-200px' }, ease: Power3.easeOut, delay: phase2Duration });

  TweenLite.to(document.querySelector('.triangle-blue'), 2, { css: { bottom: '200px', left: '300px' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.triangle-white'), 2, { css: { bottom: '340px', left: '310px', rotation: '+=80deg' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.triangle-black'), 2, { css: { bottom: '338px', left: '350px', rotation: '+=35deg' }, ease: Power3.easeOut, delay: phase2Duration });

  TweenLite.to(document.querySelector('.screenResult__text'), 2, { css: { top: '110px', left: '894px' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.screenResult__ans'), 2, { css: { top: '169px', left: '945px' }, ease: Power3.easeOut, delay: phase2Duration });
  TweenLite.to(document.querySelector('.screenResult__result'), 2, { css: { opacity: 1 }, ease: Power3.easeOut, delay: phase2Duration });

  TweenLite.to(document.querySelector('.triangle-white'), 6, { css: { rotation: '-=65deg' }, delay: phase2Duration + 2 });
  TweenLite.to(document.querySelector('.triangle-black'), 6, { css: { x: '+=30', y: '-=80', rotation: '+=135deg' }, delay: phase2Duration + 2 });
  TweenLite.to(document.querySelector('.triangle-blue'), 2, { css: { x: '+=20', y: '-=10' }, delay: phase2Duration + 2 });

  TweenLite.to(document.querySelector('.triangle-blue'), 4, { css: { x: '-=70', y: '+=20' }, delay: phase2Duration + 2 + 2 });
};
