sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
    /**
     * 
     *  @param {typeof sap.ui.core.mvc.Controller} Controller
     *  @param {typeof sap.m.MessageToast} MessageToast  
     */
    function (Controller, MessageToast) {
        "use strict";
        
        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function(){
                
                
            },

            onShowHello: function(){
                // Read text from i18n model
                let oBundle = this.getView().getModel("i18n").getResourceBundle();

                // Read property from data model
                let sRecipient = this.getView().getModel().getProperty("/recipient/name")

                // Mensaje
                let sMsg = oBundle.getText("helloMsg", [sRecipient])
                MessageToast.show(sMsg);
            }
        });
    });