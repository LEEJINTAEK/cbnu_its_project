var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    //# player X
    videoId: "7J8Ps3JxJq0", //최초재생할 유투브영상 ID
    playerVars: {
      autoplay: true,
      loop: true, //반복재생유무
      playlist: "7J8Ps3JxJq0", //반복재생 유투브ID입력해야함
    },
    events: {
      onReady: function (event) {
        //매소드
        event.target.mute(); //음소거
      },
    },
  });
}
