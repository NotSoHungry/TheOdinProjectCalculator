var gameController = function () {

    return {
        
        typeNumber: function(event) {
          (model.currentValueTypedIntegerMode) ? model.addCurrentTypedValueIntegerMode(this.textContent, event) :
          (model.currentValueTypedFloatMode) ? model.addCurrentTypedValueFloatMode(this.textContent) : "";
          
        },
        
        removeNumber: function() {
          model.removeCurrentTypedValue();
        },

        activateTypingInFloatMode: function() {
          if (!model.currentTypedValue || model.currentTypedValue.indexOf(".") === -1) {
            model.currentValueTypedIntegerMode = false;
            model.currentValueTypedFloatMode = true;
            model.addCurrentTypedValueFloatMode(".");
          }

        },

        performMathOperation: function () {
          model.setMathOperationValues();
          if (model.readyForMathOperation) {
            model.currentEquationResult = model.operate(model.currentValueInputA, model.currentValueInputB, this.textContent);
            model.currentValueInputA = model.currentEquationResult;
            model.currentValueInputB = null;
            model.readyForMathOperation = false;
            model.currentDisplayedValue = String(model.currentEquationResult);

          }
        },

        addMathOperationValues: function () {
            if (model.currentTypedValue || (model.currentEquationResult === null && model.currentDisplayedValue == "0")) {
              model.addCurrentEquationElements(Number(model.currentDisplayedValue), this.textContent);
              model.resetCurrentTypedValue();
              console.log("works");
            }
          },
          
          performMathOperation: function () {
            if (model.currentEquation.length > 3 && !model.currentTypedValue) {
              console.log("length check worked");
              let currentValueA = (model.currentEquationResult) ? model.currentEquationResult : model.currentEquation[0],
                  currentValueB = model.currentEquation[model.currentEquation.length - 2],
                  operator = model.currentEquation[model.currentEquation.length - 3];
                  console.log(...[currentValueA, currentValueB, operator]);
              model.currentEquationResult = model.operate(currentValueA, currentValueB, operator);
              model.currentDisplayedValue = String(model.currentEquationResult);
              model.resetCurrentTypedValue();
            } 
        }
      
      }


}    