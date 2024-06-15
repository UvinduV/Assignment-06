import ItemModel from "../model/ItemModel.js";
import {customers, items} from "../db/db.js";

var recordIndex;
function loadTable(){
    $("#itemTableBody").empty();

    console.log("Map: ",items);

    items.map((item,index)=>{
        var record = `<tr>
            <td class="item-id-value">${item.itemid}</td>
            <td class="item-name-value">${item.itemname}</td>
            <td class="item-qty-value">${item.itemqty}</td>
            <td class="item-price-value">${item.itemprice}</td>
        </tr>`
        $("#itemTableBody").append(record);
    })
}

$("#btn-Nitem").on('click', () => {
    generateItemId();
});

let currentitemId = 1;
function generateItemId() {
    const itemId = 'I' + currentitemId.toString().padStart(3,'0');
    $("#nItem-Id").val(itemId);
    currentitemId++;
}

$("#btn-saveItem").on('click', () => {
    if (!validateNewItem()) {
        return;
    }

    var itemid = $("#nItem-Id").val();

    var itemname = $("#nItem-Name").val();

    var itemqty = $("#nItem-Qty").val();

    var itemprice = $("#newItem-Price").val();

    /*let item={
        itemid: itemid,
        itemname:itemname,
        itemqty:itemqty,
        itemprice:itemprice
    }*/

    let item=new ItemModel(itemid,itemname,itemqty,itemprice);


    items.push(item);
    console.log("pass to array");

    loadTable();
    resetNewItem();
    generateItemId();
});
function resetNewItem(){
    $('#nItem-Name').val('');
    $('#nItem-Qty').val('');
    $('#newItem-Price').val('');
}


$("#btn-UpdateItem").on('click', () =>{
    if (!validateItem()) {
        return;
    }
    var itemtid = $("#itemID").val();

    var itemname = $("#itemName").val();

    var itemqty = $("#itemQty").val();

    var itemprice = $("#itemPrice").val();

    console.log(itemtid);
    console.log(itemname);
    console.log(itemqty);
    console.log(itemprice);

    items[recordIndex] = new ItemModel(itemtid,itemname,itemqty,itemprice);

    loadTable(items);
    resetItem();
});

$("#btn-DeleteItem").on('click', () => {
    if (!validateItem()) {
        return;
    }
    items.splice(recordIndex,1);
    loadTable();
    console.log("delete item");

    resetItem();
});

$("#itemTableBody").on('click','tr', function (){
    let index = $(this).index();
    recordIndex = index;

    let id = $(this).find(".item-id-value").text();
    let name = $(this).find(".item-name-value").text();
    let qty = $(this).find(".item-qty-value").text();
    let price = $(this).find(".item-price-value").text();

    console.log("hello"+id+name+qty+price);

    $("#itemID").val(id);
    $("#itemName").val(name);
    $("#itemQty").val(qty);
    $("#itemPrice").val(price);

});

function resetItem(){
    $('#itemID').val('');
    $('#itemName').val('');
    $('#itemQty').val('');
    $('#itemPrice').val('');
}

function validateNewItem(){
    const itemCode = $("#nItem-Id").val();

    const isItemCodeValidated = /[I][0-9]{3,}/;

    if (!isItemCodeValidated.test(itemCode)) {
        alert('Invalid Item Code. It should be in the format I000.');
        return false;
    }

    const itemName = $("#nItem-Name").val();

    const isItemNameValidated = /[A-Z][a-zA-Z\s]+/;

    if (!isItemNameValidated.test(itemName)) {
        alert('Invalid Item Name. It should start with a capital letter.');
        return false;
    }

    const itemQty = $("#nItem-Qty").val();

    const isItemQtyValidated = /^[1-9]\d*$/;

    if (!isItemQtyValidated.test(itemQty)) {
        alert('Invalid Item Qty. It should be a positive quantity.');
        return false;
    }

    const itemPrice = $("#newItem-Price").val();

    const isItemPriceValidated = /^\d+(\.\d{1,2})?$/;

    if (!isItemPriceValidated.test(itemPrice)) {
        alert('Invalid Item Price. It should be a positive Price.');
        return false;

    }

    return true;
}

function validateItem(){

    const itemName = $("#itemName").val();

    const isItemNameValidated = /[A-Z][a-zA-Z\s]+/;

    if (!isItemNameValidated.test(itemName)) {
        alert('Invalid Item Name. It should start with a capital letter.');
        return false;
    }

    const itemQty = $("#itemQty").val();

    const isItemQtyValidated = /^[1-9]\d*$/;

    if (!isItemQtyValidated.test(itemQty)) {
        alert('Invalid Item Qty. It should be a positive quantity.');
        return false;
    }

    const itemPrice = $("#itemPrice").val();

    const isItemPriceValidated = /^\d+(\.\d{1,2})?$/;

    if (!isItemPriceValidated.test(itemPrice)) {
        alert('Invalid Item Price. It should be a positive Price.');
        return false;
    }

    return true;
}

