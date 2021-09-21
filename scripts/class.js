class Cellphone {

    constructor(color) {
        this.color = color;
    }

    call(number) {
        console.log(`Calling ${number}`);
    }
    
}

let color = 'Gold';
let object = new Cellphone(color);
console.log(object);
object.call('8811-7083');