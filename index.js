

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
            return this.domEl
    }

    plantsInfo() {
        console.log(`Most of ${this.type} is likely to ${this.destiny}.`)
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
        
        this.fruitInfo()
        this.createFruitsElement()

    }

    createFruitsElement(){

        this.domEl.fruitDiv = document.createElement('div');
        this.domEl.fruitDiv.setAttribute('class', 'plantElement')
        this.domEl.fruitDiv.innerHTML = this.name;
        let sectionDiv = document.getElementById('FruitType')
        sectionDiv.setAttribute('class', 'plantType')
        sectionDiv.appendChild(this.domEl.fruitDiv)
    }

    fruitInfo() {
        console.log(` In ${this.name} we can eat ${this.eatParts}`)
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
        console.log(this.domEl.sectionDiv)
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
fruit.plantsInfo()


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
    type: 'Vegetables'
}

const vegetables = new Plants(propsVegetables)
vegetables.createElement();
vegetables.plantsInfo()

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

