const opening = () => {
  const star = document.querySelector('.star');
  const circle = document.querySelector('.circle');
  const square = document.querySelector('.square');

  TweenLite.to(star, 5, { rotation: 360, ease: Power2.easeOut });
  TweenLite.to(circle, 5, { rotation: 360, ease: Power2.easeOut });
  TweenLite.to(square, 5, { rotation: -360, ease: Power2.easeOut });

  TweenLite.to(circle, 2.5, { css: { scale: 1.1 } });
  TweenLite.to(circle, 2.5, { css: { scale: 1 }, delay: 2.5 });

  TweenLite.to(square, 1.5, { css: { scale: 7 }, ease: Power2.easeOut, delay: 5 - 0.2 });
  TweenLite.to(circle, 1.5, { css: { scale: 7 }, ease: Power2.easeOut, delay: 5 });
  TweenLite.to(star, 0.6, {
    css: { scale: 7 }, ease: Power2.easeOut, delay: 5 + 0.2,
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

  setTimeout(() => {
    const qSection = screenQ1.querySelector('.q-section');
    qSection.style.opacity = 1;
  }, 1500); // 配 screenQ1Text css 的 transition 1.5s

  const square = screenQ1.querySelector('.animate-section__square'); // top: 100
  const triangle = screenQ1.querySelector('.animate-section__triangle'); // top: 300
  const circle = screenQ1.querySelector('.animate-section__circle'); // bottom: -100

  const animateSection = screenQ1.querySelector('.animate-section');
  TweenLite.to(animateSection, 1, { css: { left: '60%' }, delay: 1 });

  TweenLite.to(square, 2, { css: { top: '100px' }, ease: Power2.easeOut, delay: 1 + 1 });
  TweenLite.to(triangle, 2 + 0.2, { css: { top: '300px' }, ease: Power2.easeOut, delay: 1 + 1 });
  TweenLite.to(circle, 2, { css: { bottom: '-100px' }, ease: Power2.easeOut, delay: 1 + 1 });

  TweenLite.to(square, 4, { rotation: 360, delay: 1 + 1 + 2 });
  TweenLite.to(triangle, 4, { rotation: -360, delay: 1 + 1 + 2 });
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
  qSection.style.opacity = 1;

  const square = screenQ2.querySelector('.animate-section__square');
  const triangle = screenQ2.querySelector('.animate-section__triangle');
  const circle = screenQ2.querySelector('.animate-section__circle');

  const animateSection = screenQ2.querySelector('.animate-section');
  TweenLite.to(animateSection, 1, { css: { right: '60%' }, delay: 0.5 });

  TweenLite.to(square, 2, { css: { bottom: '200px' }, ease: Power3.easeOut, delay: 1 + 0.5 });
  TweenLite.to(triangle, 2, { css: { top: '-50px' }, ease: Power2.easeOut, delay: 1 + 0.5 });
  TweenLite.to(circle, 2, { css: { bottom: '200px' }, ease: Power2.easeOut, delay: 1 + 0.5 });

  TweenLite.to(square, 4, { rotation: 360, ease: Power3.easeOut, delay: 2 + 1 + 0.5 });
  TweenLite.to(triangle, 4, { rotation: -360, ease: Power2.easeOut, delay: 2 + 1 + 0.5 });
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
  qSection.style.opacity = 1;

  const square = screenQ3.querySelector('.animate-section__square');
  const triangle = screenQ3.querySelector('.animate-section__triangle');
  const circle = screenQ3.querySelector('.animate-section__circle');

  const animateSection = screenQ3.querySelector('.animate-section');
  TweenLite.to(animateSection, 1, { css: { left: '60%' }, delay: 1 });

  TweenLite.to(square, 2, { css: { top: '100px' }, ease: Power2.easeOut, delay: 1 + 1 });
  TweenLite.to(triangle, 2 + 0.2, { css: { bottom: '200px' }, ease: Power2.easeOut, delay: 1 + 1 });
  TweenLite.to(circle, 2, { css: { top: '-30px' }, ease: Power2.easeOut, delay: 1 + 1 });

  TweenLite.to(square, 4, { rotation: -60, delay: 1 + 1 + 2 });
  TweenLite.to(triangle, 4, { rotation: -360, delay: 1 + 1 + 2 });
  TweenLite.to(circle, 4, { css: { x: '+=20', y: '+=30' }, ease: Power2.easeOut, delay: 1 + 1 + 2 });


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

};
