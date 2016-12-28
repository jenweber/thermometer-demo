import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thermometer-svg', 'Integration | Component | thermometer svg', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{thermometer-svg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#thermometer-svg}}
      template block text
    {{/thermometer-svg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
