var customers=[];
function loadTable(){
    $("#custTableBody").empty();

    console.log("Map: ",customers);

    customers.map((item,index)=>{
        var record = `<tr>
            <td class="newcustomer-id-value">${item.custid}</td>
            <td class="newcutomer-name-value">${item.custname}</td>
            <td class="newcustomer-address-value">${item.custaddress}</td>
            <td class="newcustomer-contact-value">${item.custcontact}</td>
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