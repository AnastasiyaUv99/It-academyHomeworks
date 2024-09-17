import { defineParameterType } from '@wdio/cucumber-framework';
import { Utils } from './utils';
import { PageFactory } from '../page-objects/pageFactory.js';


defineParameterType({
  regexp: /"([^"\\]*(\\.[^"\\]*)*)"/,
  name: 'locator',
  transformer: (string) => {
    if (string.indexOf(' > ') !== -1) {
      const array = string.split(' > ');

      return Utils.poParser(array, PageFactory);
    }

    return string;
  },
  useForSnippets: false,
});