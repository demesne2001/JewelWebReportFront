const Baseurl="http://192.168.1.208:5000/"
const Filter = Baseurl + 'Filter/'
const Chart = Baseurl + 'Chart/'
const Card = Baseurl + 'Card/'
const Common = Baseurl + 'Comman/'

const API = {

    BranchFilter: Filter+'GetBranch',
    stateFilter : Filter + 'GetState',
    regionFilter : Filter + 'GetRegion',
    cityFilter : Filter +'GetCity',
    itemGroupFilter : Filter + 'GetItemGroup',
    productFilter : Filter + 'GetProduct',
    itemFilter : Filter + 'GetItem',
    GetSubItem: Filter + 'GetSubItem',
    GetItemWithSubitem : Filter + 'GetItemWithSubitem',
    GetDesignCatalogue: Filter+'GetDesignCatalogue',
    GetSaleman:Filter+'GetSaleman',
    GetSalesParty : Filter+'GetSalesParty',

    GetSalesEfficiencyCard : Card + 'GetSalesEfficiencyCard',
    
}
export default API

