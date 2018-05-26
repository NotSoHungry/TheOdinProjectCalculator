var gameController = function () {

    return {
        
        typeNumber: function(event) {
          (model.currentValueTypedIntegerMode) ? model.addCurrentTypedValueIntegerMode(this.textContent, event) :
          (model.currentValueTypedFloatMode) ? model.addCurrentTypedValueIntegerMode(this.textContent) : "";
          
        },
        
        removeNumber: function() {
          model.removeCurrentTypedValue();
        },

        activateTypingInFloatMode: function() {
          if (model.currentTypedValue.indexOf(".") === -1) {
            model.currentValueTypedIntegerMode = false;
            model.currentValueTypedFloatlMode = true;
            model.addCurrentTypedValueFloatMode(".");
          }

        }
      
      
        }


}    