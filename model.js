var gameModel = function () {

    let _currentResult = 0,
        _currentTypedValue = null,
        _currentValueTypedIntegerMode = true,
        _currentValueTypedFloatMode = false,
        _currentDisplayedValue = "0",
        _readyForMathOperation = false,
        _currentEquation = [],
        _currentEquationResult = null,
        _pastEquations = [],
        _isUserTyping = true;


    return {
        operate: function (inputA, inputB, operator) {
            switch (operator) {
                case "+":
                return inputA + inputB;
                break;
                case "-":
                return inputA - inputB;
                break;
                case "x":
                return inputA * inputB;
                break;
                case "/":
                return inputA / inputB;
            }
        },

        set currentDisplayedValue(input) {
            _currentDisplayedValue = input;
            view.renderDisplayedNumber(this.currentDisplayedValue);
        },

        get currentDisplayedValue() {
            return _currentDisplayedValue;
        },

        addCurrentTypedValueIntegerMode: function(input, event) {
            if (!_currentTypedValue && event.target.textContent === "0") {
                _currentTypedValue = input;
                this.currentDisplayedValue = _currentTypedValue;
            } else {
                (_currentTypedValue && Number(_currentDisplayedValue)) ? _currentTypedValue += input : _currentTypedValue = input;
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

        get readyForMathOperation() {
            return _readyForMathOperation;
        },

        set readyForMathOperation(input) {
            _readyForMathOperation = input;
        },

        get currentEquationResult() {
            return _currentEquationResult;
        },

        set currentEquationResult(input) {
            _currentEquationResult = input;
        }, 

        addCurrentEquationElements: function (...elements) {
            _currentEquation.push(...elements);
            view.renderCurrentEquation(_currentEquation);
        },

        changeCurrentEquationOperator: function (input) {
            let currentOperatorIndex = _currentEquation.length - 1;
            _currentEquation.splice(currentOperatorIndex, 1, input);
            view.renderCurrentEquation(_currentEquation);
        },

        get currentEquation() {
            return _currentEquation;
        },

        userIsTyping: function() {
            _isUserTyping = true;
        },

        userEndedTyping: function () {
            _isUserTyping = false;
        }


    }
}


