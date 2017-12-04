//  BUDGET CONTROLLER
var budgetController = (function () {

    // some code for budget

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };


    Expense.prototype.calculatePercentages = function (totalIncome) {
        if (totalIncome > 0 ){
            this.percentage = Math.round((this.value / totalIncome)  * 100);            
        } else {
            this.percentage = -1;
        }        
    };
    
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };
    
    // function constructor
    // to add methods we can add to prototypes
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var calculateTotal = function (type) {
        var sum = 0;

        data.allItems[type].forEach(function (current) {
            sum += current.value;

        });
        data.total[type] = sum;

    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function (type, desc, val) {
            var newItem, ID;

            if (data.allItems[type].length === 0) {
                ID = 0;
            } else {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }


            // creation of new item
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                console.log('creating new item');
                newItem = new Income(ID, desc, val);
            }

            // push it to the data structure
            data.allItems[type].push(newItem);
            return newItem;

        },

        deleteItem: function (type, id) {
            var ids, index;


            ids = data.allItems[type].map(function (current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function () {
            // caculate the some of all incomes and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            // Calculate the budget: income - expemses

            data.budget = data.total.inc - data.total.exp;

            // Calculate the percentage of income that we spent
            if (data.total.inc > 0) {
                data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
            } else {
                data.percentage = -1;
            }


        },

        calculatePercentages: function () {
            
            //calculating percentage for every expense
            data.allItems.exp.forEach(function (current) {
                current.calculatePercentages(data.total.inc);                
            });

        },
        
        getPercentages: function (){
            var allPerc = data.allItems.exp.map(function (current){
               return current.getPercentage();
            });                      
            return allPerc;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.total.inc,
                totalExp: data.total.exp,
                percentage: data.percentage
            };
        },

        testing: function () {
            console.log(data);
        }
    };

})();


var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
}

// UI CONTROLLING
var UIController = (function () {
    // UI  Code

    var domStrings = {
        // input tags
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        // containers
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        //   label updates
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    }

    var formatNumber = function(num,type){
        var numSplit, int, dec, sign;
        /*
        rules
        + or - before numbers

        comma separating the thousands
        
        2310.4567 - 2.310,46
        
        */

        num = Math.abs(num);
        // precision of 2 decimal cases
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];

        if(int.length > 3){
           int = int.substr(0,int.length - 3) + ',' + int.substr(int.length - 3, int.length);               
        }


        dec = numSplit[1];           

        return  (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' +  dec;
    };


    var nodelistForEach = function(list, callback){
        for( var i = 0; i < list.length; i++){
            callback(list[i],i);
        }
    };

    return {

        getInput: function () {
            return {
                type: document.querySelector(domStrings.inputType).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value)
            };

        },

        addListItem: function (obj, type) {
            var html, newHtml, element;
            // create HTML string with placeholder text
            if (type === 'inc') {
                element = domStrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp') {
                element = domStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }



            // replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value));

            // insert as a child of expense list and income list
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        deleteListItem: function (selectorID) {

            var element = document.getElementById(selectorID)
            element.parentNode.removeChild(element);

        },

        clearFields: function () {
            fields = document.querySelectorAll(domStrings.inputDescription + ', ' + domStrings.inputValue);

            // casting a list to array
            var fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function (current, index, array) {
                current.value = "";
            });

            fieldsArray[0].focus();

        },

        displayBudget: function (obj) {
            var type;
            // will contain the 4 pieces of that we are using
            // need to know the class elements we are going to use
            //  budget total | Income total | expense total | percentage of the expenses            

            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(domStrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(domStrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');
            document.querySelector(domStrings.expenseLabel).textContent = formatNumber(obj.totalExp,'exp');
            if (obj.percentage > 0) {
                document.querySelector(domStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(domStrings.percentageLabel).textContent = '----';

            }

        },

        displayPercentages: function (percentages){

            var fields = document.querySelectorAll(domStrings.expensesPercLabel);


            nodelistForEach(fields, function(current, index){

                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }

                
            });
            
        },

        displayMonth : function(){
            var year, months , now, month;

            now = new Date();            
            year = now.getFullYear();    
            months = ['January','February','March','April','May','June','July','August','September','October'
        ,' November', 'December'];
            month = now.getMonth();            
            document.querySelector(domStrings.dateLabel).textContent = months[month] + ' ' + year;
            
        },
        

        changedType: function (){
            var fields = document.querySelectorAll(domStrings.inputType + ','
             + domStrings.inputDescription + ',' 
             + domStrings.inputValue);     

             nodelistForEach(fields, function(cur){
                cur.classList.toggle('red-focus');
             })

             document.querySelector(domStrings.inputButton).classList.toggle('red');
            




        },

        getDOMstrings: function () {
            return domStrings;
        }
    }
})();

// CORE CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    // control add item 

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        // button to add 
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        // global event listener 
        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

    };

    var updateBudget = function () {        

        //  calculate the budget
        budgetCtrl.calculateBudget();

        //  return the budget 
        var budget = budgetCtrl.getBudget();

        //  display the budget        
        UICtrl.displayBudget(budget);

        // update percentages

        updatePercentages();

    };

    var updatePercentages = function () {
        // calculate percentages
        budgetCtrl.calculatePercentages();

        // read percentages from budget controller
        var percentages = budgetCtrl.getPercentages();

        // udpate the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    };

    var ctrlAddItem = function () {

        var input, newItem;

        // get input data

        input = UICtrl.getInput();


        // check if there is a description, if there is a value and that this value is > 0
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            //  add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // clear the fields

            UICtrl.clearFields();

            //  add item to the UI

            UICtrl.addListItem(newItem, input.type);

            updateBudget();

        }

    };

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;

        itemID = (event.target.parentNode.parentNode.parentNode.parentNode.id);

        // there is only id in the items so we use an if to only process things of expenses and incomes
        if (itemID) {
            // inc-1

            // get the item ID and type
            splitID = itemID.split('-');
            ID = parseInt(splitID[1]);
            type = splitID[0];

            // delete the item from data structure

            budgetCtrl.deleteItem(type, ID);

            // delete from the ui - which is... from the DOM

            // update and show the new budget

        }

    };


    return {
        init: function () {
            console.log('Application has started.');
            setupEventListeners();
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1

            });
        }
    }
})(budgetController, UIController);

controller.init();
