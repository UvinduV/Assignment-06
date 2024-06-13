/*import {orders} from "../db/db";*/

let currentOrderId = 1;

$(document).ready(() => {
    generateOrderId();
    setDate();

    function generateOrderId() {
        const orderId = 'PO' + currentOrderId.toString().padStart(3,'0');
        $("#OrderID").val(orderId);
        currentOrderId++;
    }

    function setDate(){
        var now = new Date();

        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);

        var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

        $('#current-Date').val(today);
    }










});