
Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});
Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListStuff'
});

Router.route('/add', {
  name: 'AddStuff'
});

Router.route('/pueo', {
  name: 'pueo'
});

Router.route('/aukahi', {
  name: 'aukahi'
});

Router.route('/kamanuv6', {
  name: 'kamanuv6'
});

Router.route('/about', {
  name: 'about'
});

Router.route('/stuff/:_id', {
  name: 'EditStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
