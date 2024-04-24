document.addEventListener("DOMContentLoaded", function () {
    // Variable to keep track of whether the coupon has been applied
    var couponApplied = false;

    // Function to handle removing items from the cart
    function handleRemoveItem() {
        document.querySelectorAll("#cart .far.fa-times-circle").forEach(function (icon) {
            icon.addEventListener("click", function (event) {
                event.preventDefault();
                var row = this.closest("tr");
                row.remove();
                updateCartTotal(); // Update subtotal after removing item
            });
        });
    }

    // Function to handle changing quantity
    function handleQuantityChange() {
        document.querySelectorAll("#cart input[type='number']").forEach(function (input) {
            input.addEventListener("change", function () {
                var row = this.closest("tr");
                var price = parseFloat(row.querySelector("td:nth-child(4)").textContent.replace("$", ""));
                var quantity = parseInt(this.value);
                if (quantity < 0) { // Ensure quantity is not below 0
                    this.value = 0;
                    quantity = 0;
                }
                var subtotal = price * quantity;
                row.querySelector("td:nth-child(6)").textContent = "$" + subtotal.toFixed(2);
                // Update subtotal after changing quantity
                updateCartTotal();
            });

            input.addEventListener("input", function () {
                var row = this.closest("tr");
                var price = parseFloat(row.querySelector("td:nth-child(4)").textContent.replace("$", ""));
                var quantity = parseInt(this.value);
                if (quantity < 0) { // Ensure quantity is not below 0
                    this.value = 0;
                    quantity = 0;
                }
                var subtotal = price * quantity;
                row.querySelector("td:nth-child(6)").textContent = "$" + subtotal.toFixed(2);
            });
        });
    }

    // Function to update cart subtotal and total
    function updateCartTotal() {
        var subtotal = 0;
        // Loop through each row in the cart
        document.querySelectorAll("#cart tbody tr").forEach(function (row) {
            // Get the quantity and price for each row
            var quantity = parseInt(row.querySelector("input[type='number']").value);
            var price = parseFloat(row.querySelector("td:nth-child(4)").textContent.replace("$", ""));
            // Calculate the subtotal for each row and add it to the total
            subtotal += price * quantity;
        });

        // Apply coupon code discount if valid and not already applied
        if (!couponApplied && validateCoupon()) {
            var couponCode = document.querySelector("#cuopon input").value.trim();
            if (couponCode === "cart"||"cash") { // Check if coupon code is "#cart"
                alert("Kuponi juaj u aplikua me sukses. FALEMINDERIT!");
                var discount = subtotal * 0.7; // Calculate 70% discount
                subtotal -= discount; // Apply discount to subtotal
                couponApplied = true; // Set coupon applied to true
            }
        }

        // Update the subtotal and total in the cart summary
        document.querySelectorAll("#subtotal tbody td:nth-child(2)").forEach(function (td) {
            if (td.textContent.trim().startsWith("$")) {
                td.textContent = "$" + subtotal.toFixed(2);
            }
        });
    }

   // Function to validate coupon code
function validateCoupon() {
    var couponInput = document.querySelector("#cuopon input");
    var couponCode = couponInput.value.trim();
    
    // Check if the coupon has not been applied and coupon code is empty
    if (!couponApplied && couponCode === "") {
        return true; // Return true to allow quantity changes without coupon validation
    }
    
    // Check if the coupon has not been applied and coupon code is less than 4 characters
    if (!couponApplied && couponCode.length < 4) {
        alert("Please write a 4 or more character coupon.");
        return false;
    }
    return true;
}



    // Call the functions to set up event listeners
    handleRemoveItem();
    handleQuantityChange();

    // Apply coupon
    document.querySelector("#cart-add button.normal").addEventListener("click", function () {
        updateCartTotal(); // Update subtotal after applying coupon
    });

    // Proceed to checkout
    document.querySelector("#subtotal button.normal").addEventListener("click", function () {
        // Redirect to checkout page
        alert("Thank you for your purchase!");
    });
});
