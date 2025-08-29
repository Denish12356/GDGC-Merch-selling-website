const increase = document.querySelector('.plus');
const decrease = document.querySelector('.minus');
const qtySpan = document.querySelector('.qty');

let qty = 1;

increase.addEventListener('click', () => {
    qty++;
    qtySpan.textContent = qty;
})

decrease.addEventListener('click', () => {
    if (qty > 1) {
        qty--;
        qtySpan.textContent = qty;
    }
})
