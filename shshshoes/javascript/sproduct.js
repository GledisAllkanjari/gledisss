// Get the product identifier from the URL
var params = new URLSearchParams(window.location.search);
var productId = params.get('product');

// Set the src attribute of the MainImg with the corresponding image path
var MainImg = document.getElementById("MainImg");
var productImgSrc;

// Check if the product ID is in the range of 1 to 8
if (productId >= 1 && productId <= 8) {
    productImgSrc = `../img/A${productId}.png`; // Assuming the product images follow the pattern A1.png, A2.png, ...
} else if (productId >= 9 && productId <= 16) {
    productImgSrc = `../img/other${productId - 8}.png`; // Adjusting the ID offset for images starting from f1.jpg to f8.jpg
} else if (productId >= 17 && productId <= 32) {
    productImgSrc = `../img/images-1/products/f${productId - 16}.jpg`; // Adjusting the ID offset for images starting from f1.jpg to f8.jpg
} else if (productId >=33 && productId <=40) {
    productImgSrc = `../img/adidas${productId - 32}.png`;
} else if (productId >=41 && productId <=48) {
    productImgSrc = `../img/puma${productId - 40}.png`;
} else if (productId >= 49 && productId <=56){
    productImgSrc = `../img/reebok${productId - 48}.png`;
} else if (productId >=57 && productId <=64){
    productImgSrc = `../img/newbalance${productId - 56}.png`;
} else if (productId >=65 && productId <=72){
    productImgSrc = `../img/jordan${productId - 64}.png`;
} else if (productId >= 73 && productId <=80){
    productImgSrc = `../img/nike${productId - 72}.png`;
}


MainImg.src = productImgSrc;

