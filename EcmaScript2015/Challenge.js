class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numberTrees) {
        super(name, buildYear);
        this.area = area; //km²
        this.numberTrees = numberTrees;
    }

    treeDensity() {
        const density = this.numberTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'large');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1982, 2.5, 5),
];


function calc(arr){
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}

function reportParks(park) {
    console.log('-----Parks Report -------');

    // Density
    park.forEach(element => {
        element.treeDensity();
    });

    const ages = park.map(el => new Date().getFullYear() - el.buildYear);
    // Average age
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${park.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const index = park.map(element => element.numberTrees).findIndex(element => element >= 1000);
    console.log(`${park[index].name} has more than 1000 trees`);
}

function reportStreet(street) {

    console.log('-----Streets Report -------');

    // total average name of towns streets
    const [totalLength, AvgLength] = calc(street.map(element => element.length));
    console.log(`Pir ${street.length} streets have a total length of ${totalLength}  km, with an average of 
    ${AvgLength}`);

    // classify sizes
    street.forEach(element => element.classifyStreet());

}

reportParks(allParks);

reportStreet(allStreets);