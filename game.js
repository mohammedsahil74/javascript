//input
const prompt = require('prompt-sync')();

//taking input from user
const name = prompt('what is your name?');
console.log(`hello ${name},welcome!`);

const shouldWePlay = prompt('do you want to play?');

if(condition = shouldWePlay.toLowerCase() === "yes"){
  const leftorRight = prompt('where do you want to go : left or right?');
  if(leftorRight === "left" ){
    console.log("we are heading left");

    const cross = prompt('do you want to cross the bridge?');
    if(cross === "yes"){
      console.log("you crossed the bridge but it was broken")

    }else{
      console.log("you win")
    }
    

  }else{
    console.log('you go right anf fall th cliff')
  };

}else if (condition = shouldWePlay.toLowerCase() === "no"){
  console.log('no prob!')
}
else{
  console.log('invalid input')
};