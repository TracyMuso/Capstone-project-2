/* eslint-disable no-plusplus */
const counter = (dataset) => {
  const disp = document.querySelectorAll('.likes');
  disp.forEach((e) => {
    if (dataset.target.dataset.id === e.dataset.id) {
      e.innerHTML++;
    }
  });
};

export default counter;