import {items} from "../db/db";

function loadTable(){
    $("#itemTableBody").empty();

    console.log("Map: ",items);

    items.map((item,index)=>{
        var record = `<tr>
            <td class="customer-id-value">${item.itemid}</td>
            <td class="customer-name-value">${item.custname}</td>
            <td class="customer-address-value">${item.custaddress}</td>
            <td class="customer-contact-value">${item.custcontact}</td>
        </tr>`
        $("#custTableBody").append(record);
    })
}
$("#btn-saveCustomer").on('click', () => {
    var itemid = $("#nItem-Id").val();

    var itemname = $("#nItem-Name").val();

    var itemqty = $("#nItem-Qty").val();

    var itemprice = $("#newItem-Price").val();


    let customer=new CustomerModel(custid,custname,custaddress,custcontact);


    customers.push(customer);
    console.log("pass to array");

    loadTable();

});