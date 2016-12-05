import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  researchKitType: DS.attr('string'),
  learnMoreButtonTitle: DS.attr('string',{ defaultValue: 'Learn More' }),
  document: DS.belongsTo('consent-document')
});
