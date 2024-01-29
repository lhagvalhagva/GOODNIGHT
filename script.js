function calculateSleep() {
  var wakeTimeInput = document.getElementById("wakeTime").value;
  var currentTime = new Date();

  if (!wakeTimeInput) {
    alert("Цагаа оруул миний хүү  ");
    return;
  }

  var wakeTime = new Date(wakeTimeInput);

  if (wakeTime <= currentTime) {
    alert("Та хасах цаг унтах гээд байгаарай ижижиж XD");
    return;
  }

  var difference = wakeTime - currentTime;

  var hours = Math.floor(difference / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  var result = "";

  if (hours >= 9) {
    result = "Воо болжин шүү xD 🤩 ";
    result += " та " + hours + " цаг  ";
    result += minutes > 0 ? minutes + " минут унтах нь ээ 😴" : "";
  } else if (hours < 8) {
    result = "Арай л бага уу 👻 ";
    result += hours + " цаг  ";
    result += minutes > 0 ? minutes + " минут унтах нь ээ 😴" : "";
  } else if (8 < hours < 9) {
    result = "Яг таарж байна шүү  ";
    result += hours + " цаг  ";
    result += minutes > 0 ? minutes + " минут унтах нь ээ 😴" : "";
  }
  document.getElementById("result").innerText = result;
}
