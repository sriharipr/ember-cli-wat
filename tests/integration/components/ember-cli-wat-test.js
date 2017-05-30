import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-cli-wat', 'Integration | Component | ember cli wat', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-cli-wat}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-cli-wat}}
      template block text
    {{/ember-cli-wat}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
