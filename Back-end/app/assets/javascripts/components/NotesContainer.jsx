window.NotesContainer = React.createClass({
  getInitialState: function () {
    return {
      loading: true,
      notes: [],
    }
  },
  componentDidMount: function () {
    $.getJSON('/api/notes').then(function (data) {
      this.setState({
        loading: false,
        notes: data,
      })
    })
  },
  render: function() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    // return <NotesList notes={this.state.notes} />
  }
})


// Container vs Presentational Components
// [
//   {
//     title: 'Some title',
//     createdAt: '05/01/2016...'
//   }
// ]

/*
var NotesList = React.createClass({
  propTypes: {
    notes: React.PropTypes.arrayOf(React.PropTypes.shape({
      title: React.PropTypes.string,
      createdAt: React.PropTypes.string,
    }))
  },
  render: () {
    return (
      <ul>
      { this.props.notes.map(function (note) {
        return <li>
          { note.name }
        </li>
      })}
      </ul>
    )
  }
})

*/
