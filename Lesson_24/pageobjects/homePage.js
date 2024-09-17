import { Base } from './base.js';
import {Search} from "./components/search.js";

class HomePage extends Base {
    constructor(){
        super()
        this['Search Component'] = new Search();
    }
}

export { HomePage };