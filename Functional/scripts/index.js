let itemsContainer = document.querySelector(".items-container");

let item = {
  image: "images/1.jpg",
  rating: {
    stars: 4.5,
    count: 1400,
  },
  company: "Carlton London",
  item_name: "Rhodium-Plated CZ Floral Studs",
  current_price: 606,
  original_price: 1045,
  discount_percentage: 42,
};

itemsContainer.innerHTML = `
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
    <button class="btn-add-bag">Add to Bag</button>
</div>`;
