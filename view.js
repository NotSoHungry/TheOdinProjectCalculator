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

        switchPlusMinusButton: function () {
            return this.el(".switch-positive-negative");
        },

        displayCurrentNumberElement: function() {
            return this.el(".current-number span");
        },

        displayCurrentEquationElement: function () {
            return this.el(".current-equation");
        },

        enableFloatModeButton: function() {
            return this.el(".control-btn.float");
        },

        mathOperationButtons: function () {
            return this.allEl(".math-op");
        },

        calculatePercentageValueButton: function () {
            return this.El(".percent");
        },

        addWhiteSpaceToDisplayedNumbers: function(inputNum) {
            let isValueNegative = inputNum.match('-') ? true : false,
                tempArrayToExtractInteger = inputNum.split('.'),
                tempArrayToRemoveNegativeSign = tempArrayToExtractInteger[0].split('-'),
                tempArrayOnlyInteger = tempArrayToRemoveNegativeSign[tempArrayToRemoveNegativeSign.length - 1].split(''),
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
            
            let strFromTempOnlyIntegerArray = (isValueNegative) ? "-".concat(tempArrayOnlyInteger.join('')) : tempArrayOnlyInteger.join('');
            return (tempArrayToExtractInteger[1] !== undefined) ? strFromTempOnlyIntegerArray.concat(",", tempArrayToExtractInteger[1]) : strFromTempOnlyIntegerArray;
        
        },

        renderDisplayedNumber: function(inputNum) {
            this.displayCurrentNumberElement().textContent = this.addWhiteSpaceToDisplayedNumbers(inputNum); 
        },

        renderCurrentEquation: function (equation) {
            this.displayCurrentEquationElement().textContent = equation
                .map(element => {
                    let isElementNaN = String(Number(element)) === "NaN";
                    return (!isElementNaN) ? this.addWhiteSpaceToDisplayedNumbers(String(element)) : element;
                })
                .join(' ');
        }

    }
}