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
    if (!validateCustomer()) {
        return;
    }

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
    let isDuplicate = customers.some(customer => customer.custid === custid);

    if(isDuplicate){
        alert('Customer ID Already Exists. Please Try another ID');
        return;
    }

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

function validateCustomer(){
    const custid =  $("#nCust-Id").val();

    const isCusIdValidated = /[C][0-9]{3,}/;

    if (!isCusIdValidated.test(custid)) {
        alert('Invalid Customer ID. It should be in the formated in C000.');
        return false;
    }

    const custname = $("#nCust-Name").val();

    const isCusNameValidated = /[A-Z][a-zA-Z\s]+/;

    if(!isCusNameValidated.test(custname)){
        alert('Invalid Customer Name. It should be start with a capital letter.');
        return false;
    }

    const custaddress =  $("#nCust-Address").val();

    const isCusAddressValidated = /[A-Z][a-zA-Z\s]+/;

    if(!isCusAddressValidated.test(custaddress)){
        alert('Invalid Customer Address. It should be start with a capital letter.');
        return false;
    }

    const custcontact = $("#nCust-Contact").val();

    const isCusTelValidated = /^0\d{9}$/;


    if(!isCusTelValidated.test(custcontact)){
        alert('Invalid Customer Telephone number.');
        return false;
    }
    return true;

}

