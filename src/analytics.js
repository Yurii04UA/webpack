function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;
  const lisener = () => counter++;

  document.addEventListener("click", lisener);

  return {
    destroy() {
      document.removeEventListener("click", lisener);
      isDestroyed = true;
    },
    getClick() {
      if (isDestroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`;
      }
      return counter;
    },
  };
}

window.analytics = createAnalytics();
