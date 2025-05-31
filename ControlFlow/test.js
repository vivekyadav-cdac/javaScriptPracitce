const obj ={a:1};
const ref1 = obj;
const ref2 = obj;

switch(ref1){
    case ref2:
        console.log("Same object reference");
        break;
    default :
        console.log("default case");
}

// if object structure is same but two different objects than switch consider them as separate

const obj1 = {a:1};
const obj2 = {a:1};

switch(obj1){
    case obj2:
        console.log("same object reference");
        break;
    
    default:
        console.log("different objects");
        break;
}
// here output different objects