gsap.registerPlugin(Observer);

const sections = document.querySelectorAll('section');
let currentIndex = -1;
let animating;

const translateAmount = 30, rotateAmount = 10;

const wrap = gsap.utils.wrap(0, sections.length);

const goTo = (index, direction = 'down') => {

  index = wrap(index);
  animating = true;
  let leave, enter;
  const defaultPos = { transform: 'none', autoAlpha: 1 };

  const tl = gsap.timeline({
    defaults: { duration: .75, ease: 'power2.inOut', autoAlpha: 0 },
    onComplete: () => { animating = false; }
  });

  switch (direction) {
    case 'up':
      leave = { yPercent: translateAmount, rotationX: -rotateAmount };
      enter = { yPercent: -translateAmount, rotationX: rotateAmount };
      break;
    case 'down':
      leave = { yPercent: -translateAmount, rotationX: rotateAmount };
      enter = { yPercent: translateAmount, rotationX: -rotateAmount };
      break;
    case 'left':
      leave = { xPercent: -translateAmount, rotationY: -rotateAmount };
      enter = { xPercent: translateAmount, rotationY: rotateAmount };
      break;
    case 'right':
      leave = { xPercent: translateAmount, rotationY: rotateAmount };
      enter = { xPercent: -translateAmount, rotationY: -rotateAmount };
      break;
  }

  tl.fromTo(sections[index], enter, defaultPos);

  if (currentIndex > -1) {
    tl
      .to(sections[currentIndex], leave, 0)
      .set(sections[currentIndex], { transform: 'none' });
  }

  currentIndex = index;

}

goTo(0);

Observer.create({
  wheelSpeed: -1,
  tolerance: 20,
  onDown: () => !animating && goTo(currentIndex - 1, 'up'),
  onUp: () => !animating && goTo(currentIndex + 1, 'down'),
  onLeft: () => !animating && goTo(currentIndex + 1, 'left'),
  onRight: () => !animating && goTo(currentIndex - 1, 'right'),
  preventDefault: true,
})