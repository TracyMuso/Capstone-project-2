const commentModal = document.querySelector('.comm-popup');

export const commentPopup = (data) => {
    commentModal.innerHTML += `
    <img src="${data.image.original}" class="poster" alt="show poster">
    <i class="fa fa-x"></i>
    <h2 class="movie-title">${data.name}</h2>
    <div class="movie-info">
     <span class="season">Seasons: ${data.name}</span>
     <span class="likes">Release: ${data.name}</span>
     <span class="imdb">Imdb rating: ${data.name}</span>
     <span class="cast">Starring: ${data.name}</span>
   </div>
    `;
}