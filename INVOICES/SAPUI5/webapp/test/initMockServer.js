sap.ui.define([
    "../localService/mockserver",
    "sap/m/MessageBox"
],
  /**
   * @param{ typeof sap.m.MessageBox } MessageBox
   */ 
  function (mockserver, MessageBox) {
    "use strict";

    var aMockServer = [];

    // Initialize the nockserver
    aMockServer.push(mockserver.init());

    Promise.all(aMockServer).catch(function (oError) {
        MessageBox.error(oError.messager);
    }).finally(function (){
        sap.ui.require(["sap/ui/core/ComponentSupport"]);
    });
  });