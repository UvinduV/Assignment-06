var customers=[];
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


$("#btn-saveCustomer").on('click', () => {
    var custid = $("#nCust-Id").val();

    var custname = $("#nCust-Name").val();

    var custaddress = $("#nCust-Address").val();

    var custcontact = $("#nCust-Contact").val();

    /*console.log("cust-ID: ", custid);
    console.log("cust-Name: ", custname);
    console.log("cust-Address: ", custaddress);
    console.log("cust-contact: ", custcontact);*/

    /*var record = `<tr>
        <td class="newcustomer-id-value">${custid}</td>
        <td class="newcutomer-name-value">${custname}</td>
        <td class="newcustomer-address-value">${custaddress}</td>
        <td class="newcustomer-contact-value">${custcontact}</td>
    </tr>`*/

    /*console.log(record);
    $("#custTableBody").append(record);*/

    let customer={
        custid: custid,
        custname:custname,
        custaddress:custaddress,
        custcontact:custcontact
    }


    customers.push(customer);
    console.log("pass to array");

    loadTable();

});

$("#btnCustUpdate").on('click', () =>{
    var custid = $("#custID").val();

    var custname = $("#custName").val();

    var custaddress = $("#custAddress").val();

    var custcontact = $("#custContct").val();

    let customerobj= {...customers[recordIndex]};

    customerobj.custId=custid;
    customerobj.custName=custname;
    customerobj.custAddress=custaddress;
    customerobj.custContact=custcontact;

    console.log("helo"+customerobj.custName);

    loadTable();

});

$("#btnCustDelete").on('click', () => {
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
