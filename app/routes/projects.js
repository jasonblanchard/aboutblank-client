import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: "ApprenNet",
        description: "Description blah blah blah ....",
        url: "https://www.apprennet.com",
        code: ''
      },
      {
        id: 2,
        name: "Writermortis",
        description: "Blah dee blah",
        url: "http://www.writermortis.com/",
        code: "https://github.com/jasonblanchard/writermortis"
      }
    ];
  }
});
