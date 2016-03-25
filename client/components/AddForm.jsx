AddForm = React.createClass({
  handleSubmit(event) {
    event.preventDefault()
    var name = this.refs.name.value
    var description = this.refs.description.value

    this.props.collection.insert({
      name: name,
      description: description,
      submitter: this.props.currentUser,
      createdAt: new Date()
    });

    this.refs.name.value = ""
    this.refs.description.value = ""
  },
  render() {
    return <div className="container">
      <form onSubmit = {this.handleSubmit} id="this">
        <input type="text" ref="name" placeholder="Name of the item"></input><br></br><br></br>
        <textarea ref="description" form="this" placeholder="Important info about the item. Where it was found etc."></textarea><br></br><br></br>
        <input type="submit"></input>
      </form>
    </div>;
  }
});
