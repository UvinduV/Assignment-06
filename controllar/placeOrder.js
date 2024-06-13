import PlaceOrderModel from "../model/PlaceOrderModel.js";
import {orders,customers,items,cart} from "../db/db.js";


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
    /* Add Item */
    function loadItemIds(){
        const $itemDropdown = $('#Itemid-dropdown');

        $itemDropdown.empty();

        const defaultOption = $('<option>',{
            text: 'Select Item ID',
            value: ''
        });

        $itemDropdown.append(defaultOption);

        items.forEach(item => {
            const option = $('<option>',{
                value: item.itemid,
                text: item.itemid
            });
            $itemDropdown.append(option);
        });
    }

    $("#Itemid-dropdown").on('focus',()=>{
        loadItemIds();
    });
    $("#Itemid-dropdown").on('change', function() {
        const selectedItemId = $(this).val();
        const selectedItem = items.find(item => item.itemid === selectedItemId);

        if (selectedItem) {
            $("#IName").val(selectedItem.itemname);
            $("#IPrice").val(selectedItem.itemprice);
            $("#QtyOnHand").val(selectedItem.itemqty);
        } else {
            $("#IName").val('');
            $("#IPrice").val('');
            $("#QtyOnHand").val('');
        }
    });
    /*Add to Cart*/
    function loadItemCart(itemcode,itemname,qty,unitprice){
        $('#item-cart-body').empty();

        /*orders.map((item,index) => {
            var record = `<tr>
                <td class="itemCode-value">${item.itemcode}</td>
                <td class="item-code-value">${item.itemname}</td>
                <td class="qty-value">${item.qty}</td>
                <td class="price-value">${item.unitprice}</td>
            <tr>`
            $("#item-cart-body").append(record);

            console.log("add to cart:"+itemname);
        });*/
        /*orders.map((item,index) => {*/
            var record = `<tr>
                <td class="itemCode-value">${itemcode}</td>
                <td class="item-code-value">${itemname}</td>
                <td class="qty-value">${qty}</td>
                <td class="price-value">${unitprice}</td>
            <tr>`
            $("#item-cart-body").append(record);

            console.log("add to cart:"+itemname);
        /*});*/
    }
    function calculatetotal(){
        const price = +$("#IPrice").val();
        let qty = +$("#IQty").val();

        let total = price * qty;

        $("#Total").text(total);
    }

    $('#btn-AddItem').on('click',() => {
        /*calculatetotal();*/

        var itemcode = $('#Itemid-dropdown option:selected').val();
        var itemname =$('#IName').val();
        var qty = $('#IQty').val();
        var unitprice = $('#IPrice').val();

        /*let addCart = new PlaceOrderModel(itemcode,itemname,qty,unitprice);
        items.push(item);
        console.log("pass to array");*/
        loadItemCart(itemcode,itemname,qty,unitprice);
        /*
        reset();*/

    });


    /*var orderid = $('#OrderID').val();
    var itemcode = $('#Itemid-dropdown option:selected').val();
    var customerId = $('#Customerid-dropdown option:selected').val();
    var date = $('#current-Date').val();
    var qty = $('#IQty').val();
    var unitprice = $('#IPrice').val();
    var total = $('#Total').text();


    let order = new PlaceOrderModel(orderid,itemcode,customerId,date,qty,unitprice,total);
*/












});