/* eslint-disable import/prefer-default-export */
export const fetchComments = () => Promise.resolve(
  [
    {
      username: 'Trayway',
      creation_date: '2022-09-08',
      comment: 'Has anyone watched this yet?',
    },
    {
      creation_date: '2022-09-09',
      username: 'Enning',
      comment: 'Great movie!',
    },
  ],
);

const slicedArray = [1, 2, 3, 4, 5]

export const counter = () => {
  const counterInfo = slicedArray.length
  return counterInfo
}