var gameModel = function () {

    let _currentResult = 0,
        _currentTypedValue = null,
        _currentValueTypedIntegerMode = true,
        _currentValueTypedFloatMode = false,
        _currentDisplayedValue = "0",
        _isDisplayedValueNegative = false;
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

        /*
        Typing scenarios:

        1. Addition:

        - user started the app, 0 is displayed, nothing is typed yet or the input has been deleted -> typing 0 should not give any effect, typing other numbers should result in replacing 0 with the number
        - user clicked on any number, while nothing has been typed yet or is just after a math operation and the result is displayed -> displayed number should be replaced with the typed number (even 0)

        a) 0 displayed -> pressing 0 will not give any result, other number will replace 0, pressing '.' will add it
        b) equation result is displayed -> any number will replace the result, even 0 | oressing '.' will display "0."
        c) a number other than 0 is displayed -> any pressed number will be added to it
        d) '.' is a part of the number -> any pressed number will be added after it

        2. Removal:

        a) "0." is displayed - deleting "." will result in only 0 being displayed (scenario "a" in addition scenarios)
        b) "5." (or different num other than 0) is displayed -> deleting "." will result with only the number displayed (scenario "b" in addition scenarios)
        c) "0" is displayed -> nothing will happen
        d) A number other than 0 is displayed ("5", "55" etc) -> if longer than one char, only the last char will be removed, if contains only one char, 0 will be displayed (scenario "a" in addition scenarios)

        */

        testAddCurrentTypedValue: function(input) {
            (_currentTypedValue === null)  ? _currentTypedValue = input : _currentTypedValue += input;
        },

        testRemoveCurrentTypedValue: function() {
            (_currentTypedValue.length === 1 || (_isDisplayedValueNegative && _currentTypedValue.length === 2)) ? _currentTypedValue = "0" : _currentTypedValue = _currentTypedValue.slice(0, _currentTypedValue.length - 1);
            
        },

        testActivateFloatMode: function() {
            if (_currentTypedValue === null) {
                _currentTypedValue = "0.";
            } else {
                (_currentTypedValue.indexOf(".") < 0) ? _currentTypedValue = _currentDisplayedValue + "." : '';
            }
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
        },

        get isUserTyping() {
            return _isUserTyping;
        },

        get isDisplayedValueNegative () {
            return _isDisplayedValueNegative;
        },

        set isDisplayedValueNegative (input) {
            _isDisplayedValueNegative = input;
        },

        switchTypedValuePlusMinus: function () {
            if (_currentTypedValue !== null) {
                (_currentTypedValue.indexOf("-") === -1) ? _currentTypedValue = "-" + _currentTypedValue : _currentTypedValue = _currentTypedValue.slice(1);
            } else {
                (_currentDisplayedValue.indexOf("-") === -1) ? _currentDisplayedValue = "-" + _currentDisplayedValue : _currentDisplayedValue = _currentDisplayedValue.slice(1);
            }
        }


    }
}


