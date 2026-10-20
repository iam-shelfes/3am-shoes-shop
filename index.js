/* Some javascript spice */


var count = 0




function addToCart(name, price) {
    count = count + 1;
    document.getElementById('cart-link').innerText = "Cart (" + count + ")";


    /* ALERT */
    alert("You bought " + name + " for " + price + "$");

}