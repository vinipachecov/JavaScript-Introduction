// functions returning functions

function interviewQuestion(job){
    if ( job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what ux design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello' + name + 'What do you do?');
        }
    }
}


var teacherQuestion = 
interviewQuestion('teacher');

var designerQuestion = interviewQuestion('designer');


designerQuestion('John');
teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Mike');
designerQuestion('Jack');
designerQuestion('Gordon');

interviewQuestion('teacher')('Mark');