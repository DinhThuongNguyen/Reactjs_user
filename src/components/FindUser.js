import React, { Component } from 'react'
import UpdateUser from './UpdateUser';

export default class FindUser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      textInput : "",
      valueEditUser:{}
    }
    this.hienthiButton = this.hienthiButton.bind(this);
    this.getTextinput = this.getTextinput.bind(this);
    this.hienthiForm = this.hienthiForm.bind(this);
    this.doneUpdate = this.doneUpdate.bind(this);
  }
  
  hienthiButton(){
    if(this.props.button ){
      return (<label htmlFor="add" className="mo btn-block"  onClick={this.props.tt}><h4 className="card-title btn btn-primary btn-block" > Hủy thêm mới user</h4></label>)
    }
    else{
      return (<label htmlFor="add" className="mo btn-block"  onClick={this.props.tt}><h4 className="card-title btn btn-primary btn-block" >Thêm mới user</h4></label>)
    }
  }
  async getTextinput (event)  {
    await this.setState({
      textInput : event.target.value
    })
    await this.props.findUser(this.state.textInput)
  }
  
  doneUpdate(user){
    this.setState({
      valueEditUser : user
    });
    this.props.updateUser(user);
  }
  hienthiForm(){
    if(this.props.showForm){
      return(
        <UpdateUser showform={this.props.formUpdate} obj_user={this.props.obj_user} done={(user)=>this.doneUpdate(user)} />
      )
    }
  }
  render() {
    return (
        <div className="col-12">
        <div className="form-group">
          <div className="btn-group">
            <input onChange={this.getTextinput} type="text" className="form-control" name="inputFind" id="inputFind" aria-describedby="helpId" placeholder="Nhập tìm kiếm" />
            <button name="btnTimkiem" className="btn btn-primary" type="button" onClick={(dl)=>this.props.findUser(this.state.textInput)}>Tìm kiếm</button>
          </div>
        </div>
        {this.hienthiButton()}
        {this.hienthiForm()}
      </div>
      
    )
  }
}
