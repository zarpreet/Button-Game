console.log("Script running...")

let lame = document.querySelector("#lame");

lame.addEventListener("mouseover", (e) => {
  console.log("on image");
  lame.src="catbuttondown2.png"
});
lame.addEventListener("mouseout", (e)=>{
  console.log("off image")
  lame.src="lame cat.png"
});