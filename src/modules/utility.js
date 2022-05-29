export const getCommentList = (data) => {
  let li = '';
  data.forEach((comment) => {
    li += `<li class="comment-list-item">${comment.creation_date}: ${comment.username} - “${comment.comment}” </li>`;
  });

  return li;
};

export const getAttributes = (data) => `
          <li>Ability: ${data.ability || ''}</li>
          <li>Held-Item: ${data.itemHeld || ''}</li>
          <li>Move: ${data.move || ''}</li>
          <li>Weight: ${data.weight || ''}</li>`;

export const makeReservation = () => {};
