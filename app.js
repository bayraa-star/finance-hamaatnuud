//Дэлгэцтэй ажиллах удирдлага
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        decription: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

//Санхүүтэй ажиллах удирдлага
var financeController = (function () {})();

//Программыг холбох удирдлага
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log(uiController.getInput());
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн удирдлагад дамжуулж, тэнд хадгална.
    console.log("Олж авсан өгөгдлүүдээ санхүүгийн удирдлагад дамжуулах хэсэг");
    // 3. Олж авсан өгөгдлүүдийг веб дээрээ тохирох хэсэгт нь гаргана.
    console.log(
      "Олж авсан өгөгдлүүдийг веб дээрээ тохирох хэсэгт нь гаргах хэсэг"
    );
    // 4. Төсвийг тооцоолно
    console.log("Төсвийг тооцоолох хэсэг");
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
    console.log("Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргах хэсэг");
  };

  var setupEvenListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Application started!!!");
      setupEvenListeners();
    },
  };
})(uiController, financeController);

appController.init();
