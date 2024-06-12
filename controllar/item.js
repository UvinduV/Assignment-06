import ItemModel from "../model/ItemModel.js";
import {items} from "../db/db.js";

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
$("#btn-saveItem").on('click', () => {
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