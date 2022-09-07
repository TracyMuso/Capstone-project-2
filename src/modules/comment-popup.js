/* eslint-disable import/prefer-default-export */
import postComment from './modules/getData.js'

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
   <h3 class="comment-num">comments(1)</h3>
   <div class="comment-section"></div>
    <p class="comment">08/09/2022 Tracy: I can't wait to see this one</p>
  </div>
 <h3 class="add">Add a comment</h3>
<form class="form">
   <label for="name"></label>
   <input id="name" type="text" maxlength="15" required placeholder="Your name...">
   <label for="add-comment"></label>
   <textarea id="add-comment" type="text" maxlength="100" required placeholder="Comment..."></textarea>
   <button type="submit" class="comm-btn">Post!</button>
</form>
    `;
      const userName = document.querySelector('#name');
      const textArea = document.querySelector('#add-comment')
      const form = document.querySelector('form');
      form.addEventListener('submit', () => {
        postComment(id, userName.value, textArea.value);
      })
      const closeBtn = document.querySelector('.fa-x');
      closeBtn.addEventListener('click', () => {
        commentModal.style.display = 'none';
      });
    });
};
