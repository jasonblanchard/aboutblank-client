import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 1,
        name: "ApprenNet",
        description: "ApprenNet is a scenario-based learning app that presents learners with exercises using video and peer assessment. The Web app stack includes Ruby on Rails, MongoDB and Angular.js. ApprenNet also has a mobile client built with Cordova and Angular, and a desktop app built with Node Webkit.",
        url: "https://www.apprennet.com",
        code: ''
      },
      {
        id: 2,
        name: "Writermortis",
        description: "Writermortis is an online writing game that works like an \"exquisite corpse\" - one writer begins the story and sends it to other writers. Each subsequent writer can only see the previously written section. Writermortis is currently a Ruby on Rails app but is going through an extensive re-write.",
        url: "http://www.writermortis.com/",
        code: "https://github.com/jasonblanchard/writermortis"
      }
    ];
  }
});
