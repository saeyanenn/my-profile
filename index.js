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
    $("#last-commit-date").text(
      `最終更新日時：${
        lastCommitDate.getMonth() + 1
      }月${lastCommitDate.getDate()}日`
    );
  });
