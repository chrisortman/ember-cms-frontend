import {  test } from 'qunit';  
import moduleForAcceptance from 'cms/tests/helpers/module-for-acceptance';

const DOC_ID = "2";
const SEC_ONE_ID = "A";
const SEC_TWO_ID = "B";

moduleForAcceptance('Acceptance | consent document', {
  needs: ['service:document-store'],
  beforeEach() {
    const documents = this.application.__container__.lookup('service:document-store');
    const db = documents.get('db');
    console.log("test database", db);

    return db.bulkDocs([
      {
        _id: `consentDocument_2_${DOC_ID}`,
        data: {
          title: 'Consent Document',
          sections: [
            SEC_ONE_ID,
            SEC_TWO_ID
          ]
        }
      },

      {
        _id: `consentSection_2_${SEC_ONE_ID}`,
        data: {
          title: 'Section 1',
          document: DOC_ID
        }
      },

      {
        _id: `consentSection_2_${SEC_TWO_ID}`,
        data: {
          title: 'Section 2',
          document: DOC_ID,
        }
      }

    ]);

  },

  afterEach() {
    const documents = this.application.__container__.lookup('service:document-store');
    const db = documents.get('db');
    return db.destroy();
  }
});

test(`visiting /consent-document/${DOC_ID}/edit`, function(assert) {
  visit('/');
  // return pauseTest();

  visit(`/consent-document/${DOC_ID}/edit`);


  click('#section_item_1');
  andThen(function() {
    assert.equal( find('#section_description').text().trim(), "Section 2 of 2 -");
  });
});

test('adding a new section', function(assert) {

  visit(`/consent-document/${DOC_ID}/edit`);

  click('#new_section');
  andThen(function() {
    assert.equal( find('#section_description').text().trim(), "Section 3 of 3 -");
  });
});
