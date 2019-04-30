if (localStorage.getItem("lettuce") == null) {
  localStorage.setItem("lettuce", "false");
} else if (localStorage.getItem("lettuce") == "true") {
  document.getElementById("instructions").innerHTML = "You have already acquired lettuce.";
}

acquire = function() {
  if (localStorage.getItem("lettuce") == "true") {
    alert("no");
  } else {
    document.getElementById("instructions").innerHTML = "Congratulations! You have acquired lettuce!"
    localStorage.setItem("lettuce", "true");
  }
}
