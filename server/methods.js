Meteor.methods({
  add:function(collection,name,description,submitter){
    collection.insert({
      name: name,
      description: description,
      submitter: submitter,
      createdAt: new Date()
    });
  },
  match: function () {
    return null
  }
});