// Define an object to store product details based on productId
var productDetails = {
    1: { brand: "Vans", name: "Old Skool Trainers", price: "70€", details: "Product details for Vans Old Skool Trainers." },
    2: { brand: "Converse", name: "All Star Hi Trainers", price: "50€", details: "Product details for Converse All Star Hi Trainers." },
    3: { brand: "Vagabond Shoemakers", name: "Delia Mary Jane Shoes", price: "90€", details: "Product details for Delia Mary Jane Shoes." },
    4: { brand: "UGG", name: "Goldenstar Clogs", price: "50€", details: "Product details for Goldenstar Clogs." },
    5: { brand: "Office", name: "Cliveden Suede Driving Shoes", price: "130€", details: "Product details for Cliveden Suede Driving Shoes." },
    6: { brand: "Crocs", name: "Brooklyn Low Wedge Sandals", price: "70€", details: "Product details for Crocs." },
    7: { brand: "New Balance", name: "Mr530 Trainers", price: "120€", details: "Product details for Mr530 Trainers." },
    8: { brand: "Vans", name: "Old Skool Trainers", price: "70€", details: "Product details for Old Skool Trainers." },

    // Add details for other products here...
    9: { brand: "Adidas", name: "Samba OG Trainers", price: "100€", details: "Product details for Adidas Samba OG Trainers." },
    10: { brand: "Converse", name: "All Star Hi Trainers", price: "80€", details: "Product details for Converse All Star Hi Trainers." },
    11: { brand: "Nike", name: "Dunk Low Trainers", price: "90€", details: "Product details for Nike Dunk Low Trainers." },
    12: { brand: "New Balance", name: "Mr530 Trainers", price: "120€", details: "Product details for New Balance Mr530 Trainers." },
    13: { brand: "Nike", name: "Dunk Low Trainers", price: "130€", details: "Product details for Nike Dunk Low Trainers." },
    14: { brand: "Puma", name: "Palermo Trainers", price: "110€", details: "Product details for Puma Palermo Trainers." },
    15: { brand: "Reebok", name: "Club C Grounds Trainers", price: "90€", details: "Product details for Reebok Club C Grounds Trainers." },
    16: { brand: "Adidas", name: "Air Jordan 1 Mid Trainers", price: "70€", details: "Product details for Adidas Air Jordan 1 Mid Trainers." },
    17: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    18: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    19: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    20: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    21: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    22: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    23: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    24: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    25: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    26: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    27: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    28: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    29: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    30: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    31: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    32: { brand: "Adidas", name: "Cartoon Astronaut T-Shirts", price: "$78", details: "Product details for Adidas Cartoon Astronaut T-Shirts." },
    33: { brand: "Adidas", name: "Samba OG Trainers", price: "100€", details: "Product details for Adidas Samba OG Trainers." },
    34: { brand: "Adidas", name: "Samba OG Trainers", price: "100€", details: "Product details for Adidas Samba OG Trainers." },
    35: { brand: "Adidas", name: "Samba OG Trainers", price: "100€", details: "Product details for Adidas Samba OG Trainers." },
    36: { brand: "Adidas", name: "Samba OG Trainers", price: "100€", details: "Product details for Adidas Samba OG Trainers." },
    37: { brand: "Adidas", name: "SL 72 Trainers", price: "100€", details: "Product details for Adidas SL 72 Trainers." },
    38: { brand: "Adidas", name: "SL 72 Trainers", price: "100€", details: "Product details for Adidas SL 72 Trainers." },
    39: { brand: "Adidas", name: "SL 72 Trainers", price: "100€", details: "Product details for Adidas SL 72 Trainers." },
    40: { brand: "Adidas", name: "SL 72 Trainers", price: "100€", details: "Product details for Adidas SL 72 Trainers." },
    41: { brand: "Puma", name: "Palermo Trainers", price: "70€", details: "Product details for Puma Palermo Trainers." },
    42: { brand: "Puma", name: "Palermo Trainers", price: "70€", details: "Product details for Puma Palermo Trainers." },
    43: { brand: "Puma", name: "Palermo Trainers", price: "70€", details: "Product details for Puma Palermo Trainers." },
    44: { brand: "Puma", name: "Palermo Trainers", price: "70€", details: "Product details for Puma Palermo Trainers." },
    45: { brand: "Puma", name: "Palermo Trainers", price: "70€", details: "Product details for Puma Palermo Trainers." },
    46: { brand: "Puma", name: "Palermo Trainers", price: "70€", details: "Product details for Puma Palermo Trainers." },
    47: { brand: "Puma", name: "Palermo Trainers", price: "70€", details: "Product details for Puma Palermo Trainers." },
    48: { brand: "Puma", name: "Palermo Trainers", price: "70€", details: "Product details for Puma Palermo Trainers." },
    49: { brand: "Reebok", name: "Club C Grounds Trainers", price: "80€", details: "Product details for Reebok Club C Grounds Trainers." },
    50: { brand: "Reebok", name: "Club C Grounds Trainers", price: "80€", details: "Product details for Reebok Club C Grounds Trainers." },
    51: { brand: "Reebok", name: "Club C Grounds Trainers", price: "80€", details: "Product details for Reebok Club C Grounds Trainers." },
    52: { brand: "Reebok", name: "Club C Grounds Trainers", price: "80€", details: "Product details for Reebok Club C Grounds Trainers." },
    53: { brand: "Reebok", name: "Club C Grounds Trainers", price: "80€", details: "Product details for Reebok Club C Grounds Trainers." },
    54: { brand: "Reebok", name: "Club C Grounds Trainers", price: "80€", details: "Product details for Reebok Club C Grounds Trainers." },
    55: { brand: "Reebok", name: "Club C Grounds Trainers", price: "80€", details: "Product details for Reebok Club C Grounds Trainers." },
    56: { brand: "Reebok", name: "Club C Grounds Trainers", price: "80€", details: "Product details for Reebok Club C Grounds Trainers." },
    57: { brand: "New Balance", name: "Mr530 Trainers", price: "110€", details: "Product details for New Balance Mr530 Trainers." },
    58: { brand: "New Balance", name: "Mr530 Trainers", price: "110€", details: "Product details for New Balance Mr530 Trainers." },
    59: { brand: "New Balance", name: "Mr530 Trainers", price: "110€", details: "Product details for New Balance Mr530 Trainers." },
    60: { brand: "New Balance", name: "Mr530 Trainers", price: "110€", details: "Product details for New Balance Mr530 Trainers." },
    61: { brand: "New Balance", name: "Mr530 Trainers", price: "110€", details: "Product details for New Balance Mr530 Trainers." },
    62: { brand: "New Balance", name: "Mr530 Trainers", price: "110€", details: "Product details for New Balance Mr530 Trainers." },
    63: { brand: "New Balance", name: "Mr530 Trainers", price: "110€", details: "Product details for New Balance Mr530 Trainers." },
    64: { brand: "New Balance", name: "Mr530 Trainers", price: "110€", details: "Product details for New Balance Mr530 Trainers." },
    65: { brand: "Jordan", name: "Air Jordan 1 Mid Trainers", price: "130€", details: "Product details for Air Jordan 1 Mid Trainers." },
    66: { brand: "Jordan", name: "Air Jordan 1 Mid Trainers", price: "130€", details: "Product details for Air Jordan 1 Mid Trainers." },
    67: { brand: "Jordan", name: "Air Jordan 1 Mid Trainers", price: "130€", details: "Product details for Air Jordan 1 Mid Trainers." },
    68: { brand: "Jordan", name: "Air Jordan 1 Mid Trainers", price: "130€", details: "Product details for Air Jordan 1 Mid Trainers." },
    69: { brand: "Jordan", name: "Air Jordan 1 Mid Trainers", price: "130€", details: "Product details for Air Jordan 1 Mid Trainers." },
    70: { brand: "Jordan", name: "Air Jordan 1 Mid Trainers", price: "130€", details: "Product details for Air Jordan 1 Mid Trainers." },
    71: { brand: "Jordan", name: "Air Jordan 1 Mid Trainers", price: "130€", details: "Product details for Air Jordan 1 Mid Trainers." },
    72: { brand: "Jordan", name: "Air Jordan 1 Mid Trainers", price: "130€", details: "Product details for Air Jordan 1 Mid Trainers." },
    73: { brand: "Nike", name: "Dunk Low Trainers", price: "120€", details: "Product details for Nike Dunk Low Trainers." },
    74: { brand: "Nike", name: "Dunk Low Trainers", price: "120€", details: "Product details for Nike Dunk Low Trainers." },
    75: { brand: "Nike", name: "Dunk Low Trainers", price: "120€", details: "Product details for Nike Dunk Low Trainers." },
    76: { brand: "Nike", name: "Dunk Low Trainers", price: "120€", details: "Product details for Nike Dunk Low Trainers." },
    77: { brand: "Nike", name: "Dunk Low Trainers", price: "120€", details: "Product details for Nike Dunk Low Trainers." },
    78: { brand: "Nike", name: "Dunk Low Trainers", price: "120€", details: "Product details for Nike Dunk Low Trainers." },
    79: { brand: "Nike", name: "Dunk Low Trainers", price: "120€", details: "Product details for Nike Dunk Low Trainers." },
    80: { brand: "Nike", name: "Dunk Low Trainers", price: "120€", details: "Product details for Nike Dunk Low Trainers." }
};


