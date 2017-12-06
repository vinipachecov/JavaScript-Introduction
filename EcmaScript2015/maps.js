// Maps

const question = new Map();

question.set('question', 'What is the official name of the latest major javascript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES2015');
question.set('correct', 4);

question.set(true, 'Correct Answer!! :)');
question.set(false, 'Wrong, please try again.');

// console.log(question.get('question'));



console.log('Question map size = ' + question.size);


if (question.has(4)){
    // console.log('question has the number 4!');
    // question.delete(4);
    console.log('Answer 4 is here!')
}


// question.forEach((value,key) => 
//     console.log(`THis is ${key}, and  it's set to ${value}`)
// );

for (let [key,value] of question.entries()){
    console.log(`THis is ${key}, and  it's set to ${value}`)
    if(typeof(key) === 'number') {
        console.log(`Answer ${key}:${value}`);
    }
}


const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
