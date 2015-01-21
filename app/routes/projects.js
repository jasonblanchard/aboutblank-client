import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        id: 2,
        name: "Writermortis",
        description: "Writermortis is an online writing game that works like an \"exquisite corpse\" - one writer begins the story and sends it to other writers. Each subsequent writer can only see the previously written section. Writermortis is currently a Ruby on Rails app but is going through an extensive re-write in Ember.js.",
        url: "http://www.writermortis.com/",
        code: "https://github.com/jasonblanchard/writermortis",
        image: 'writermortis.png'
      },
      {
        id: 3,
        name: "Booknodes",
        description: "Booknodes is a Ruby on Rails app designed for taking notes while reading books. It helps you identify themes and underlying plot points by making it easy to tag and sort notes. The implementation makes heavy use of Rails UJS for a snappy, responsive user-interface.",
        url: "http://booknodes.herokuapp.com/",
        code: "https://github.com/jasonblanchard/booknodes",
        image: 'booknodes.png'
      }
    ];
  }
});
