import React, { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  setFilter(filterText){
    this.setState({ filterText: filterText.target.value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') });
  }

  render() {
    return (
      <div>
        <div>
          <lbabel>検索</lbabel>
          <input type='text' onChange={(text) => this.setFilter(text)} />
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Message</th>
              <th colSpan={3}></th>
            </tr>
          </thead>
          <tbody>
            {this.props.boards.filter(board => board.title.match(new RegExp(this.state.filterText))).map((board) => (
              <tr key={board.id}>
                <td>{board.title}</td>
                <td>{board.message}</td>
                <td><a href={`/boards/${board.id}`}>Show</a></td>
                <td><a href={`/boards/${board.id}/edit`}>Edit</a></td>
                <td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href={`/boards/${board.id}`}>Destroy</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
