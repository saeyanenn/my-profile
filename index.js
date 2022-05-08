fetch("https://api.github.com/repos/saeyanenn/my-profile/commits")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const lastCommitDate = new Date(data[0].commit.committer.date);
    $(".last-commit-date").text(
      `最終更新日時：${
        lastCommitDate.getMonth() + 1
      }月${lastCommitDate.getDate()}日`
    );
  });

function addMarginTopToFooter(times) {
  const contentsBoxHeight = $("#contents div:first").height();
  $("footer").css("margin-top", contentsBoxHeight * times);
}

function createCardElement(data) {
  return `
  <div class="contents-box">
    <div class="contents-flame front">
      <div class="icon">
        <i class="fa fa-solid ${data.icon}"></i>
      </div>
    <div>
      <p class="small-content-topic">${data.frontTitle}</p>
    </div>
  </div>

  <div class="contents-flame back">
    <p class="small-content-title">${data.backTitle}</p>
    <p class="content-detail">
      ${data.content}
    </p>
  </div>
`;
}

$(function () {
  cardData.map(function (data) {
    $("#contents").append(createCardElement(data));
  });
  const windowSize = $(window).width();
  if (windowSize > 1000) {
    addMarginTopToFooter(3.3);
  } else if (windowSize > 670) {
    addMarginTopToFooter(4.5);
  } else {
    addMarginTopToFooter(8.5);
  }
  $(".contents-box").on("click", function () {
    $(this).toggleClass("flipped");
  });
});
