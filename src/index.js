import './style.css';

const options = { method: 'GET' };

fetch('https://api.tvmaze.com/shows', options)
  .then((response) => response.json())
  .then((data) => {
    const list = data.slice(0, 6);
    list.forEach((item) => {
      const { name } = item;
      const poster = item.image.original;
      const movie = `<li>
        <div>
      <img src=" ${poster}" class="img">
       <div class = "mv-title">
        <h2>${name}</h2>
        <i class="fa-regular lk-edit fa-heart"></i>
       </div>
       <div class="com-sec">
       <p class="likes">5 likes</p>
       <button type = "button" class="cmt" >Comments</button>
     </div>
     </div>
       </li>`;
      document.querySelector('.movie-disp').innerHTML += movie;
    });
  });
