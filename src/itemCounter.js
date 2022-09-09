const dispCounter = (count) => {
  const movieUpdate = document.getElementById('movies-count');
  movieUpdate.innerHTML = `Movies(${count})`;
};
export default dispCounter;