AddItem = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {
      items: Items,
      authInProcess: Meteor.loggingIn(),
      canShow: !!Meteor.user(),
      currentUser: Meteor.user()
    };

    return data;
  },
  noAuthMessage() {
    return <p>
        Sorry, this function is only available to users. <a href="/login">Login here</a> to access
    </p>;
  },
  getForm() {
    return <div className="container">
      <h2>Add a new item</h2>
      <AddForm collection={this.data.items} currentUser={this.data.currentUser}/>
    </div>;
  },
  getContent() {
    return <div>
      {this.data.canShow?  this.getForm() : this.noAuthMessage() }
    </div>;
  },
  render() {
    return <div>
      {this.data.authInProcess?  <p>Loading...</p> : this.getContent()}
    </div>;
  }
});
