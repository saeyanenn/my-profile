function wrapTextWithLink(text, url, className = "small-content-title") {
  return `<a href="https://${url}" class="${className}" target="_blank">${text}</a>`;
}

const cardData = [
  {
    id: "flip-board-1",
    icon: "fa-basketball",
    frontTitle: "SPORT",
    backTitle: "バスケットボール",
    content:
      "小学生の頃から高校生までずっとやってきました。<br />あまり才能があるとは言えませんでしたが、楽しさと悔しさを糧に続けてきました。<br />",
  },
  {
    id: "flip-board-2",
    icon: "fa-computer",
    frontTitle: "TECH",
    backTitle: "プログラミング",
    content: `高校生のことから興味があり、大学生になってから本格的に学習を始めました。<br /> 大学では
    ${wrapTextWithLink(
      "プログラミングサークル",
      "twitter.com/szpp_3776",
      "content-detail-link"
    )}
    に入り、 より技術を磨いていきます。`,
  },
  {
    id: "flip-board-3",
    icon: "fa-dog",
    frontTitle: "ANIMAL",
    backTitle: "犬",
    content: `小さい頃から動物と触れ合うことが好きで、
        今は寮生活でペットは飼えないですが、いつか飼ってみたいです。<br />
        シベリアンハスキーの毛並みと顔が好きで、モフモフしたいです。<br />`,
  },
  {
    id: "flip-board-4",
    icon: "fa-book-open",
    frontTitle: "SUBJECT",
    backTitle: "英語",
    content: `英語自体は得意とは言えず、最初は嫌いだったのですが、
        学べば学ぶほど上達する感覚があり、楽しくなってきました。<br />
        ただ、まだネイティブとの会話の経験がないので、まだまだ課題は多いです。<br />`,
  },
  {
    id: "flip-board-5",
    icon: "fa-burger",
    frontTitle: "FOOD",
    backTitle: "アボカド",
    content: `アボカドは栄養豊富で彩りもいいし、
        ご飯と一緒に食べても美味しいのでおすすめです！<br />
        今は世界的にも人気があり、供給が需要に追いついておらず、
        価格が高騰していて、あまり食べれていません。`,
  },
  {
    id: "flip-board-6",
    icon: "fa-compact-disc",
    frontTitle: "ARTIST",
    backTitle: `${wrapTextWithLink("ヨルシカ", "yorushika.com/")}`,
    content: `n-bunaさんの心に響く歌詞や曲調と、
        suisさんの透き通った歌声が大好きです。<br />
        いつかライブに行ってみたいです。<br />`,
  },
  {
    id: "flip-board-7",
    icon: "fa-robot",
    frontTitle: "ANIMATION",
    backTitle: `${wrapTextWithLink("EVANGELION", "www.evangelion.co.jp/")}`,
    content: `庵野監督の精神描写とキャラクターの個性、
        世界観やハッと気付かされる伏線が大好きです。<br />
        旧アニメ版、漫画版、新劇場版それぞれに違いがあり、
        個人的には新劇場版のQが一番好きです。`,
  },
  {
    id: "flip-board-8",
    icon: "fa-landmark",
    frontTitle: "AMUSEMENT PARK",
    backTitle: `${wrapTextWithLink("ディズニーランド", "www.disney.co.jp/")}`,
    content: `小さい頃に何度か連れてってもらって、大好きになりました。<br />
        乗り物が好きというよりも、世界観が好きで、ずっと歩いていたいです。<br />
        家族としか行ったことがないので、友達といったり、一人で行ってみたりしたいです。一人で行ってみたりしたいです。<br />`,
  },
];
