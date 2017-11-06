import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Message</th>
              <th colSpan={3}></th>
            </tr>
          </thead>
          <tbody>
            {this.props.boards.map((board) => (
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
