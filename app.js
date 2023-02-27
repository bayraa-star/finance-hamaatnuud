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
//Private function
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.decription = description;
    this.value = value;
  };
  //Private function
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  //Private data
  var data = {
    items: {
      inc: [],
      exp: [],
    },
  };

  var totals = {
    inc: 0,
    exp: 0,
  };
  return {
    addItem: function (type, description, val) {
      var item, id;

      if (data.items[type].length === 0) id = 1;
      else {
        data.items[types][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expense(id, desc, val);
      }

      data.items[type].push(item);
    },
  };
})();

//Программыг холбох удирдлага
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    var input = uiController.getInput();
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн удирдлагад дамжуулж, тэнд хадгална.
    financeController.addItem();
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
