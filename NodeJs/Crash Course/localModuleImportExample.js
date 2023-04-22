class Rockets 
{
    constructor(tonnage, weight)
    {
        this.tonnage = tonnage;
        this.weight = weight;
    }

    fly() {
        console.log("Preparing to Launch in 3,2,1...............");
    }
}


module.exports = Rockets;