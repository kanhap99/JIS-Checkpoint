AddForm = React.createClass({
  handleSubmit(event) {
    event.preventDefault()
    //insert into collection
    this.props.collection.insert({
      name: this.refs.name.value,
      description: this.refs.description.value,
      submitterUsername: this.props.currentUsername,
      submitterEmail: this.props.currentUserEmail,
      createdAt: new Date()
    });
    //Meteor.call('match')
    //clear form fields
    this.refs.name.value = ""
    this.refs.description.value = ""
  },
  render() {
    return <div className="container">
      <form onSubmit = {this.handleSubmit} id="this">
        <input type="text" ref="name" placeholder="Name of the item"></input>
        <br></br><br></br>
        <textarea ref="description" form="this" placeholder="Important info about the item. Where it was found etc."></textarea><br></br><br></br>
        <input type="submit"></input>
      </form>
    </div>;
  }
});
