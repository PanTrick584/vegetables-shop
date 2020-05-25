// DOM elements
const productsContainer = document.getElementById('products-container');
const footerInfo = document.getElementById('footer-info');
const basketDOM = document.getElementById('basket');
const basketContainer = document.getElementById('basket-container');
const basketCloseBtn = document.getElementById('close-btn');
const basketClearBtn = document.getElementById('clear-btn');
const basketTotalBtn = document.getElementById('total-btn');

// BASKET
let basket = [];
// BUTTONS
let buttonsDOM = [];
// Products
let shopItemsArray = [];

// CLASSES
class Products {
    //get products
    async getProducts(){

        try {
                let result = await fetch('./products.json');
                let data = await result.json();
                let section = data.sections;
                return section;
        } catch (error) {
            console.log(error)
        }
    }
    //get footer info
    async getInfo() {

        try {
            let result = await fetch('./info.json');
            let data = await result.json();
            let info = data.info;
            return info;
        } catch (error) {
            console.log(error)
        }
    }
}

class UI {
        // create main section of products
        createSection(product) {
        let section = '';
        product.forEach( product => {
                    let element = product.elements.map( el => {
                        //create products elements in sections
                    return this.createItem(el);
            });
            section +=
            `
                <section class="products-section">
                    <h1>${product.type}</h1>
                    ${element.join('')}
                </section>
            `;
        })
        productsContainer.innerHTML = section;
    }
    // create single element of product in sections
    createItem(el) {
        let div = '';
        return div += 
                 `
                  <div class="product-element" data-id="${el.id}">
                    <span class="product-element-name">${el.name}</span>
                    <span class="product-element-price">price: ${el.price}</span>
                    <button class="product-element-btn btn" data-id="${el.id}">+</button>
                  </div>
                `;
    }

    shopInfo(info) {
        
        let result = '';
        info.forEach( info => {

            result +=
            `
                <div class="footer-info-el">
                    <h2>
                        <span>
                        <i class="${info.icon}"></i>
                        </span>
                        ${info.name}
                    </h2>
                    <p>${info.info}</p>
                </div>
            `
        });
        footerInfo.innerHTML = result;
    }
    // BASKET
    createBasket() {

        this.getButtons();
        basketCloseBtn.addEventListener('click', this.hideBasket);
        basketClearBtn.addEventListener('click', this.basketClear);

    }

    createBasketElement(name) {
        // take element from array and create in basket
        let basketElement = shopItemsArray.find( el => {
            if(el.name === name) {
                return el;
            }
        });
        // check if element is already in basket
        let findElement = basket.find( findEl => findEl.name === name);
            if(findElement){
                findElement.amount++;
                return this.createBasketItem();

            } else {
                basketElement.amount++;
                basket.push(basketElement);
                return this.createBasketItem();
           }

    }

    createBasketItem() {

       return basket.map( el => {
            let div = '';
            let total = el.price * el.amount;
        
        return div += 
                 `
                  <div class="basket-element" data-id="${el.id}">
                    <span class="basket-element-name">${el.name}</span>
                    <span class="basket-element-price">price: ${el.price}</span>
                    <span class="basket-element-amount">amount: ${el.amount}</span>
                    <span class="basket-element-total">total: ${parseFloat(total.toFixed(2))}</span>
                    <button class="basket-element-btn plus" data-id="${el.id}">+</button>
                    <button class="basket-element-btn minus" data-id="${el.id}">-</button>
                  </div>
                `;
        })
    }

    getButtons() {
        let buttons = [...document.querySelectorAll('.product-element-btn')];
        buttonsDOM = buttons;
        buttons.forEach( button => {
            button.addEventListener('click', event => {
                this.showBasket();
                // find name of clicked element
                let name = event.target.previousElementSibling.previousElementSibling.innerText;
                // find and create element in basket
                basketContainer.innerHTML = this.createBasketElement(name);
                basketTotalBtn.innerHTML = this.basketTotalPrice();
                this.itemsAmount(name);
            })
        })
    }

    

    showBasket() {
        basketDOM.classList.add('showBasket');
    }

    hideBasket() {
        basketDOM.classList.remove('showBasket');
    }
    // take total price of products in basket
    basketTotalPrice() {
        return parseFloat(basket.map( el => el.price * el.amount).reduce( (total, price) => price + total).toFixed(2));
    }

    itemsAmount(name) {
        let plusBasketItem = document.querySelector('.plus').addEventListener('click', e=>this.changeAmount(name, e));
        let minusBasketItem = document.querySelector('.minus').addEventListener('click', e=>this.changeAmount(name, e));
    }

    changeAmount(name, e) {
        let elTarget = basket.find( el => el.name === name);
        if(e.target.innerText === '+'){
            return basket.forEach( el => el === elTarget ? ++el.amount : '');
        } else {
            return basket.forEach( el => el === elTarget ? --el.amount : '');
        }
        
    }
    // clear all basket
    basketClear() {
        basket.forEach( el => el.amount = 0);
        basket.length = 0;
        basketTotalBtn.innerHTML = 0;
        basketContainer.innerHTML = '';
    }
}

class Store {
    static storeProduct(product) {
       
       let shopItems = product.map( prod => {
         let items = prod.elements.map( el => {
             const name = el.name;
             const category = prod.type;
             const price = el.price;
             const amount = 0;
             return {name, category, price, amount};
         });
         return items;
     })
    shopItemsArray = shopItems.flat();
    return shopItemsArray
    }
}
document.addEventListener('DOMContentLoaded', ()=>{

    const ui = new UI();
    const product = new Products();

    // get products
    product.getProducts().then( product => {
        ui.createSection(product);
        Store.storeProduct(product);
        ui.createBasket();
    });

    // get info
    product.getInfo().then( info => {
        ui.shopInfo(info);
    });
});