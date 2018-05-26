var gameController = function () {

    return {
        
        typeNumber: function(event) {
          (model.currentValueTypedDecimalMode) ? model.addCurrentTypedValueDecimalMode(this.textContent, event) :
          (model.currentValueTypedFloatMode) ? "" : "";
          
        },
        removeNumber: function() {
          model.removeCurrentTypedValue();
        }
      
      
        }


}    