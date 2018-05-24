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
      
        deleteButton: function() {
          return this.el('.control-btn.func.delete');
        },

        displayCurrentNumberElement: function() {
            return this.el(".current-number span");
        },

        renderDisplayedNumber: function(inputNum) {
            this.displayCurrentNumberElement().textContent = inputNum; 
        }

    }
} 