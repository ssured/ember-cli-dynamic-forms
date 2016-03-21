import Ember from 'ember';

export default Ember.Object.extend({
  render(schema, component) {
    component.$().empty();
    component.$().alpaca(schema);
  }
});
