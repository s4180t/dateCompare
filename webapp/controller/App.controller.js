sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/demo/basicTemplate/model/formatter"],
  function (Controller, formatter) {
    "use strict";

    return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {
      formatter: formatter,

      onInit: function () {},

      bCompare: function (dStart, dEnd) {
        if (!dStart || !dEnd) {
          return "";
        }
		// Количество дней в следующем месяце
        var iNextMonthDays = new Date(
          dStart.getFullYear(),
          dStart.getMonth() + 2,
          0
        ).getDate();
        var dMax = new Date(
          dStart.getFullYear(),
          dStart.getMonth() + 1,
          Math.min(dStart.getDate(), iNextMonthDays)
        );
        return dEnd > dMax ? "Больше месяца" : "Меньше месяца";
      },
    });
  }
);
