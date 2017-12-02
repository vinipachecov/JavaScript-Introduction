//  BUDGET CONTROLLER
var budgetController = (function () {

    // some code for budget

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // function constructor
    // to add methods we can add to prototypes
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
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
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    }

    return {

        getInput: function () {
            return {
                type: document.querySelector(domStrings.inputType).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value
            };

        },

        addListItem: function (obj, type) {
            var html, newHtml, element;
            // create HTML string with placeholder text
            if (type === 'inc') {
                element = domStrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if (type === 'exp') {
                element = domStrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }



            // replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert as a child of expense list and income list
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

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

        getDOMstrings: function () {
            return domStrings;
        }
    }
})();

// INTEGRATING CONTROLLERS
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

    };


    var ctrlAddItem = function () {

        var input, newItem;

        // get input data

        input = UICtrl.getInput();

        //  add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // clear the fields

        UICtrl.clearFields();

        //  add item to the UI

        UICtrl.addListItem(newItem, input.type);
        //  calculate the budget

        //  display the budget        

    }


    return {
        init: function () {
            console.log('Application has started.');
            setupEventListeners();
        }
    }
})(budgetController, UIController);

controller.init();