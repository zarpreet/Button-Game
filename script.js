console.log("Script running...")

let left = ["Voting age will be changed to 16","All drugs can be purchased legally at the age of 21","The artist will be separated from the art","Student debt will be paid off by the government","Minimum retirement age will be 50","Sex education will be taught in schools","Minimum wage will be increased to a liveable wage","Racial preference in dating/marriage is acceptable","Teachers will be allowed to perform corporal punishment","The prison system in America will be reformed","The distribution of hormone manipulating drugs will be free","Artificial skin tanning will be banned","Billionaires will be taxed more","Gun laws will be stricter","Scientists/pyschologists will be funded more","The police will be defunded in favor of funding for education and healthcare","The death penalty is an acceptable form of punishment","All old people will be put into retirement homes","Abortions are legalized everywhere","Transgender people are able to participate in sports","No one can ever be hacked"];
let right = ["The age of getting a license increases to 21","Medical drugs are no longer covered by insurance","Artists no longer need to show appreciation for their fans","People are only allowed to work jobs the government chooses for them","The rule will only apply if you own a successful business","Parents are excluded from school boards","The wage is only enough to support one person","Interracial relationships are banned","There is no limit to how much punishment a child will receive","This only applies to criminals with non-violent offenses","This rule does not apply to anyone under the age of 18","Skin lightening creams are promoted","The inflation rate each year increases 30%","All mass murderers will gun charges will be exonerated","They are allowed to conduct unethical experiments","All crime is leagal for 4 hours a day at any time","It can only be carried out by extreme torture","Once they hit 75, they are euthanized","Doctors can only abort babies with genetic mutations","Gendered sports are no longer legal","The dark web is easily accessible to anyone"];
let index = 0

let catup = document.querySelector("#catup");
console.log(catup);
let leftbox = document.querySelector("#left");
let rightbox = document.querySelector("#right");
console.log(rightbox)

let counter = 0
let nocounter = 0

catup.addEventListener("mouseover", (e)=>{
  console.log("on image")
  catup.src="catbuttondown2.png"
});
catup.addEventListener("mouseout", (e)=>{
  console.log("off image")
  catup.src="catbutton2.png"
});

catup.addEventListener("click", (e) =>{
  index = index + 1;
  leftbox.innerText = left [index];
  rightbox.innerText = right [index];
  counter = counter + 1;
  console.log (counter)
  if(index==20){
    document.location.href ="endscreen.html";
  }
});

let no = document.querySelector("#no");
no.addEventListener("click", (e) => {
  index = index + 1;
  leftbox.innerText = left [index];
  rightbox.innerText = right [index];
  nocounter = nocounter + 1;
  console.log (nocounter)
  if(nocounter==20){
    document.location.href="lame.html";
  }
});

