/* eslint-disable import/prefer-default-export */
const commentModal = document.querySelector('.comm-popup');
const options = { method: 'GET' };

export const commentPopup = (id) => {
  fetch(`https://api.tvmaze.com/shows/${id}`, options)
    .then((response) => response.json())
    .then((data) => {
      commentModal.innerHTML += `
    <img src="${data.image.original}" class="poster" alt="show poster">
    <i class="fa fa-x"></i>
    <h2 class="movie-title">${data.name}</h2>
    <div class="movie-info">
     <span class="season">Language: ${data.language}</span>
     <span class="likes">Release: ${data.premiered}</span>
     <span class="imdb">Average rating: ${data.rating.average}</span>
     <span class="cast">Status: ${data.status}</span>
   </div>
    `;
      const closeBtn = document.querySelector('.fa-x');
      closeBtn.addEventListener('click', () => {
        commentModal.style.display = 'none';
      });
    });
};
