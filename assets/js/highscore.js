var highScoreListEl = document.querySelector(".highScoreList");

function showScore() {
  var highScoreArr = localStorage.getItem("codequiz");
  highScoreArr = JSON.parse(highScoreArr) || [];
  let data = "";
  for (let i = 0; i < highScoreArr.length; i++) {
    data += `
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${highScoreArr[i].user} </td>
    <td>${highScoreArr[i].score}</td>
  </tr>`;
  }

  highScoreListEl.innerHTML = data;
}

showScore();
