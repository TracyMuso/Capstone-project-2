const baseUrl = "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/likes/";

const getLikes = async () => {
fetch(baseUrl,)
  .then((response) => response.json())
  .then((data) => {
    const disp = document.querySelectorAll(".likes");
    disp.forEach((element,index) => { 
      const id = data.findIndex((like) => like.item_id === `item${index}`);
      const msgLikes = id >= 0 ? data[id].likes : 0;
      element.innerHTML = `${msgLikes}`;
    });
  })
  .catch((err) => console.error(err));
}

export default getLikes