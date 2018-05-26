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

        displayCurrentNumberButtont: function() {
            return this.el(".current-number span");
        },

        enableFloatModeElement: function() {
            return this.el(".control-btn.float");
        },

        renderDisplayedNumber: function(inputNum) {
            let tempArrayToExtractInteger = inputNum.split('.'),
                tempArrayOnlyInteger = tempArrayToExtractInteger[0].split(''),
                tempArrayOnlyIntegerReversed = [];
            for (let i = 0; i < tempArrayOnlyInteger.length; i++) {
              tempArrayOnlyIntegerReversed.unshift(tempArrayOnlyInteger[i]);
            }
            tempArrayOnlyIntegerReversed = tempArrayOnlyIntegerReversed
              .reduce((arrayWithWhiteSpace, currentDigit, currentDigitIndex) => {
                if (arrayWithWhiteSpace.filter(element => element !== " ").length % 3 === 0 && currentDigitIndex > 2) {
                  arrayWithWhiteSpace.push(' ');
                }
                arrayWithWhiteSpace.push(currentDigit);
                return arrayWithWhiteSpace;
            }, []);
            tempArrayOnlyInteger = [];
            for (let i = 0; i < tempArrayOnlyIntegerReversed.length; i++) {
              tempArrayOnlyInteger.unshift(tempArrayOnlyIntegerReversed[i]);
            }
            
            let strFromTempOnlyIntegerArray = tempArrayOnlyInteger.join('');
            if (tempArrayToExtractInteger[1]) {
                this.displayCurrentNumberElement().textContent =  strFromTempOnlyIntegerArray.concat(".", tempArrayToExtractInteger[1]);
            } else {
                this.displayCurrentNumberElement().textContent =  strFromTempOnlyIntegerArray;
            } 
        },



    }
} 