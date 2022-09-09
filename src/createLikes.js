const baseUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/likes/";

const postLikes = async () => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item_id: `item${event.target.dataset.id}`,
    }),
  });
};
export default postLikes;
