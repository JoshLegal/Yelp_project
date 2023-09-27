const campData = [
    {
      id: 1,
      images: "images/BuloySprings.jpg",
      name: "Pine Ridge Campground",
      amount: "$104.99/night",
      description: "Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.",
      person: "Submitted by Andrew Mike",
    },
    { 
      id: 2,
      images: "images/CalaguasIsland.jpg",
      name: "Lakeview Campsite",
      amount: "$89.99/night",
      description: "This serene campground is nestled in the heart of the forest, offering a peaceful retreat for nature enthusiasts. Enjoy hiking and birdwatching during your stay.",
      person: "Submitted by Sarah Johnson",
    },
    { 
      id: 3,
      images: "images/LatikRiverside.jpg",
      name: "Mountain Haven Retreat",
      amount: "$124.99/night",
      description: "Experience the tranquility of this lakeside campground. You can fish, kayak, and stargaze by the campfire. Perfect for a family getaway.",
      person: "Submitted by David Smith",
    },
    { 
      id: 4,
      images: "images/SevenSistersWaterfall.jpg",
      name: "Riverbend Campground",
      amount: "$95.99/night",
      description: "Find solace in this secluded forest haven. Surrounded by towering trees, it's an ideal spot for those seeking a peaceful escape.",
      person: "Submitted by Emily Clark",
    },
    { 
      id: 5,
      images: "images/MountUlap.jpg",
      name: "Desert Oasis Campground",
      amount: "$119.99/night",
      description: "Enjoy breathtaking mountain views from this campsite. Hike to the nearby peaks and be rewarded with stunning vistas.",
      person: "Submitted by Michael Davis",
    },
    {
      id: 6,
      images: "images/OnayBeach.jpg",
      name: "Seaside Cove Campground",
      amount: "$149.99/night",
      description: "This coastal campground offers beachfront access. Listen to the soothing sound of waves as you relax in your tent or RV.",
      person: "Submitted by Lisa Rodriguez",
    },
  ];
  
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  const selectedCamp = campData.find(camp => camp.id == id);
  
  if (selectedCamp) {
      const detailsHTML = `
        <div class="bg-white m-4 sm:m-2">
          <img class="w-full object-cover" src="${selectedCamp.images}" alt="${selectedCamp.name}"/>
          <div class="">
            <div class="flex justify-between py-2">
              <span class="text-l font-bold text-gray-800"> ${selectedCamp.name}</span>
              <span class="text-gray-600 text-m mt-2">${selectedCamp.amount}</span>
            </div>
            <p class="text-gray-700 text-m mt-2 pb-5">${selectedCamp.description}</p>
            <p class="text-gray-500 text-sm italic mt-2">${selectedCamp.person}</p>
          </div>
        </div>
      `;
  
      const detailsContainer = document.getElementById('detailsContainer');
      detailsContainer.innerHTML = detailsHTML;
  } else {
      const errorMessage = '<p>Campground not found.</p>';
      const detailsContainer = document.getElementById('detailsContainer');
      detailsContainer.innerHTML = errorMessage;
  }
  
  const campingReviews = [
    {
      name: "John Doe",
      time: "September 10, 2023",
      description: "I had an amazing time camping in the wilderness. The weather was perfect, and the scenery was breathtaking. Definitely, a must-visit spot for nature lovers!"
    },
    {
      name: "Jane Smith",
      time: "August 25, 2023",
      description: "Camping here was an unforgettable experience. The campsite was well-maintained, and the staff was friendly. The starry night sky was a highlight. I'll be back for sure!"
    },
    {
      name: "David Wilson",
      time: "July 5, 2023",
      description: "Our family had a fantastic camping trip. The kids loved exploring the woods, and we enjoyed cooking over the campfire. It's a great place for a weekend getaway."
    }
  ];
  
  const feedbackContainer = document.querySelector("#feedbackContainer");
  
  function generateReviewHTML(camp) {
      return    `<div class="border-b-2 border-solid rounded items-center w-100">
                <div class="flex justify-between py-5">
                  <span class="font-bold text-l text-black">${camp.name}</span>
                  <span class="text-sm text-black">${camp.time}</span>
                </div>
                <p class="text-sm pb-2">${camp.description}</p>
              </div>`;
  }
  
  
  const btn = `<div class="flex justify-end"><button id="addReviewBtn" class="bg-black text-lg text-white p-3">Leave a review</button></div>`;
  
  function renderCards(camps) {
      const groundInfoHTML = camps.map(generateReviewHTML).join('');
      feedbackContainer.innerHTML = groundInfoHTML + btn;
  }
  
  renderCards(campingReviews);
  
  const popup = document.querySelector('#popupContainer');
  const openPopupButton = document.querySelector('#addReviewBtn');
  const closePopupButton = document.querySelector('#closePopupButton');
  const submitNewDetails = document.querySelector('#addReview');
  
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
  
    const nameDetails = document.querySelector('#nameOfReviewer').value;
    const descriptionDetails = document.querySelector('#description').value;
  
    const newDetail = {
      name: nameDetails,
      time: `${new Date().getSeconds()} seconds ago`,
      description: descriptionDetails
    };
  
    campingReviews.unshift(newDetail);
    renderCards(campingReviews);
  })
  