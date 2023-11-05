console.log("Script running...")

let evil = document.querySelector("#evil");

evil.addEventListener("mouseover", (e) => {
  console.log("on image");
  evil.src="laughing evilcat.png"
});
evil.addEventListener("mouseout", (e)=>{
  console.log("off image")
  evil.src="EvilCat2.png"
});