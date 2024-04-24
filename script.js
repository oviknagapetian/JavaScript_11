import { featuredItemsData } from './data.js';

// Function to render featured items
function renderFeaturedItems() {
    const featuredItemsContainer = document.getElementById('featuredItemsContainer');

    featuredItemsData.forEach(item => {
        const featuredItemHTML = `
            <div class="featured-item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <p>${item.description}</p>
            </div>
        `;
        featuredItemsContainer.insertAdjacentHTML('beforeend', featuredItemHTML);
    });
}

// Call the function to render featured items
renderFeaturedItems();
