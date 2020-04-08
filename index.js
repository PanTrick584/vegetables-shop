
// MAIN CLASS PLANTS
class Plants {
    constructor(props){

        this.destiny = props.destiny; // "coocking", 'rare eat', ""
        this.type = props.type; // "vegetable", "fruit"
        this.eatParts = props.eatParts; // "korzeń", "bulwa", "liście", "nać"    
        this.domEl = {}    
        
    }

    createElement() {

            this.getDOM()
            this.domEl.sectionDiv.innerHTML = this.type;
            this.plantsInfo()
    }

    plantsInfo() {
        
        
        this.domEl.pInfo.innerHTML = `Most of ${this.type} is likely to ${this.destiny}.`;
        this.domEl.sectionDiv.appendChild(this.domEl.pInfo)
    }

    getDOM() {
            // section Main section
            this.domEl.section = document.getElementById('section');
            //sectionDiv Fruit & Vegetables
            this.domEl.sectionDiv = document.createElement('div');
            this.domEl.sectionDiv.setAttribute('id', `${this.type}Type`);


            //pInfo Information about
            this.domEl.pInfo = document.createElement('p');
            this.domEl.pInfo.setAttribute('class', 'pInfo')

            this.domEl.section.appendChild(this.domEl.sectionDiv);
            

    }

}
// Fruits
class FruitsAndVeges extends Plants {
    constructor(props){
        super(props);
        this.name = props.name;
        this.skinEat = props.skinEat;
        this.sweetness = props.sweetness;
        this.type = props.type;

        this.fruitEl = {};
        this.shopArray = [];
        
        // this.fruitInfo()
        this.createFruitElement();
        this.clickElement();

    }

    createFruitElement(){
        this.getDOMFruit();
        this.fruitEl.fruitDiv.innerHTML = this.name;
        this.fruitEl.fruitDiv.appendChild(this.fruitEl.fruitInfo)
        this.fruitEl.fruitInfo.innerHTML = `In ${this.name} we can eat ${this.eatParts}`;
    }

    getDOMFruit(){

        this.fruitEl.fruitDiv = document.createElement('div');
        this.fruitEl.fruitDiv.setAttribute('class', 'plantElement')
        this.fruitEl.fruitDiv.setAttribute('id', `${this.name}`)

        this.fruitEl.fruitInfo = document.createElement('p');

        this.fruitEl.sectionDiv = document.getElementById(`${this.type}Type`)
        this.fruitEl.sectionDiv.setAttribute('class', 'plantType')
        this.fruitEl.sectionDiv.appendChild(this.fruitEl.fruitDiv)

    }

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
}

// FRUITS
const propsFruits = {
    type: 'Fruit',
    destiny: "Rare eat"
}

const fruit = new Plants(propsFruits);
fruit.createElement();


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

const vegetables = new Plants(propsVegetables)
vegetables.createElement();

//Carrot
const porpsCarrot = {
    name: 'Carrot',
    type: 'Vegetables',
    eatParts: "Root",
    soupOrSalad: "Both Soup or Salad",
    bestWith: 'parsley or celery'
}

const carrot = new FruitsAndVeges(porpsCarrot);

//Onion
const propsOnion = {
    name: 'Onion',
    destiny: 'Rare Eat',
    type: 'Vegetables',
    eatParts: "Root and leaf",
    soupOrSalad: "Salad",
    bestWith: 'Scrambled eggs'
}

const onion = new FruitsAndVeges(propsOnion);


// // Meat
// const propMeat = {
//     type: "Meat",
//     destiny: "Ofc RARE EAT!!!"
// }

// const meat = new Plants(propMeat);
// meat.createElement();

// const propSausage = {
//     name: "Sausage",
//     type: "Meat"
// }

// const sausage = new FruitsAndVeges(propSausage);

