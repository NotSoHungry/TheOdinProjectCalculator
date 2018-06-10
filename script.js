/* 

1. User needs to be able to type number and see it on the display:

- variable to store the currently typed number - done
- number rendered when typed - done
- accepts only numbers (decimal and float), "+" etc needs to be added/used in equation only - done

- if "0" is displayed, pressing "0" will not add anything, unless user clicks start typing float number - done
- when user click on a ".", he starts to type float number - done
- when user is typing float number, "." cannot be typed until user goes back to decimal - done
- when user deletes the ".", he goes back to typing decimal - done

- values must separated by a whitespace every 4 chars (examples: "1 234", "345 678" etc) - done

2. User needs to be able to perform mathematical equations and see curren equation above the displayed number (with current operator at the end of it)

- variables to store two numbers for the mathematical operations - done
- variable to store the information about current operation type - done
- variable to store the current equation result - done

- if current valueA is empty, pressing operator button will assign displayed number to valueA variable and wait for valueB before performing any math operation - done
- if valueB isn't defined, app will wait for the user to provide the number - pressing operator button will not trigger any action - done
- after every mathematical operation, current equation result will need to be assigned to valueA - done
- after every mathematical operation, valueB will be set to null - done
- after every mathematival operation, current equation value is assigned as the currently displayed number - done
- after every mathematical operation, if user will start typing her/his own number, current equation value will be replaced by user's input - for inputB as well as displayed number - done
- if float mode is on, performing mathematical operation will reverse the app back to integer mode - done

- current equation will start to be displayed as soon as user will press the operator button - done
- current equation will be rendered to the latest operator character, valueB will be displayed as the main number - done
- current equation will be stored as an array, however it will be rendered as text - done
- every chain of same of same precedense operations in the equation should be enclosed in parenthesis when displayed if a higher precendense operation is listed after them








*/



var controller = gameController();
var view = gameView();
var model = gameModel();

view.allNumElements()
  .forEach(button => {
    button.addEventListener('click', controller.typeNumber);
});

view.deleteButton().addEventListener('click', controller.removeNumber);
view.enableFloatModeButton().addEventListener('click', controller.activateTypingInFloatMode);

view.mathOperationButtons().forEach(button => {
  button.addEventListener('click', controller.addMathOperationValues);
  button.addEventListener('click', controller.performMathOperation);
  button.addEventListener('click', controller.changeCurrentOperator);
});


/*

function addWhiteSpace (str) {
  let tempArrayToExtractInteger = str.split('.'),
      tempArrayOnlyInteger = tempArrayToExtractInteger[0].split(''),
      tempArrayOnlyIntegerReversed = [];

  for (let i = 0; i < tempArrayOnlyInteger.length; i++) {
    tempArrayOnlyIntegerReversed.unshift(tempArrayOnlyInteger[i]);
  }
  
  return tempArrayOnlyIntegerReversed
    .reduce((arrayWithWhiteSpace, currentDigit) => {
      arrayWithWhiteSpace.push(currentDigit)
      if (arrayWithWhiteSpace.length % 3 === 0) {
        arrayWithWhiteSpace.push(' ');
      }
      return arrayWithWhiteSpace;
  }, [])
    .join('');
}

*/