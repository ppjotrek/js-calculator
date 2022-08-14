
window.onload = function () {

        console.log("Strona załadowana poprawnie");
        calculator.init();

};

let calculator = {

    button: undefined,
    input: undefined,

    init: function () {
        this.buttons = document.querySelectorAll(".numbers button, .operators button");
        //console.log(this.buttons);
        this.input = document.getElementById("input");

        for(let i = 0; i < this.buttons.length; i++) {
            let el = this.buttons[i];
            el.addEventListener("click", this.buttonClick);
        }
    },

    buttonClick: function (evnt) {

        let divText = evnt.target.innerHTML;
        console.log("clicked " + divText);

        switch (divText) {

            case "=":
                calculator.evaluate();
            break;

            case "C":
                calculator.clear();
            break;

            default: calculator.addToInput(divText);

        }

    },

    addToInput: function (str) {
        this.input.value += str;
    },

    evaluate: function () {
        let result = math.evaluate(calculator.input.value);
        calculator.input.value = result;
    },

    clear: function () {
        calculator.input.value = "";
    }

};