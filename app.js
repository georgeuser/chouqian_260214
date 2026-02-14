(function () {
  var data = window.LOTTERY_DATA;
  var lotteryBox = document.getElementById("lotteryBox");
  var bamboo = document.getElementById("bamboo");
  var hint = document.getElementById("hint");
  var btnDraw = document.getElementById("btnDraw");
  var resultSection = document.getElementById("resultSection");
  var resultLabel = document.getElementById("resultLabel");
  var resultNumber = document.getElementById("resultNumber");
  var resultTitle = document.getElementById("resultTitle");
  var resultPoem = document.getElementById("resultPoem");
  var resultDesc = document.getElementById("resultDesc");
  var btnAgain = document.getElementById("btnAgain");

  function getRandomIndex() {
    return Math.floor(Math.random() * data.length);
  }

  function showResult(index) {
    var item = data[index];
    resultLabel.textContent = item.label;
    resultNumber.textContent = "第 " + (index + 1) + " 签";
    resultTitle.textContent = item.title;
    resultPoem.textContent = item.poem;
    resultDesc.textContent = item.desc;
    resultSection.classList.remove("hidden");
    resultSection.classList.add("show");
  }

  function hideResult() {
    resultSection.classList.add("hidden");
    resultSection.classList.remove("show");
  }

  function draw() {
    if (btnDraw.disabled) return;
    btnDraw.disabled = true;
    hint.textContent = "抽签中…";
    lotteryBox.classList.add("shake");

    setTimeout(function () {
      var index = getRandomIndex();
      lotteryBox.classList.remove("shake");
      hint.textContent = "签已抽出";
      showResult(index);
      btnDraw.disabled = false;
    }, 520);
  }

  btnDraw.addEventListener("click", function () {
    hideResult();
    draw();
  });

  btnAgain.addEventListener("click", function () {
    hideResult();
    hint.textContent = "点击下方按钮抽签";
    draw();
  });
})();
