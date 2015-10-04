Meteor.startup(function() {
  Meteor.users.find().observe({
    added: function(doc) {
      if (!doc.profile && doc.emails && doc.emails[0] && Gravatar) {
        Meteor.users.upsert({_id: doc._id}, {$set: {'profile': Gravatar.imageUrl(doc.emails[0].address)}});
      }
    }
  });

  Meteor.publish(null, function() {
    return Meteor.users.find({_id: this.userId}, {fields: {profile: 1}});
  });

  Meteor.publish(null, function() {
    return Meteor.users.find({}, {fields: {
      username: 1,
      profile: 1
    }});
  });
});
