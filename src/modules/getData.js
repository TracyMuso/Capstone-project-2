const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/comments';

 export const postComment = async (id, user, text) => {
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

export const getComments = async (id) => {
  const path = `?item_id=item${id}`;
  const cmnt = await fetch(`${baseUrl}${path}`);
  const response = await cmnt.json();
  return response;
};
