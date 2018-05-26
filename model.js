var gameModel = function () {

    let _currentResult = 0,
        _currentTypedValue = null,
        _currentValueTypedDecimalMode = true,
        _currentValueTypedFloatMode = false,
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

        addCurrentTypedValueDecimalMode: function(input, event) {
              if (!_currentTypedValue && event.target.textContent === "0") {
                  _currentTypedValue = null;
                  this.currentDisplayedValue = "0";
              } else {
                  (!_currentTypedValue) ? _currentTypedValue = input : _currentTypedValue += input;
                  this.currentDisplayedValue = this.currentTypedValue;
              }
        },

        addCurrentTypedValueFloatMode: function(input) {

        },

        removeCurrentTypedValue: function() {
            if (_currentTypedValue.length === 1) {
                _currentTypedValue = null;
                this.currentDisplayedValue = "0";
            } else {
                _currentTypedValue = _currentTypedValue.slice(0, _currentTypedValue.length - 1);
                this.currentDisplayedValue = this.currentTypedValue;
            }
        },

        get currentTypedValue() {
            return _currentTypedValue;
        },

        get currentValueTypedDecimalMode() {
            return _currentValueTypedDecimalMode;
        },

        set currentValueTypedDecimalMode (input) {
            _currentValueTypedDecimalMode = input;
        },

        get currentValueTypedFloatlMode() {
            return _currentValueTypedFloatMode;
        },

        set currentValueTypedFloatMode (input) {
            _currentValueTypedFloatMode = input;
        }
    }
}


