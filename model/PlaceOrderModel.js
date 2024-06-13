export default class PlaceOrderModel{
    constructor(orderid,itemcode,itemname,customerId,date,qty,unitprice,totalprice) {
        this._orderid = orderid;
        this._itemcode = itemcode;
        this._itemname= itemname;
        this._customerId = customerId;
        this._date = date;
        this._qty = qty;
        this._unitprice = unitprice;
        this._totalprice = totalprice;
    }
    /*constructor(itemcode,itemname,qty,unitprice) {
        this._itemcode = itemcode;
        this._itemname= itemname;
        this._qty = qty;
        this._unitprice = unitprice;
    }*/
    get orderid(){
        return this._orderid;
    }

    get itemcode(){
        return this._itemcode;
    }
    get itemname(){
        return this._itemname;
    }

    get customerId(){
        return this._customerId;
    }

    get date(){
        return this._date;
    }

    get qty(){
        return this._qty;
    }

    get unitprice(){
        return this._unitprice;
    }

    get totalprice(){
        return this._totalprice;
    }

    set orderid(orderid){
        this._orderId = orderid;
    }

    set itemcode(itemcode){
        this._itemCode = itemcode;
    }
    set itemname(itemname){
        this._itemname = itemname;
    }

    set customerId(customerId){
        this._customerId = customerId;
    }

    set date(date){
        this._date = date;
    }

    set qty(qty){
        this._qty = qty;
    }

    set unitprice(unitprice){
        this._unitprice= unitprice;
    }

    set totalprice(totalprice){
        this._total = totalprice;
    }

}