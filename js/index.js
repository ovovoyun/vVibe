document.addEventListener("DOMContentLoaded", function () {
    const data = [
        {
            id: 1,
            title: "蘋果醋",
            originPrice: 250,
            price: 175,
            quantity: "5入",
            star: 4.5,
            ppl: 200
        },
        {
            id: 2,
            title: "檸檬塔",
            price: 40,
            star: 4.8,
            ppl: 250
        },
        {
            id: 3,
            title: "小披薩",
            originPrice: 250,
            price: 100,
            star: 4.3,
            ppl: 120
        },
        {
            id: 4,
            title: "巧克力",
            price: 35,
            quantity: "3片",
            star: 4.1,
            ppl: 30
        }
    ];

    const hotProductList = document.getElementById("hotProductList");

    const generateProductCard = (item) => {
        let discount = "";
        if (item.originPrice) {
            const discountPercentage = (item.price / item.originPrice) * 10;
            discount = `${discountPercentage.toFixed(1).replace('.0', '')}折`;
        }

        const imageUrl = new URL(`../assets/images/product/${item.id}.png`, import.meta.url).href;

        return (
        `
            <div class="col userSelect-none">
                <a href="#">
                    <div class="card border-0 position-relative overflow-hidden">
                        ${item.originPrice ? `<span class="position-absolute end-0 px-3 py-1 ff-notoSerif text-primary bg-light">${discount}</span>` : ''}
                        <img src="${imageUrl}" class="card-img-top" alt="product${item.id}">
                        <div class="card-body">
                            <h5 class="card-title fw-bold mb-1 text-truncate">${item.title}</h5>
                            <div class="card-text d-flex justify-content-between">
                                <div class="d-flex">
                                    ${item.originPrice ? `<span class="me-2 text-decoration-line-through">$${item.originPrice}</span>` : ''}
                                    <p>$${item.price}${item.quantity ? ` / ${item.quantity}` : ''}</p>
                                </div>
                                <div class="d-flex text-primary">
                                    <span class="material-symbols-rounded me-1">star</span>
                                    <p>${item.star}(${item.ppl})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `);
    };

    const productCards = data.map(generateProductCard).join('');
    hotProductList.innerHTML = productCards;
});