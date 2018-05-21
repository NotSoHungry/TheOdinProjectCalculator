var gameModel = function () {

    let _currentResult = 0,
        _currentTypedValue = null,
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
            view.renderDisplayedNumberFromModel(this.currentDisplayedValue);
        },

        get currentDisplayedValue() {
            return _currentDisplayedValue;
        },

        set currentTypedValue(input) {
            _currentTypedValue = input;
            this.currentDisplayedValue = this.currentTypedValue;
        },

        get currentTypedValue() {
            return _currentTypedValue;
        }
    }
}


