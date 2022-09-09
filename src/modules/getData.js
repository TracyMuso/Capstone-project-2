const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/comments';

export const postComment = async (id, name, text) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: text,
    }),
  });
};

export const getComments = async (id) => {
  const path = `?item_id=${id}`;
  const cmnt = await fetch(baseUrl + path);
  const response = await cmnt.json();
  return response;
};
