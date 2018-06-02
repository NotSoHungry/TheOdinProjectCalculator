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

        
      
      
    }


}    