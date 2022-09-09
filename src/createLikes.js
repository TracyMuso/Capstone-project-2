import counter from './likesCounter.js';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/likes/';

const postLikes = async () => {
  const likeBtn = document.querySelectorAll('.lk-edit');
  likeBtn.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      counter(e);
      fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: `item${e.target.dataset.id}`,
        }),
      });
    });
  });
};
export default postLikes;
