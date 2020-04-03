

// MAIN CLASS PLANTS
class Plants {
    constructor(props){

        this.destiny = props.destiny; // "coocking", 'rare eat', ""
        this.type = props.type; // "vegetable", "fruit"
        this.eatParts = props.eatParts; // "korzeń", "bulwa", "liście", "nać"    
        this.domEl = {}    
        
    }

    createElement(  ) {

            this.getDOM()
            this.domEl.sectionDiv.innerHTML = this.type;
            this.plantsInfo()
    }

    plantsInfo() {
        this.domEl.pInfo = document.createElement('p');
        this.domEl.pInfo.setAttribute('class', 'pInfo')
        this.domEl.pInfo.innerHTML = `Most of ${this.type} is likely to ${this.destiny}.`
        this.domEl.sectionDiv.appendChild(this.domEl.pInfo)
    }

    getDOM() {

            this.domEl.sections = document.getElementById('sections');
            this.domEl.sectionDiv = document.createElement('div');
            this.domEl.sectionDiv.setAttribute('id', `${this.type}Type`)
            this.domEl.sectionDiv.innerHTML = `${this.type}`
            this.domEl.sections.appendChild(this.domEl.sectionDiv);
    }

}
// Fruits
class Fruits extends Plants {
    constructor(props){
        super(props);
        this.name = props.name;
        this.skinEat = props.skinEat;
        this.sweetness = props.sweetness;

        this.fruitEl = {};
        
        this.fruitInfo()
        this.createFruitElement()

    }

    createFruitElement(){
        

        this.getDOMFruit();
        this.fruitEl.fruitDiv.innerHTML = this.name;
        this.fruitInfo()

        return this.fruitEl;

    }

    fruitInfo() {

        this.fruitEl.fruitInfo = document.createElement('p');
        this.fruitEl.fruitInfo.innerHTML = `In ${this.name} we can eat ${this.eatParts}`;
        this.fruitEl.fruitDiv.appendChild(this.fruitEl.fruitInfo)
        console.log(this.fruitEl.fruitDiv)

        return this.fruitEl;

    }

    getDOMFruit(){

        this.fruitEl.fruitDiv = document.createElement('div');
        this.fruitEl.fruitDiv.setAttribute('class', 'plantElement')

        this.fruitEl.sectionDiv = document.getElementById('FruitType')
        this.fruitEl.sectionDiv.setAttribute('class', 'plantType')
        this.fruitEl.sectionDiv.appendChild(this.fruitEl.fruitDiv)
    }
}

// Vegetables
class Vegetables extends Plants {
    constructor(props){
        super(props);
        this.name = props.name;
        this.soupOrSalad = props.soupOrSalad;
        this.bestWith = props.bestWith; // other vegetables

        this.vegetableInfo();
        this.createVegetablesElement()
    }

    createVegetablesElement(){
        
        this.domEl.vegetableDiv = document.createElement('div');
        this.domEl.vegetableDiv.setAttribute('class', 'plantElement')
        this.domEl.vegetableDiv.innerHTML = this.name;
        let sectionDiv = document.getElementById('VegetablesType')
        sectionDiv.setAttribute('class', 'plantType')
        sectionDiv.appendChild(this.domEl.vegetableDiv)
    }

    vegetableInfo() {
        console.log(` In ${this.name} we can eat ${this.eatParts}. 
        Also its best for ${this.soupOrSalad}. Its best with ${this.bestWith}`)
    }


}

// Fruits
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

const apple = new Fruits(propsApple);

// Banana
const propsBanana = {
    name: 'Banana',
    destiny: "Rare eat",
    type: "Fruit",
    eatParts: "Only middle",
    skinEat: 'absolutly not!',
    sweetness: 'Most'
}

const banana = new Fruits(propsBanana)

//vegetables
const propsVegetables = {
    type: 'Vegetables',
    destiny: 'cooking'
}

const vegetables = new Plants(propsVegetables)
vegetables.createElement();

//Carrot
const porpsCarrot = {
    name: 'Carrot',
    destiny: 'Cooking',
    type: 'Vegetable',
    eatParts: "Root",
    soupOrSalad: "Both Soup or Salad",
    bestWith: 'parsley or celery'
}

const carrot = new Vegetables(porpsCarrot);

const porpsOnion = {
    name: 'Onion',
    destiny: 'Rare Eat',
    type: 'Vegetable',
    eatParts: "Root and leaf",
    soupOrSalad: "Salad",
    bestWith: 'Scrambled eggs'
}

const onion = new Vegetables(porpsOnion);

