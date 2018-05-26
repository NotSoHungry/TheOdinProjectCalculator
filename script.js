/* 

1. User needs to be able to type number and see it on the display:

- variable to store the currently typed number - done
- number rendered when typed - done
- accepts only numbers (decimal and float), "+" etc needs to be added/used in equation only - done

- if "0" is displayed, pressing "0" will not add anything, unless user clicks start typing float number - almost done (floats don't work yet)
- when user click on a ".", he starts to type float number
- when user is typing float number, "." cannot be typed until user goes back to decimal
- when user deletes the ".", he goes back to typing decimal

- values must separated by a whitespace every 4 chars (examples: "1 234", "345 678" etc)

*/



var controller = gameController();
var view = gameView();
var model = gameModel();

view.allNumElements()
  .forEach(button => {
    button.addEventListener('click', controller.typeNumber);
});

view.deleteButton().addEventListener('click', controller.removeNumber);