const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/comments';

const postComment = async (id, user, text) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment: text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getComments = async (id) => {
  const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/comments?item_id=item${id}`);
  const response = comments.json();
  return response;
};