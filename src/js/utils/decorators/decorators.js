import createDecorator from './createDecorator';
import _debounce from 'lodash/function/debounce';

export const debounce = createDecorator(_debounce);
