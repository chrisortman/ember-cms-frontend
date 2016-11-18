import Ember from 'ember';

export function indexToPosition(params/*, hash*/) {
  return parseInt(params) + 1;
}

export default Ember.Helper.helper(indexToPosition);
