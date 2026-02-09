document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('featured-track');
  const prev = document.getElementById('featured-prev');
  const next = document.getElementById('featured-next');
  const viewport = document.querySelector('.featured-viewport');

  if (!track || !prev || !next || !viewport) return;

  const originalCards = Array.from(track.querySelectorAll('.project-card'));
  let index = 0;
  let locked = false;

  if (originalCards.length > 1) {
    const firstClone = originalCards[0].cloneNode(true);
    const lastClone = originalCards[originalCards.length - 1].cloneNode(true);
    track.insertBefore(lastClone, originalCards[0]);
    track.appendChild(firstClone);
  }

  function cardWidth() {
    return viewport.clientWidth;
  }

  function jumpToIndex(nextIndex) {
    if (!originalCards.length || locked) return;

    locked = true;
    const total = originalCards.length;
    const width = cardWidth();
    index = nextIndex;
    track.scrollTo({ left: (index + 1) * width, behavior: 'smooth' });

    setTimeout(() => {
      if (index < 0) {
        index = total - 1;
        track.scrollTo({ left: total * width, behavior: 'auto' });
      } else if (index >= total) {
        index = 0;
        track.scrollTo({ left: width, behavior: 'auto' });
      }
      locked = false;
    }, 420);
  }

  prev.addEventListener('click', () => jumpToIndex(index - 1));
  next.addEventListener('click', () => jumpToIndex(index + 1));

  window.addEventListener('resize', () => {
    track.scrollTo({ left: (index + 1) * cardWidth(), behavior: 'auto' });
  });

  window.addEventListener('load', () => {
    track.scrollTo({ left: (index + 1) * cardWidth(), behavior: 'auto' });
  });
});
