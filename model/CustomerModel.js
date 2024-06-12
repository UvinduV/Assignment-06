export default class CustomerModel{
    constructor(custid,custname,custaddress,custcontact) {
        this._custid = custid;
        this._custname = custname;
        this._custaddress = custaddress;
        this._custcontact = custcontact;
    }

    get custid(){
        return this._custid;
    }

    get custname(){
        return this._custname;
    }

    get custaddress(){
        return this._custaddress;
    }

    get custcontact(){
        return this._custcontact;
    }

    set custid(custid){
        this._custId = custid;
    }

    set custname(custname){
        this._custName = custname;
    }

    set custaddress(custaddress){
        this._custAddress = custaddress;
    }

    set custcontact(custcontact){
        this._custTel = custcontact;
    }
}