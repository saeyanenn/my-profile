$(function () {
  $(".contents-box").on("click", function () {
    $(this).toggleClass("flipped");
  });
});

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
  const contentsBoxHeight = $(".contents-box-height").height();
  $("footer").css("margin-top", contentsBoxHeight * times);
}

$(function () {
  const windowSize = $(window).width();
  if (windowSize > 1000) {
    addMarginTopToFooter(3.3);
  } else if (windowSize > 670) {
    addMarginTopToFooter(4.5);
  } else {
    addMarginTopToFooter(8.5);
  }
});
