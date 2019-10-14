let btn = document.querySelector(".buttn");
let button = document.createElement("input");
let iframemain = document.querySelector("iframe");
let commentbtn = document.querySelector(".form-comment button");
let comment_title = document.querySelector(".form-comment input");
let comment_text = document.querySelector(".form-comment textarea");
let commentblock = document.querySelector(".content-comments");
let video = [{ src: "https://www.youtube.com/embed/uMR9gTPhVHo", comment: {} }, { src: "https://www.youtube.com/embed/7eNKQPBsNcs", comment: {} },
{src: "https://www.youtube.com/embed/6qk1GQtA1dc", comment:{}} , {src: "https://www.youtube.com/embed/mod-7U_WsNw", comment:{}}];
let current = 0;
let l;
let out;
let s;
let t;
for (var i = 0; i < video.length; i++) {
  button.setAttribute("type", "button");
  button.setAttribute("value", "Видео " + (i + 1));
  button.setAttribute("onclick", "playvideo(" + i + ")");
  btn.appendChild(button.cloneNode());
}
iframemain.src = video[current].src;
function playvideo(num) {
  current = num;
  iframemain.src = video[current].src;
}

commentbtn.onclick = addcomment;

function addcomment() {
  l = Object.keys(video[current].comment).length;
  video[current].comment[l] = { title: comment_title.value, text: comment_text.value };
  commenttext();
}

function commenttext() {

  out = ' ';
  for (i = 0; i <= l; i++) {
    out += '<div class="comment"><div class="comment-name">' + video[current].comment[i].title + '</div>';
    out += '<div class="comment-text">' + video[current].comment[i].text + '</div></div>';
  }

  commentblock.appendChild(document.createTextNode(out));
  commentblock.innerHTML = out;
}