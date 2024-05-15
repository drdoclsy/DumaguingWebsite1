
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const removeItemButtons = document.querySelectorAll(".remove-item");
    const itemQuantityInputs = document.querySelectorAll(".item-quantity");
    const itemPriceElements = document.querySelectorAll(".item-price");
    const subtotalElement = document.querySelector("#cart-subtotal");
    const totalElement = document.querySelector("#total");
    const applyDiscountButton = document.querySelector("#coupon button");

    let discountApplied = false; // Flag to track if discount is already applied

    // Function to update cart totals
    function updateCartTotals() {
        let subtotal = 0;
        itemPriceElements.forEach((priceElement, index) => {
            const price = parseInt(priceElement.textContent.replace("PHP ", ""));
            const quantity = parseInt(itemQuantityInputs[index].value);
            subtotal += price * quantity;
        });
        
        const discount = getDiscount();
        const discountedSubtotal = subtotal - discount;

        subtotalElement.textContent = "PHP " + discountedSubtotal;
        totalElement.textContent = "PHP " + (discountedSubtotal); // Update total without discount
    }

    // Function to calculate discount
    function getDiscount() {
        return discountApplied ? Math.floor(parseInt(subtotalElement.textContent.replace("PHP ", "")) * 0.1) : 0;
    }

    // Initial cart total calculation
    updateCartTotals();

    // Add event listeners for adding items to cart
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const price = parseInt(button.parentNode.previousElementSibling.textContent.replace("PHP ", ""));
            updateCartTotals(price);
        });
    });

    // Add event listeners for removing items from cart
    removeItemButtons.forEach(button => {
        button.addEventListener("click", function() {
            const row = button.closest("tr");
            const price = parseInt(row.querySelector(".item-price").textContent.replace("PHP ", ""));
            const quantity = parseInt(row.querySelector(".item-quantity").value);
            row.remove();
            updateCartTotals(); // Recalculate totals after removing item
        });
    });

    // Add event listeners for changing item quantities
    itemQuantityInputs.forEach(input => {
        input.addEventListener("change", updateCartTotals);
    });

    // Add event listener for applying discount
    applyDiscountButton.addEventListener("click", function() {
        const discountCode = document.querySelector("#coupon input").value;
        if (!discountApplied && discountCode === "TWICEISLIFE") {
            discountApplied = true; // Set flag to true
            updateCartTotals(); // Recalculate totals after applying discount
        } else {
            alert("The code does not exist or can only be redeemed once.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#show-login").addEventListener("click", function() {
        document.querySelector(".popup").classList.add("active");
    });

    document.querySelector(".popup .close-btn").addEventListener("click", function() {
        document.querySelector(".popup").classList.remove("active");
    });

    document.querySelector("#show-signin").addEventListener("click", function(){
        document.querySelector(".popup1").classList.add("active1");
    });

    document.querySelector(".popup1 .close-btn1").addEventListener("click", function(){
        document.querySelector(".popup1").classList.remove("active1");
    });
});