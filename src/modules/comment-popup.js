/* eslint-disable import/prefer-default-export */
import { postComment, getComments } from './getData.js';

const commentModal = document.querySelector('.comm-popup');
const options = { method: 'GET' };

export const commentPopup = (id) => {
  fetch(`https://api.tvmaze.com/shows/${id}`, options)
    .then((response) => response.json())
    .then((data) => {
      const index = id;
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
   <h3 class="comment-num">comments(${getComments.length})</h3>
   <div class="comment-section">
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
      const commCont = document.querySelector('.comment-section');
      let userName = document.querySelector('#name').value;
      let textArea = document.querySelector('#add-comment').value;
      const form = document.querySelector('form');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await postComment(index, userName, textArea);
        // const get = getComments(index);
        // get.forEach((commData) => {
        //   commCont.innerHTML += `
        // eslint-disable-next-line max-len
        //   <p class="comment">${commData.creation_date} ${commData.username}: ${commData.comment}</p>
        //   `;
        // });
        userName = '';
        textArea = '';
      });
      form.reset();
      const closeBtn = document.querySelector('.fa-x');
      closeBtn.addEventListener('click', () => {
        commentModal.style.display = 'none';
      });
    });
};
