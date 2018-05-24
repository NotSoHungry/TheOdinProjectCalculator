var gameController = function () {

    return {
        
        typeNumber: function() {
          model.currentValueTyped = true;
          model.currentValueDeleted = false;
          model.editCurrentTypedValue(this.textContent);
        },
        removeNumber: function() {
          model.currentValueDeleted = true;
          model.currentValueTyped = false;
          model.editCurrentTypedValue();
        }
      
      
        }


}    