export default class ItemModel{
    constructor(itemid,itemname,itemqty,itemprice) {
        this._itemid = itemid;
        this._itemname = itemname;
        this._itemqty = itemqty;
        this._itemprice = itemprice;
    }

    get itemid(){
        return this._itemid;
    }

    get itemname(){
        return this._itemname;
    }

    get itemqty(){
        return this._itemqty;
    }

    get itemprice(){
        return this._itemprice;
    }

    set itemid(itemid){
        this._itemid = itemid;
    }

    set itemname(itemname){
        this._itemname = itemname;
    }

    set itemqty(itemqty){
        this._itemqty = itemqty;
    }

    set itemprice(itemprice){
        this._itemprice = itemprice;
    }
}