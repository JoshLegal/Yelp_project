const campGrounds = [
    {
      id: 1,
      name: "Pine Ridge Campground",
      description: "Nestled deep in the forest, Pine Ridge Campground offers a serene escape for nature enthusiasts. Enjoy hiking trails, birdwatching, and peaceful nights under the starry sky.",
      image: "images/pexels-sagui-andrea-618848.jpg",
      button: "View Campground"
    },
    {
      id: 2,
      name: "Lakeview Campsite",
      description: "Situated on the shores of a pristine mountain lake, Lakeview Campsite is a water lover's paradise. Fish, swim, and kayak during the day, and gather around the campfire at night.",
      image: "images/pexels-robert-forever-ago-2516423.jpg",
      button: "View Campground"
    },
    {
      id: 3,
      name: "Mountain Haven Retreat",
      description: "Experience the breathtaking beauty of the mountains at Mountain Haven Retreat. This campground is a haven for hikers, with numerous trails that lead to panoramic vistas.",
      image: "images/pexels-robert-forever-ago-2496880.jpg",
      button: "View Campground"
    },
    {
      id: 4,
      name: "Riverbend Campground",
      description: "Camp along the scenic riverbanks at Riverbend Campground. Listen to the soothing sounds of the river as you relax by your campfire and enjoy water activities like tubing and fishing.",
      image: "images/pexels-matthew-devries-2526025.jpg",
      button: "View Campground"
    },
    {
      id: 5,
      name: "Desert Oasis Campground",
      description: "Discover the wonders of the desert at Desert Oasis Campground. With its unique landscapes and cactus-studded terrain, it's a perfect spot for stargazing and off-roading adventures.",
      image: "images/pexels-guduru-ajay-bhargav-939723.jpg",
      button: "View Campground"
    },
    {
      id: 6,
      name: "Seaside Cove Campground",
      description: "Seaside Cove Campground offers a coastal camping experience with breathtaking ocean views. Explore tide pools, go beachcombing, and fall asleep to the sound of crashing waves.",
      image: "images/pexels-cliford-mervil-2398220.jpg",
      button: "View Campground"
    },
  ];
  
  const cardContainer = document.querySelector('#card-container');
  
  function generateCardHTML(camp) {
    return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 hover:scale-[1.05] hover:shadow-lg input" key="${camp.id}">
              <img class="rounded-lg w-full" src="${camp.image}" alt="${camp.name}"/>
              <h4 class="text-lg font-bold">${camp.name}</h4>
              <p class="text-slate-600">${camp.description}</p>
              <a href="page2.html?id=${camp.id}" class="view-button text-center input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none"><button data-index="${camp.id}">${camp.button}</button></a>
            </div>`;
  }
  
  function renderCards(camps) {
    const cardHTML = camps.map(generateCardHTML).join('');
    cardContainer.innerHTML = cardHTML;
  }
  
  renderCards(campGrounds);
  
  const searchBtn = document.querySelector('#btn');
  
  searchBtn.addEventListener('click', () => {
    const inputValue = document.querySelector('input[type="text"]').value.toLowerCase();
    const filteredCamps = campGrounds.filter(camp => camp.name.toLowerCase().includes(inputValue));
    renderCards(filteredCamps);
  });
  
  const popup = document.querySelector('#popupContainer');
  const openPopupButton = document.querySelector('#addDetails');
  const closePopupButton = document.querySelector('#closePopupButton');
  const submitNewDetails = document.querySelector('#addCamp');
  
  function openPopup() {
    popup.style.display = 'block';
  }
  
  function closePopup() {
    popup.style.display = 'none';
  }
  
  openPopupButton.addEventListener('click', openPopup);
  closePopupButton.addEventListener('click', closePopup);
  
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
        closePopup();
    }
  });
  
  submitNewDetails.addEventListener('click', (e) => {
    e.preventDefault();
  
    const nameDetails = document.querySelector('#nameOfCampGround').value;
    const descriptionDetails = document.querySelector('#description').value;
    const imageDetails = document.querySelector('#imageOfCampGround').value;
  
    const newDetail = {
        name: nameDetails,
        description: descriptionDetails,
        image: imageDetails,
        button: "View Campground"
    };
  
    campGrounds.unshift(newDetail);
    renderCards(campGrounds);
  });
  
  const menu = document.querySelector("#Menu-btn")
  const showMenu = document.querySelector("#show-menu")
  const closeBtn = document.querySelector('#close-btn')
  
  menu.addEventListener('click', () => {
    showMenu.classList.remove('hidden')
    showMenu.classList.add('block')
  })
  closeBtn.addEventListener('click', () => {
    showMenu.classList.add('hidden')
  })
  
  const body = document.querySelector('#body')
  
  window.addEventListener('click', (event) => {
    if (event.target === body) {
      showMenu.classList.add('hidden')
    }
  });
  