import PlaceOrderModel from "../model/PlaceOrderModel.js";
import {orders,customers} from "../db/db.js";

let currentOrderId = 1;

$(document).ready(() => {
    generateOrderId();
    setDate();

    function generateOrderId() {
        const orderId = 'S' + currentOrderId.toString().padStart(3,'0');
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
    function loadCustomerIds() {
        const $customerDropdown = $('#Customerid-dropdown');

        $customerDropdown.empty();

        const defaultOption = $('<option>', {
            text: 'Select Customer ID',
            value: ''
        });

        $customerDropdown.append(defaultOption);


        customers.forEach(customer => {
            const option = $('<option>', {
                value: customer.custid,
                text: customer.custid
            });
            $customerDropdown.append(option);
        });

    }

    $("#Customerid-dropdown").on('focus',()=>{
        loadCustomerIds();
    });
    $("#Customerid-dropdown").on('change', function() {
        const selectedCustomerId = $(this).val();
        const selectedCustomer = customers.find(customer => customer.custid === selectedCustomerId);

        if (selectedCustomer) {
            $("#CustomerName").val(selectedCustomer.custname);
            $("#Contact").val(selectedCustomer.custcontact);
        } else {
            $("#CustomerName").val('');
            $("#Contact").val('');
        }
    });










});