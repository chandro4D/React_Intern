document.getElementById("img").addEventListener("click", function () {
  // const img = document.getElementById("img").src;
  // console.log(img);
  if (this.src.includes("assets/light_off.jpeg")) {
    document.getElementById("img").src = "./assets/light_on.jpeg";
  } else {
    document.getElementById("img").src = "./assets/light_off.jpeg";
  }
});

document.getElementById("btn").addEventListener("click", function () {
  const age = parseInt(document.getElementById("password").value);
  let doorText = "";
  let message = "";

  if (age < 18) {
    doorText =
      "🚫😂 Access denied! Your love story is still under construction. 🏗️❤️";
  } else if (age < 23) {
    doorText =
      "😂 You're still young… even your future wife is probably doing homework! 📚";
  } else if (age < 28) {
    doorText =
      "👀 Your future wife is out there somewhere… probably wondering where you are! 😂";
  } else if (age < 33) {
    doorText =
      "😂 Your future wife is waiting… and honestly, she's getting a little impatient! ⏳";
  } else if (age < 38) {
    doorText =
      "😭😂 At this point, even your future wife is asking, 'Are we meeting or what?'";
  } else if (age < 43) {
    doorText =
      "🔍😂 Your future wife might be searching for you… with a magnifying glass!";
  } else if (age < 48) {
    doorText =
      "🤣📂 Your future wife is no longer in the future… she's in the 'classified files'!";

    message = "🔒 Door is Locked!";
  } else if (age < 53) {
    doorText =
      "😂🙏 Finding your future wife now requires more than luck… maybe a miracle!";

    message = "🔒 Door is Locked!";
  } else if (age < 58) {
    doorText =
      "😭😂 Your future wife is probably thinking, 'Bro, I've waited long enough!'";

    message = "🔒 Door is Locked!";
  } else if (age < 63) {
    doorText =
      "😂⏳ Your future wife may exist… but she's taking her sweet time!";

    message = "🔒 Door is Locked!";
  } else if(age > 63){
    doorText = "🏛️😂 Your future wife is now officially a historical mystery!";
  }else{
    doorText = "Please Enter Your Age!";
  }
  document.getElementById("door").innerHTML = doorText;
  document.getElementById("message").innerHTML =
    "🚫 No Marriage Found. Please Try Again in Another Life. 😂";
});
