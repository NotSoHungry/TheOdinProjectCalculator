var gameModel = function () {

    let _currentResult = 0,
        _currentTypedValue = null,
        _currentValueTyped = false,
        _currentValueDeleted = false,
        _currentDisplayedValue = 0,
        _currentValueInputA = null,
        _currentValueInputB = null,
        _currentEquation = null,
        _pastEquations = [];


    return {
        operate: function (inputA, inputB, operation) {
            switch (operation) {
                case "+":
                return inputA + inputB;
                break;
                case "-":
                return inputA - inputB;
                break;
            }
        },

        set currentDisplayedValue(input) {
            _currentDisplayedValue = input;
            view.renderDisplayedNumber(this.currentDisplayedValue);
        },

        get currentDisplayedValue() {
            return _currentDisplayedValue;
        },

        editCurrentTypedValue: function(input) {
            if (_currentValueTyped) {
              (_currentTypedValue === null) ? _currentTypedValue = input : _currentTypedValue += input;
              this.currentDisplayedValue = this.currentTypedValue;
            } else if (_currentValueDeleted) {
              if (_currentTypedValue.length === 1) {
                _currentTypedValue = null;
                this.currentDisplayedValue = "0";
              } else {
                _currentTypedValue = _currentTypedValue.slice(0, _currentTypedValue.length - 1);
                console.log(_currentTypedValue.slice(0,  _currentTypedValue.length - 1));
                this.currentDisplayedValue = this.currentTypedValue;
              }
            }
        },

        get currentTypedValue() {
            return _currentTypedValue;
        },
      
        set currentValueTyped(input) {
          _currentValueTyped = input;
        },
      
        set currentValueDeleted(input) {
          _currentValueDeleted = input;
        }
    }
}


