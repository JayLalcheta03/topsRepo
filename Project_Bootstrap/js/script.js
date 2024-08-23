const signInBtn = document.getElementById("sign-in-btn");
const darkModeBtn = document.getElementsByClassName("dark-mode")[0];
const body = document.querySelector("body");
let userEmail = document.getElementById("useremail");
let userPass = document.getElementById("userpass");
let signUpBtn = document.getElementById("sign-up-btn");
const registerLink = document.getElementById("go-to-sign-up");
const signInForm = document.getElementById("sign-in-form");
const signUpForm = document.getElementById("sign-up-form");
const signInLink = document.getElementById("sign-in-link");

let getMode = localStorage.getItem("mode");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-active");
  var modeolor = body.classList.contains("dark-mode-active");
  if (modeolor == true) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});
if (signInBtn != null) {
  signInBtn.addEventListener("click", () => {
    let { email, pass } = getUserDetails(userEmail.value);
    if (userEmail.value == email && userPass.value == pass) {
      alert("success");
    } else {
      alert("! Wrong email Id or Password");
    }
  });
}
function getUserDetails(email) {
  let userDataString = localStorage.getItem(email);
  let userData = JSON.parse(userDataString);
  console.log(userData);

  return {
    email: userData?.email || "nodata",
    pass: userData?.pass || "nodata",
  };
}

function isUserExist() {}
if (signUpBtn != null) {
  signUpBtn.addEventListener("click", () => {
    const userFName = document.getElementById("user-f-name");
    const userLName = document.getElementById("user-l-name");
    userEmail = document.getElementById("useremail-sign-up");
    userPass = document.getElementById("userpass-sign-up");

    console.log(userFName);

    addUserDetails(
      userFName.value,
      userLName.value,
      userEmail.value,
      userPass.value
    );
  });
}

function addUserDetails(fname, lname, email, pass) {
  let userDataString = JSON.stringify({
    fname: fname,
    lname: lname,
    email: email,
    pass: pass,
  });

  console.log(userDataString);

  localStorage.setItem(email, userDataString);

  alert("You registered successfully");
}
if (registerLink != null) {
  registerLink.addEventListener("click", () => {
    signInForm.classList.add("d-none");
    signUpForm.classList.remove("d-none");
    signUpBtn = document.getElementById("sign-up-btn");
  });
}
if (signInLink != null) {
  signInLink.addEventListener("click", () => {
    const signInForm = document.getElementById("sign-in-form");
    signUpForm.classList.add("d-none");
    signInForm.classList.remove("d-none");
  });
}

let testimonialData = [
  {
    img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Maria Smantha",
    desc: "Lorem ipsum dolor sit amet eos adipisci,consectetur adipisicing elit",
  },
  {
    img: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "John Doe",
    desc: "Lorem ipsum dolor sit amet eos adipisci,consectetur adipisicing elit",
  },
  {
    img: "https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Maria Smantha",
    desc: "Lorem ipsum dolor sit amet eos adipisci,consectetur adipisicing elit",
  },
];

function makeCard(img, name, desc) {
  return `
      <div class="card testimonial-card">
        <div class="card-up">
        <div class="avatar" style="background-color:  #9d789b;" >
        <img src="${img}"
        class="rounded-circle img-fluid p-3" style="height:250px; width:250px; object-fit:cover" />
        </div>
        </div>
        <div class="card-body">
          <h4 class="mb-4">${name}</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>${desc}
          </p>
        </div>
      </div>`;
}

let loadMoreBtn = document.getElementById("load-more");
let testimonialCards = document.getElementById("testimonial-cards");

loadMoreBtn.addEventListener("click", () => loadMoreCards());

function loadMoreCards() {
  for (let i = 0; i < testimonialData.length; i++) {
    let card = document.createElement("div");
    card.classList.add(
      "col-md-4",
      "mb-5",
      "mb-md-0",
      "d-flex",
      "align-items-stretch"
    );
    card.innerHTML = makeCard(
      testimonialData[i].img,
      testimonialData[i].name,
      testimonialData[i].desc
    );
    loadMoreBtn.style.display = "none";
    testimonialCards.append(card);
  }
}
