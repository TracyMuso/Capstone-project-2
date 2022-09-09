/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */
import { postComment, getComments } from './getData.js';

const options = { method: 'GET' };

export const commentPopup = async (id) => {
  const getCmnt = await getComments(id);
  await fetch(`https://api.tvmaze.com/shows/${id}`, options)
    .then((response) => response.json())
    .then((data) => {
      const commentModal = document.querySelector('.comm-popup');
      commentModal.innerHTML += `
    <img src="${data.image.original}" class="poster" alt="show poster">
    <i class="fa fa-x"></i>
    <h2 class="movie-title">${data.name}</h2>
    <div class="movie-info">
    <div class="summary">
    <p class="description">SUMMARY: ${data.summary}</p>
    </div>
    <div class="more-info">
     <span class="season">Language: ${data.language}</span>
     <span class="likes">Release: ${data.premiered}</span>
     <span class="imdb">Average rating: ${data.rating.average}</span>
     <span class="cast">Status: ${data.status}</span>
     </div>
   </div>
   <h3 class="comment-num">comments(${getCmnt.length})</h3>
   <div class="comment-section"></div>
 <h3 class="add">Add a comment</h3>
    `;
      const commCont = document.querySelector('.comment-section');
      getCmnt.map((comments) => commCont.innerHTML += `
    <p class="comment">${comments.creation_date} ${comments.username}: ${comments.comment}</p>
    `);

      const form = document.createElement('form');
      const input = document.createElement('input');
      input.id = 'name';
      input.setAttribute('type', 'text');
      input.setAttribute('required', 'true');
      input.setAttribute('placeholder', 'Your name...');

      const textarea = document.createElement('textarea');
      textarea.id = 'add-comment';
      textarea.setAttribute('type', 'text');
      textarea.setAttribute('required', 'true');
      textarea.setAttribute('placeholder', 'Your thoughts...');

      const btn = document.createElement('button');
      btn.className = 'comm-btn';
      btn.setAttribute('type', 'submit');
      btn.innerText = 'Post!';

      form.append(input, textarea, btn);
      commentModal.appendChild(form);
      const index = id;
      form.addEventListener('submit', async (e) => {
        const userName = input.value;
        const txt = textarea.value;
        e.preventDefault();
        await postComment(index, userName, txt);
        form.reset();
        await getComments(index);
      });
      const closeBtn = document.querySelector('.fa-x');
      closeBtn.addEventListener('click', () => {
        commentModal.style.display = 'none';
        window.location.reload();
      });
    });
};
