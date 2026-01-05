/* ===============================
   INITIAL STATE
================================ */
window.onload = () => {
  loginSection.classList.remove("hidden");
  signupSection.classList.add("hidden");
  homeSection.classList.add("hidden");
  profileModal.classList.add("hidden");
  locationModal.classList.add("hidden");
};

/* ===============================
   AUTH DATA
================================ */
let username = "";
let password = "";

let profile = {
  name: "",
  email: ""
};

/* ===============================
   AUTH FUNCTIONS
================================ */
function showSignup() {
  loginSection.classList.add("hidden");
  signupSection.classList.remove("hidden");
}

function showLogin() {
  signupSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
}

function signup() {
  let user = signupUser.value.trim();
  let pass = signupPass.value.trim();

  if (user === "" || pass === "") {
    signupMsg.innerText = "All fields are required";
    signupMsg.style.color = "red";
    return;
  }

  username = user;
  password = pass;

  signupMsg.innerText = "Signup successful! Please login.";
  signupMsg.style.color = "green";
}

function login() {
  let user = loginUser.value.trim();
  let pass = loginPass.value.trim();

  if (user === username && pass === password) {
    loginSection.classList.add("hidden");
    signupSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    showAttractions();
  } else {
    loginMsg.innerText = "Invalid credentials";
    loginMsg.style.color = "red";
  }
}

function logout() {
  homeSection.classList.add("hidden");
  profileModal.classList.add("hidden");
  loginSection.classList.remove("hidden");
}

/* ===============================
   ATTRACTIONS DATA
================================ */
const attractions = [
  {
    name: "Taj Mahal",
    img: "https://source.unsplash.com/400x300/?tajmahal",
    desc: "Ivory-white marble mausoleum in Agra.",
    rating: 4.9
  },
  {
    name: "Hampi",
    img: "https://source.unsplash.com/400x300/?hampi",
    desc: "Ancient ruins of Vijayanagara Empire.",
    rating: 4.6
  },
  {
    name: "Charminar",
    img: "https://source.unsplash.com/400x300/?charminar",
    desc: "Iconic monument in Hyderabad.",
    rating: 4.4
  },
  {
    name: "Red Fort",
    img: "https://source.unsplash.com/400x300/?redfort",
    desc: "Historic fort in Delhi.",
    rating: 4.5
  },
  {
    name: "Qutub Minar",
    img: "https://source.unsplash.com/400x300/?qutubminar",
    desc: "Tallest brick minaret in the world.",
    rating: 4.3
  },
  {
    name: "Ajanta Caves",
    img: "https://source.unsplash.com/400x300/?ajanta",
    desc: "Buddhist cave paintings.",
    rating: 4.7
  },
  {
    name: "Ellora Caves",
    img: "https://source.unsplash.com/400x300/?ellora",
    desc: "Rock-cut cave temples.",
    rating: 4.6
  },
  {
    name: "Mysore Palace",
    img: "https://source.unsplash.com/400x300/?mysore-palace",
    desc: "Royal palace in Karnataka.",
    rating: 4.5
  },
  {
    name: "Sanchi Stupa",
    img: "https://source.unsplash.com/400x300/?sanchi",
    desc: "Buddhist stupa in Madhya Pradesh.",
    rating: 4.2
  }
];

/* ===============================
   ATTRACTIONS PAGE
================================ */
function showAttractions() {
  contentArea.innerHTML = `
    <h1>🏰 Tourist Attractions</h1>

    <div class="search-box">
      <input type="text" placeholder="Search locations..."
        onkeyup="filterAttractions(this.value)">
    </div>

    <div class="cards" id="cardsBox"></div>
  `;

  renderCards(attractions);
}

function renderCards(list) {
  cardsBox.innerHTML = list.map((a, i) => `
    <div class="card" onclick="openLocation(${i})">
      <img src="${a.img}" alt="${a.name}">
      <h3>${a.name}</h3>
      <p>${a.desc}</p>
    </div>
  `).join("");
}

function filterAttractions(value) {
  let filtered = attractions.filter(a =>
    a.name.toLowerCase().includes(value.toLowerCase())
  );
  renderCards(filtered);
}

/* ===============================
   LOCATION MODAL
================================ */
function openLocation(index) {
  let a = attractions[index];
  modalImg.src = a.img;
  modalTitle.innerText = a.name;
  modalDesc.innerText = a.desc;
  modalRating.innerText = "⭐".repeat(Math.round(a.rating)) + ` (${a.rating})`;
  locationModal.classList.remove("hidden");
}

function closeLocation() {
  locationModal.classList.add("hidden");
}

/* ===============================
   OTHER NAV SECTIONS
================================ */
function showRestaurants() {
  contentArea.innerHTML = `
    <h1>🍽️ Restaurants</h1>
    <p>Discover popular food destinations.</p>
  `;
}

function showHotels() {
  contentArea.innerHTML = `
    <h1>🏨 Hotels</h1>
    <p>Find comfortable and heritage stays.</p>
  `;
}

function showContact() {
  contentArea.innerHTML = `
    <h1>📞 Contact Us</h1>
    <p>Email: exploreindia@gmail.com</p>
    <p>Phone: +91 98765 43210</p>
  `;
}

/* ===============================
   PROFILE MODAL
================================ */
function openProfile() {
  pUser.innerText = username;
  pName.innerText = profile.name || "-";
  pEmail.innerText = profile.email || "-";
  profileView.classList.remove("hidden");
  profileEdit.classList.add("hidden");
  profileModal.classList.remove("hidden");
}

function closeProfile() {
  profileModal.classList.add("hidden");
}

function editProfile() {
  editName.value = profile.name;
  editEmail.value = profile.email;
  profileView.classList.add("hidden");
  profileEdit.classList.remove("hidden");
}

function saveProfile() {
  profile.name = editName.value.trim();
  profile.email = editEmail.value.trim();
  openProfile();
}

function cancelEdit() {
  profileEdit.classList.add("hidden");
  profileView.classList.remove("hidden");
}
