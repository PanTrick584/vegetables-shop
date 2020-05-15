// DOM elements
const productsContainer = document.getElementById('products-container');
const footerInfo = document.getElementById('footer-info');

// CLASSES

class Products {

    async getProduct(){

        try {
                let result = await fetch('./products.json');
                let data = await result.json();
                let section = data.sections;
                console.log(section)
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

                let div = '';
                return div += 
                         `
                          <div class="product-element" data-id="${el.id}">
                            <span class="product-element-name">${el.name}</span>
                            <span class="product-element-price">price: ${el.price}</span>
                            <button class="product-element-btn btn">+</button>
                          </div>
                        `;
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

    shopInfo(info) {
        
        let result = '';
        info.forEach( info => {

            result +=
            `
                <div class="footer-info-el">
                    <h2>${info.name}</h2>
                    <p>${info.info}</p>
                </div>
            `
        });
        footerInfo.innerHTML = result;
    }

}
// Fruits
class FruitsAndVeges {
    constructor(props){
        // super(props);
        this.name = props.name;
        this.skinEat = props.skinEat;
        this.sweetness = props.sweetness;
        this.type = props.type;

        this.fruitEl = {};
        this.shopArray = [];
        
        // this.fruitInfo()
        // this.createFruitElement()
        // this.clickElement();

    }
    

    createFruitElement(){
        // this.getDOMFruit();
        this.fruitEl.fruitDiv.innerHTML = this.name;
        this.fruitEl.fruitDiv.appendChild(this.fruitEl.fruitInfo)
        this.fruitEl.fruitInfo.innerHTML = `In ${this.name} we can eat ${this.eatParts}`;
    }

    // getDOMFruit(){

    //     this.fruitEl.fruitDiv = document.createElement('div');
    //     this.fruitEl.fruitDiv.setAttribute('class', 'plantElement')
    //     this.fruitEl.fruitDiv.setAttribute('id', `${this.name}`)

    //     this.fruitEl.fruitInfo = document.createElement('p');

    //     this.fruitEl.sectionDiv = document.getElementById(`${this.type}Type`)
    //     // this.fruitEl.sectionDiv.setAttribute('class', 'plantType')
    //     this.fruitEl.sectionDiv.appendChild(this.fruitEl.fruitDiv)

    // }

    clickElement(){

                this.fruitEl.fruitDiv.addEventListener('click', ()=> {
                this.shopArray.push(this.fruitEl.fruitDiv.id)
                // this.shopCard[this.fruitEl.fruitDiv.innerHTML] = counter;
                // console.log(this.shopCard)
                console.log(this.shopArray)
                console.log(this.shopArray.length)
                console.log(this.fruitEl.fruitDiv.id)
        })
    }

    basket() {

        this.fruitEl.basket = document.getElementById('basket');
        this.fruitEl.basketDiv = document.createElement('div')
    }
}

// FRUITS
const propsFruits = {
    type: 'Fruit',
    destiny: "Rare eat"
}

// const fruit = new Plants(propsFruits);
// fruit.createElement();


// Apple
const propsApple = {
    name: 'Apple',
    type: "Fruit",
    eatParts: "Entire, even with middle",
    skinEat: 'Sure',
    sweetness: 'Most'
}

const apple = new FruitsAndVeges(propsApple);

// Banana
const propsBanana = {
    name: 'Banana',
    type: "Fruit",
    eatParts: "Only middle",
    skinEat: 'absolutly not!',
    sweetness: 'Most'
}

const banana = new FruitsAndVeges(propsBanana);

const propsPineapple = {
    name: 'Pineapple',
    type: 'Fruit',
    eatParts: 'Main part',
    skinEat: 'absolutly not!',
    sweetness: 'Very impressive'
}

const pineapple = new FruitsAndVeges(propsPineapple);

//VEGETABLES
const propsVegetables = {
    type: 'Vegetables',
    destiny: 'cooking'
}

// const vegetables = new Plants(propsVegetables)
// vegetables.createElement();

//Carrot
const porpsCarrot = {
    name: 'Carrot',
    type: 'Vegetables',
    eatParts: "Root",
    soupOrSalad: "Both Soup or Salad",
    bestWith: 'parsley or celery'
}

const carrot = new FruitsAndVeges(porpsCarrot);

document.addEventListener('DOMContentLoaded', ()=>{

    const ui = new UI();
    const product = new Products();

    // get products
    product.getProduct().then( product => {
        ui.createSection(product);
    });
    // get info
    product.getInfo().then( info => {
        ui.shopInfo(info);
    });
});