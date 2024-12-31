let bagItems;
onLoad();
function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function displayItemsOnHomePage() {
  let itemsContainer = document.querySelector(".items-container");
  let innerHTML = ``;
  items.forEach((item) => {
    innerHTML += `
    <div class="item-container">
        <img class="item-image" src="${item.image}" alt="Item Image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count} 
        </div>
        <div class="company-name">
            ${item.company}
        </div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discout">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to Bag</button>
    </div>`;
  });
  itemsContainer.innerHTML = innerHTML;
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function addToBag(itemID) {
  bagItems.push(itemID);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}
