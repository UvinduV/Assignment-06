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
    function loadItemCart(){
        $('#item-cart-body').empty();

        cart.map((item,index) => {
            var record = `<tr>
                <td class="itemCode-value">${item.itemcode}</td>
                <td class="item-code-value">${item.customerId}</td>
                <td class="qty-value">${item.qty}</td>
                <td class="price-value">${item.unitprice}</td>
            <tr>`
            $("#item-cart-body").append(record);

            console.log("add to cart");
        });

    }
    function calculatetotal(){
        let startvalue =+$("#Total").val();

        const price = +$("#IPrice").val();
        let qty = +$("#IQty").val();

        let total = price * qty;
        let lastTotal= (total + startvalue);

        /*$("#Total").text(total);*/
        $("#Total").val(lastTotal);
        console.log("total "+lastTotal);
    }


    $('#btn-AddItem').on('click',() => {

        var orderid = $('#OrderID').val();
        var itemcode = $('#Itemid-dropdown option:selected').val();
        var itemname =$('#IName').val();
        var customerId = $('#Customerid-dropdown option:selected').val();
        var date = $('#current-Date').val();
        var qty = $('#IQty').val();
        var unitprice = $('#IPrice').val();
        var total = $('#Total').text();

        let addCart = new PlaceOrderModel(orderid,itemcode,itemname,customerId,date,qty,unitprice,total);
        cart.push(addCart);
        console.log("pass to array");

        loadItemCart();
        calculatetotal();


    });
    $('#btn-purchase').on('click',() => {
        cart.splice(0,10);
        $('#item-cart-body').empty();
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