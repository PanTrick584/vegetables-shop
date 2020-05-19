// DOM elements
const productsContainer = document.getElementById('products-container');
const footerInfo = document.getElementById('footer-info');
const basketDOM = document.getElementById('basket');
const basketContainer = document.getElementById('basket-container');
const basketCloseBtn = document.getElementById('basket-close-btn');
const basketClearBtn = document.getElementById('clear-btn');

// BASKET
let basket = [];
// BUTTONS
let buttonsDOM = [];
// Products
let shopItemsArray = [];

// CLASSES
class Products {

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

        createSection(product) {
        let section = '';
        product.forEach( product => {
                    let element = product.elements.map( el => {
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

    createBasket() {

        
        basketCloseBtn.addEventListener('click', this.hideBasket);
        this.getButtons();
    }

    getButtons() {
        let buttons = [...document.querySelectorAll('.product-element-btn')];
        buttonsDOM = buttons;
        buttons.forEach( button => {
            addEventListener('click', event => {
                this.showBasket();
                console.log(shopItemsArray)

               let name = event.target.previousElementSibling.previousElementSibling.innerText;
               console.log(name);

               
               let basketElement = shopItemsArray.map( el => {
                   if(el.name === name){
                    let item = this.createItem(el);
                    return item;
                   }
               })
               console.log(basketElement)
               basketContainer.innerHTML = basketElement.join('');
            })
            // let item = '';
            // item += createItem(el);
            // basketDOM
        })
    }

    showBasket() {
        basketDOM.classList.add('showBasket');
    }

    hideBasket() {
        basketDOM.classList.remove('showBasket');
    }
}

class Store {
    static storeProduct(product) {
       
       let shopItems = product.map( prod => {
         let items = prod.elements.map( el => {
             const name = el.name;
             const category = prod.type;
             const price = el.price;
             return {name, category, price};
         });
         return items;
     })
    shopItemsArray = shopItems.flat();
    return console.log(shopItemsArray)
    }
}
document.addEventListener('DOMContentLoaded', ()=>{

    const ui = new UI();
    const product = new Products();

    // get products
    product.getProducts().then( product => {
        ui.createSection(product);
        Store.storeProduct(product);
        ui.getButtons();
    });

    // get info
    product.getInfo().then( info => {
        ui.shopInfo(info);
    });
});