var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//function that spells their name in uppercase

function nameInUppercase(name) {
    return name.toUpperCase();
}

function shoutyGreeting(name) {
    const UpperCaseName = nameInUppercase(name)
    return `HELLO ${UpperCaseName}!`;    
}

console.log(shoutyGreeting(mentor1));