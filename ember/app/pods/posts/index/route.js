import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    remove(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  },
  model() {
    return this.store.findAll('post');
  }
});
