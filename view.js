var gameView = function () {

    return {

        el: (query) => {
            return document.querySelector(query);
        },

        allEl: function(query) {
            return document.querySelectorAll(query);
        },

        newEl: function(query) {
            return document.createElement(query);
        }

    }
} 