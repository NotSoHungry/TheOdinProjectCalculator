var gameController = function () {

    return {
        
        typeNumber: function(event) {
          (model.currentValueTypedIntegerMode) ? model.addCurrentTypedValueIntegerMode(this.textContent, event) :
          (model.currentValueTypedFloatMode) ? model.addCurrentTypedValueFloatMode(this.textContent) : "";
          model.userIsTyping();
          
        },
        
        removeNumber: function() {
          model.removeCurrentTypedValue();
          model.userIsTyping();
        },

        activateTypingInFloatMode: function() {
          if (!model.currentTypedValue || model.currentTypedValue.indexOf(".") === -1) {
            model.currentValueTypedIntegerMode = false;
            model.currentValueTypedFloatMode = true;
            model.addCurrentTypedValueFloatMode(".");
            model.userIsTyping();
          }

        },

        addMathOperationValues: function () {
            if (model.currentTypedValue || (model.currentEquationResult === null && model.currentDisplayedValue == "0")) {
              model.addCurrentEquationElements(Number(model.currentDisplayedValue), this.textContent);
              model.resetCurrentTypedValue();
              (model.currentEquation.length > 3) ? model.readyForMathOperation = true : "";
              model.userEndedTyping();
            }
          },
          
          performMathOperation: function () {
            if (model.readyForMathOperation) {
              console.log("length check worked");
              let currentValueA = (model.currentEquationResult) ? model.currentEquationResult : model.currentEquation[0],
                  currentValueB = model.currentEquation[model.currentEquation.length - 2],
                  operator = model.currentEquation[model.currentEquation.length - 3];
                  console.log(...[currentValueA, currentValueB, operator]);
              model.currentEquationResult = model.operate(currentValueA, currentValueB, operator);
              model.currentDisplayedValue = String(model.currentEquationResult);
              model.readyForMathOperation = false;
              model.resetCurrentTypedValue();
              model.currentValueTypedFloatMode = false;
              model.currentValueTypedIntegerMode = true;
              model.userEndedTyping();
            } 
        },

        changeCurrentOperator: function () {
          if (!model.isUserTyping) {
              model.changeCurrentEquationOperator(this.textContent);
          }
      }
      
    }


}    