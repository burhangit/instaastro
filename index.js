for (var i = 1; i <= 31; i++) {
  $(".birthDay").append('<option value="' + i + '">' + i + "</option>");
}

for (var i = 1; i <= 12; i++) {
  $(".birthMonth").append('<option value="' + i + '">' + i + "</option>");
}

var currentTime = new Date();
var year = currentTime.getFullYear();
for (var i = year; i >= 1900; i--) {
  $(".birthYear").append('<option value="' + i + '">' + i + "</option>");
}

function calc() {
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;
  alert("your love score is " + loveScore + "%");
}
