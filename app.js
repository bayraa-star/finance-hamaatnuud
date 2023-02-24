//Дэлгэцтэй ажиллах удирдлага
var uiController = (function () {})();

//Санхүүтэй ажиллах удирдлага
var financeController = (function () {})();

//Программыг холбох удирдлага
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log("Дэлгэцээс өгөгдлөө авах хэсэг.");
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

  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
