import {  test } from 'qunit';  
import Ember from 'ember';
import moduleForAcceptance from 'cms/tests/helpers/module-for-acceptance';
import RSVP from 'rsvp';

moduleForAcceptance('Acceptance | consent document', {
  needs: ['service:document-store'],
  beforeEach() {
    const documents = this.application.__container__.lookup('service:document-store');
    const db = documents.get('db');
    return RSVP.Promise.all(
    db.put({
      _id: 'consent_document_2_1',
      _rev: '1',
      data: {
        title: 'Consent Document',
        sections: [
          'section-1',
          'section-2'
        ]
      }
    }),

    db.put({
      _id: 'consent_section_2_section-1',
      _rev: '1',
      data: {
        title: 'Section 1'
      }
    }),

    db.put({
      _id: 'consent_section_2_section-2',
      _rev: '1',
      data: {
        title: 'Section 2'
      }
    })
    );
  }
});

test('visiting /consent-document/2/edit', function(assert) {
  visit('/');
  // return pauseTest();

  visit('/consent-document/2/edit');


  click('#section_item_1');
  andThen(function() {
    assert.equal( find('#section_description').text().trim(), "Section 2 of 2 -");
  });
});

test('adding a new section', function(assert) {

  visit('/consent-document/2/edit');

  click('#new_section');
  andThen(function() {
    assert.equal( find('#section_description').text().trim(), "Section 3 of 3 -");
  });
});
