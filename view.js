var gameView = function () {

    return {

        el: (query) => {
            return document.querySelector(query);
        },

        allEl: function(query) {
            return document.querySelectorAll(query);
        },

        newEl: function(query) {
            return document.createElement(query);
        },

        allNumElements: function() {
            return this.allEl(".control-btn.num");
        },

        displayCurrentNumberElement: function() {
            return this.el(".current-number");
        },

        renderDisplayedNumberFromModel: function(inputNum) {
            this.displayCurrentNumberElement().textContent = inputNum; 
        },

        renderDisplayedNumberByUserInput: function(inputNum) {
            let displayCurrentNumberContent = this.displayCurrentNumberElement().textContent;
            (model.currentDisplayedValue == 0) ? this.displayCurrentNumberElement().textContent = inputNum : this.displayCurrentNumberElement().textContent += inputNum;
            return model.currentDisplayedValue = this.displayCurrentNumberElement().textContent;

        }

    }
} 