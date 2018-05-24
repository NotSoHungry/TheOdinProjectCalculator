/* 

1. User needs to see currently typed numbers:

- variable to store the currently typed number
- number rendered when typed
- accepts only numbers (decimal and float), "+" etc needs to be added/used in equation only

*/



var controller = gameController();
var view = gameView();
var model = gameModel();

view.allNumElements()
  .forEach(button => {
    button.addEventListener('click', controller.typeNumber);
});

view.deleteButton().addEventListener('click', controller.removeNumber);