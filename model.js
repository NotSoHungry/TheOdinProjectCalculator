var gameModel = function () {

    let _currentResult = 0,
        _currentTypedValue = null,
        _currentValueTypedIntegerMode = true,
        _currentValueTypedFloatMode = false,
        _currentDisplayedValue = "0",
        _currentValueInputA = null,
        _currentValueInputB = null,
        _currentOperator = null,
        _readyForMathOperation = false,
        _currentEquation = [],
        _currentEquationResult = null,
        _pastEquations = [];


    return {
        operate: function (inputA, inputB, operator) {
            switch (operator) {
                case "+":
                return this.currentValueInputA + this.currentValueInputB;
                break;
                case "-":
                return this.currentValueInputA - this.currentValueInputB;
                break;
                case "x":
                return this.currentValueInputA * this.currentValueInputB;
                break;
                case "/":
                return this.currentValueInputA / this.currentValueInputB;
            }
        },

        set currentDisplayedValue(input) {
            _currentDisplayedValue = input
            ;
            view.renderDisplayedNumber(this.currentDisplayedValue);
        },

        get currentDisplayedValue() {
            return _currentDisplayedValue;
        },

        addCurrentTypedValueIntegerMode: function(input, event) {
            if (!_currentTypedValue && event.target.textContent === "0") {
                return '';
            } else {
                (!_currentTypedValue) ? _currentTypedValue = input : _currentTypedValue += input;
                this.currentDisplayedValue = this.currentTypedValue;
            }
        },

        addCurrentTypedValueFloatMode: function(input) {
            if (!_currentTypedValue) {
                _currentTypedValue = "0";
                _currentTypedValue += input;
            } else {
                _currentTypedValue += input;
            }
            this.currentDisplayedValue = this.currentTypedValue;
        },

        removeCurrentTypedValue: function() {
            if (_currentTypedValue.length === 1) {
                _currentTypedValue = null;
                this.currentDisplayedValue = "0";
            } else {
                let valueToRemove = _currentTypedValue.slice(_currentTypedValue.length - 1);
                if (valueToRemove === ".") {
                    this.currentValueTypedFloatMode = false;
                    this.currentValueTypedIntegerMode = true;
                }
                _currentTypedValue = _currentTypedValue.slice(0, _currentTypedValue.length - 1);
                this.currentDisplayedValue = this.currentTypedValue;
                (_currentTypedValue === "0") ? _currentTypedValue = null : "";
            }
        },

        setMathOperationValues: function() {
            if (!this.currentValueInputA && this.currentValueInputA !== 0) {
                this.currentValueInputA = Number(this.currentDisplayedValue);
                this.resetCurrentTypedValue();
            } else if (!this.currentValueInputB && this.currentValueInputB !== 0) {
              (this.currentTypedValue) ? this.currentValueInputB = Number(this.currentDisplayedValue) : "";
              this.resetCurrentTypedValue();
              this.readyForMathOperation = true;
            }
        },

        resetCurrentTypedValue: function () {
            _currentTypedValue = null;
        },

        get currentTypedValue() {
            return _currentTypedValue;
        },

        get currentValueTypedIntegerMode() {
            return _currentValueTypedIntegerMode;
        },

        set currentValueTypedIntegerMode (input) {
            _currentValueTypedIntegerMode = input;
        },

        get currentValueTypedFloatMode() {
            return _currentValueTypedFloatMode;
        },

        set currentValueTypedFloatMode (input) {
            _currentValueTypedFloatMode = input;
        },

        get currentValueInputA() {
            return _currentValueInputA;
        },

        set currentValueInputA(input) {
            _currentValueInputA = input;
        },

        get currentValueInputB() {
            return _currentValueInputB;
        },

        set currentValueInputB(input) {
            _currentValueInputB = input;
        },

        get readyForMathOperation() {
            return _readyForMathOperation;
        },

        set readyForMathOperation(input) {
            _readyForMathOperation = input;
        },

        get currentOperator() {
            return _currentOperator;
        },

        set currentOperator(input) {
            _currentOperator = input;
        },

        get currentEquationResult() {
            return _currentEquationResult;
        },

        set currentEquationResult(input) {
            _currentEquationResult = input;
        }, 

        addCurrentEquationElement: function (element) {
            _currentEquation.push(element);
        },


    }
}


