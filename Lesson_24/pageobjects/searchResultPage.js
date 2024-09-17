import { Base } from './base.js'
import {Search} from "./components/search.js";

class SearchResultPage extends Base {
    constructor(){
        super()
        this['Search Component'] = new Search();
    }

    get 'Search Count Header'() {
        return '.landing-header__title'
    }

    get 'Unsuccess search text'() {
        return 'body .digi-title-alternative__wrapper'
    }
}

export { SearchResultPage };