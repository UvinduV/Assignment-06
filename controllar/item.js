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