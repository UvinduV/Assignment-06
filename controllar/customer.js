/*var customers=[];*/
import CustomerModel from "../model/CustomerModel.js";
import {customers} from "../db/db.js"

var recordIndex;
function loadTable(){
    $("#custTableBody").empty();

    console.log("Map: ",customers);

    customers.map((item,index)=>{
        var record = `<tr>
            <td class="customer-id-value">${item.custid}</td>
            <td class="customer-name-value">${item.custname}</td>
            <td class="customer-address-value">${item.custaddress}</td>
            <td class="customer-contact-value">${item.custcontact}</td>
        </tr>`
        $("#custTableBody").append(record);
    })
}


$("#btn-Ncustomer").on('click', () => {
    generateCustomerId();
});

let currentCustId = 1;
function generateCustomerId() {
    const custId = 'C' + currentCustId.toString().padStart(3,'0');
    $("#nCust-Id").val(custId);
    currentCustId++;
}

$("#btn-saveCustomer").on('click', () => {
    var custid = $("#nCust-Id").val();

    var custname = $("#nCust-Name").val();

    var custaddress = $("#nCust-Address").val();

    var custcontact = $("#nCust-Contact").val();

    /*let customer={
        custid: custid,
        custname:custname,
        custaddress:custaddress,
        custcontact:custcontact
    }*/

    let customer=new CustomerModel(custid,custname,custaddress,custcontact);

    customers.push(customer);
    console.log("pass to array");
    loadTable();
    resetNewCust();
    generateCustomerId();
});
function resetNewCust(){
    $('#nCust-Name').val('');
    $('#nCust-Address').val('');
    $('#nCust-Contact').val('');
}

$("#btnCustUpdate").on('click', () =>{
    var custid = $("#custID").val();

    var custname = $("#custName").val();

    var custaddress = $("#custAddress").val();

    var custcontact = $("#custContct").val();

    console.log(custid);
    console.log(custname);
    console.log(custaddress);
    console.log(custcontact);

    customers[recordIndex] = new CustomerModel(custid,custname,custaddress,custcontact);

    loadTable(customers);

});

$("#btnCustDelete").on('click', () => {
    customers.splice(recordIndex,1);
    loadTable();
    console.log("delete cust");


});



$("#custTableBody").on('click','tr', function (){
    let index = $(this).index();
    recordIndex = index;

    let id = $(this).find(".customer-id-value").text();
    let name = $(this).find(".customer-name-value").text();
    let address = $(this).find(".customer-address-value").text();
    let contact = $(this).find(".customer-contact-value").text();

    console.log("hello"+id+name+address+contact);


    $("#custID").val(id);
    $("#custName").val(name);
    $("#custAddress").val(address);
    $("#custContct").val(contact);


});
