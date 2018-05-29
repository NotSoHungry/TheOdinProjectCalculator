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

        enableFloatModeButton: function() {
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
              .reduce((arrayWithWhiteSpace, currentDigit) => {
                if (arrayWithWhiteSpace[0] && arrayWithWhiteSpace.filter(element => element !== " ").length % 3 === 0) {
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
            if (tempArrayToExtractInteger[1] !== undefined) {
                this.displayCurrentNumberElement().textContent =  strFromTempOnlyIntegerArray.concat(",", tempArrayToExtractInteger[1]);
            } else {
                this.displayCurrentNumberElement().textContent =  strFromTempOnlyIntegerArray;
            } 
        }



    }
} 