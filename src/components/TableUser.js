import React, { Component } from 'react'

export default class TableUser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: this.props.TTuser.id,
      name: this.props.TTuser.name,
      phone: this.props.TTuser.phone,
      permission: this.props.TTuser.permission
    }
    this.changeUser = this.changeUser.bind(this);
  }
  changeUser(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })
  }
  getIdUserDelete(user){
    this.props.del(user)
  }
  render() {
    const dt = this.props.users;
    let i = 1;
    const addUser = dt.map((it,key)=>{
          return(          
            <tr key={key}>
              <td >{i++}</td>
              <td>{
                it.name
                
              }</td>
              <td>{it.phone}</td>
              <td>
                {
                  it.permission
                }
              </td>
              <td>
                <div className="btn-group">
                  <button onClick={(user)=>this.props.callEdit(it)} type="button" className="btn btn-success"><i className="fas fa-edit" />Sửa</button>
                  <button onClick={(id)=>this.getIdUserDelete(it.id)} type="button" className="btn btn-warning"><i className="fas fa-trash" /> Xóa</button>
                </div>
              </td>
            </tr>
          )
      
    })

    return (
      <div className="col">
          <table className="table table-striped table-inverse table-hover">
            <thead className="thead-inverse">
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Số điện thoại</th>
                <th>Quyền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {addUser}
            </tbody>
          </table>
        </div>
    )
  }
}