// Update product details based on productId
document.getElementById("productBrand").innerText = productDetails[productId].brand;
document.getElementById("productName").innerText = productDetails[productId].name;
document.getElementById("productPrice").innerText = productDetails[productId].price;
document.getElementById("productDetails").innerText = productDetails[productId].details;

document.addEventListener("DOMContentLoaded", function() {
    var originalPrice = parseFloat(document.getElementById('productPrice').innerText.replace('€', '').replace(',', ''));

    // Function to update product price based on quantity
    function updateProductPrice() {
        // Get the quantity input element
        var quantityInput = document.querySelector('.single-pro-details input[type="number"]');
        // Get the product price element
        var productPriceElement = document.getElementById('productPrice');

        // Update product price based on quantity, ensuring it's not negative
        var quantity = parseInt(quantityInput.value);
        if (quantity < 0) {
            quantityInput.value = 0; // Prevent negative values
            quantity = 0;
        }
        var totalPrice = originalPrice * quantity;
        productPriceElement.innerText = formatPrice(totalPrice) + "€"; // Format the price and add the euro sign
    }

    // Function to format the price with two decimal places and commas for thousands
    function formatPrice(price) {
        return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    // Initial update of product price
    updateProductPrice();

    // Add event listener to the quantity input field
    var quantityInput = document.querySelector('.single-pro-details input[type="number"]');
    quantityInput.addEventListener('change', function() {
        updateProductPrice(); // Update product price when quantity changes
    });
});

