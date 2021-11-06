export interface StockModel {
    name: string,
    open: string,
    close: string,
    low: string,
    high: string
}

export function getDefaultStockModel(){
    return {
        name:'',
        open: '',
        close:'',
        low:'',
        high:''    
    };
}