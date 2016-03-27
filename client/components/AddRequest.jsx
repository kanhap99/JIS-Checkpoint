AddRequest = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var data = {
      requests: Requests,
      authInProcess: Meteor.loggingIn(),
      canShow: !!Meteor.user(),
      currentUsername: Meteor.user() ? Meteor.user().profile.name : '',
      currentUserEmail: Meteor.user() ? Meteor.user().services.google.email : ''
    }
    return data;
  },
  noAuthMessage() {
    return <p>
        Sorry, this function is only available to users. <a href="/login">Login here</a> to access
    </p>;
  },
  getForm() {
    return <div className="container">
      <h2>Request for a lost item</h2>
      <p>*You will be emailed when a matching item is found</p>
      <AddForm collection={this.data.requests} currentUsername={this.data.currentUsername} currentUserEmail={this.data.currentUserEmail}/>
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
