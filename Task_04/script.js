document.getElementById("img").addEventListener("click", function () {
  // const img = document.getElementById("img");
  console.log(img);
  if (this.src.includes("assets/light_off.jpeg")) {
    document.getElementById("img").src = "./assets/light_on.jpeg";
  } else {
    document.getElementById("img").src = "./assets/light_off.jpeg";
  }
});

document.getElementById("btn").addEventListener("click", function () {
  const passwoard = document.getElementById("password").value;
  if (passwoard == "1234") {
    document.getElementById("message").innerHTML = "Access Successfully";
    document.getElementById("door").innerHTML = "🔒 Door is Unlocked";
  } else {
    document.getElementById("message").innerHTML =
      "😂 Wrong PIN! Nice try, hacker!";
    document.getElementById("door").innerHTML = "🔒 Door is Locked!";
  }
});
