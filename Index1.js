/*Search bar JS Start*/


$("#searchBar").keyup(function (){
    let searchText = $(this).val().toLowerCase();

    $(".col").filter(function (){
      
      let cardText = $(this).text().toLowerCase();

      if(cardText.indexOf(searchText) > -1){
        $(this).show()
      }
      else{
        $(this).hide()
      }
    })
})


/*Search bar JS End*/


/*Cards Carousel JS Start*/

    // Get all cards and images
const cards = document.querySelectorAll('.card');
const galleryContainer = document.querySelector('.gallery-container');
const cardWidth = cards[0].offsetWidth;

// Initialize variables
let currentIndex = 0;
let interval;

// Function to update the current card
function updateCard() {
    galleryContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Function to move to the next card
function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard();
}

// Function to move to the previous card
function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCard();
}

// Start automatic sliding
function startSlider() {
    interval = setInterval(nextCard, 3000); // Change image every 3 seconds
}

// Stop automatic sliding
function stopSlider() {
    clearInterval(interval);
}

// Event listeners for card navigation
document.querySelector('.next-btn').addEventListener('click', nextCard);
document.querySelector('.prev-btn').addEventListener('click', prevCard);

// Start the automatic slider
startSlider();

// Pause the slider when hovering over the gallery
galleryContainer.addEventListener('mouseenter', stopSlider);

// Resume the slider when not hovering over the gallery
galleryContainer.addEventListener('mouseleave', startSlider);

/*Cards Carousel JS End*/



 /* Review slider javascript start */
//reviews data
const reviews = [
  {
    id: 1,
    name: "Robin Frost",
    job: "Reporter",
    img:
      "https://images.unsplash.com/photo-1568044852337-9bcc3378fc3c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzc4OA&ixlib=rb-1.2.1&q=85",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "Lawyer",
    img:
      "https://images.unsplash.com/photo-1620122303020-87ec826cf70d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4NzQ4Nw&ixlib=rb-1.2.1&q=85",
    text:
      "Porem ipsum , eius earum ipsam cupiditate libero? Iste, doloremque nihil? dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt...",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzg2NQ&ixlib=rb-1.2.1&q=85",
    text:
      "Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzg2NQ&ixlib=rb-1.2.1&q=85",
    text:
      "&ukuLorem ip Iste, doloremque nihil? sum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? ",
  },
];
// select items to change
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set first item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// save person data
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

/* Review slider javascript end */


