const increase = document.querySelector('.plus');
const decrease = document.querySelector('.minus');
const qtySpan = document.querySelector('.qty');

let qty = parseInt(localStorage.getItem("qty")) || 1;
qtySpan.textContent = qty;

increase.addEventListener('click', () => {
    qty++;
    qtySpan.textContent = qty;
    localStorage.setItem("qty", qty);
})

decrease.addEventListener('click', () => {
    if (qty > 1) {
        qty--;
        qtySpan.textContent = qty;
        localStorage.setItem("qty", qty);
    }
})
