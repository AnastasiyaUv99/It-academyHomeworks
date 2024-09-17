import { Base } from '../base.js'

class Search extends Base {
    constructor(){
        super()
    }

    get 'Search input'(){
        return '#top-s'
    }

    get 'Search button'(){
        return '.digi-ac-find.digi-ac-find_button'
    }
}

export { Search };