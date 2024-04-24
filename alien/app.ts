//pakking:
let Alien_variable = `green`;
if (Alien_variable=== `green`){
    console.log(`player just earned 5 points`);
}
else{
    console.log(`no point earned`);
}
//failing:
Alien_variable = `red`;
let Alien_variable = `green`;
if (Alien_variable=== `green`){
    console.log(`player just earned 5 points`);
}
else{
    console.log(`{}`);
}
