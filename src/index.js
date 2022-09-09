import "./style.css";
import getLikes from './getLikes.js';
import postLikes from './createLikes.js';
import counter from "./likesCounter.js";

let count = 0;

fetch("https://api.tvmaze.com/shows", )
  .then((response) => response.json())
  .then((data) => {
    const list = data.slice(0, 6);
    list.forEach((item,index) => {
      const { name } = item;
      const poster = item.image.original;
      const movie = `<li>
        <div>
      <img src=" ${poster}" class="img">
       <div class = "mv-title">
        <h2>${name}</h2>
      <i data-id="${index}" class="fa-regular lk-edit fa-heart"></i>
       </div>
       <div class="com-sec">
       <p class="likes"  data-id="${index}"></p>
       <button type = "button" class="cmt" >Comments</button>
     </div>
     </div>
       </li>`;
      document.querySelector(".movie-disp").innerHTML += movie;
      count++
    });

    getLikes();


      const likeBtn = document.querySelectorAll('.lk-edit');
      likeBtn.forEach((icon)=>{
        icon.addEventListener('click', (e)=>{
          counter(e)
          postLikes();
        })
      })


  const movieUpdate = document.getElementById('movies-count');
  movieUpdate.innerHTML = `Movies(${count})`;
  
  });
