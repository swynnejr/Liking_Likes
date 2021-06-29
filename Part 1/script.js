console.log("page loading...")


var h3 = document.querySelector("#post-1");
var likeCount = 3

function like() {
    likeCount++;
    h3.innerText = likeCount + " like(s)";
}