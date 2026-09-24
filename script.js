const soundStatus = document.getElementById('sound-status');
const youtubeSound = document.getElementById('youtube-sound');
const timelineCards = document.querySelectorAll('.card-copy');

const youtubeId = 'ZOQAqeHHZ5o';
const storageKey = 'intel-sound-played';

function startYouTubeSound() {
  if (!youtubeSound || typeof window === 'undefined') {
    return;
  }

  const alreadyPlayed = window.localStorage.getItem(storageKey) === 'true';
  if (alreadyPlayed) {
    if (soundStatus) {
      soundStatus.textContent = 'Intel soundscape has already started.';
    }
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&controls=0&playsinline=1&rel=0&modestbranding=1`;
  iframe.title = 'Intel soundscape';
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = false;
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('loading', 'lazy');

  youtubeSound.appendChild(iframe);
  window.localStorage.setItem(storageKey, 'true');

  if (soundStatus) {
    soundStatus.textContent = 'Intel soundscape is playing once.';
  }
}

timelineCards.forEach((card) => {
  card.addEventListener('click', () => {
    const isExpanded = card.classList.contains('expanded');
    timelineCards.forEach((item) => {
      item.classList.remove('expanded');
      item.setAttribute('aria-expanded', 'false');
    });

    if (!isExpanded) {
      card.classList.add('expanded');
      card.setAttribute('aria-expanded', 'true');
    }
  });
});

window.addEventListener('load', () => {
  startYouTubeSound();
});
