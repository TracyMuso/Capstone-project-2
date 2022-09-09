const counter = (dataset) => {
  const disp = document.querySelectorAll('.likes');
  disp.forEach((e) => {
    if (dataset.target.dataset.id === e.dataset.id) {
      // eslint-disable-next-line no-plusplus
      e.innerHTML++;
    }
  });
};

export default counter;