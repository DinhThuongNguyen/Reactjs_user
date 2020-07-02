import React, { Component } from 'react'


export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.obj_user.id,
      name : this.props.obj_user.name,
      phone : this.props.obj_user.phone,
      permission : this.props.obj_user.permission
    };
    this.isChagne = this.isChagne.bind(this);
    this.valueisChange = this.valueisChange.bind(this);
  }
  isChagne(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
  }
  async valueisChange(){
    let user={};
    user.id = this.state.id;
    user.name = this.state.name;
    user.phone = this.state.phone;
    user.permission = this.state.permission;
    await this.props.done(user);
    await this.props.showform();
  }
  render() {
    const formSua = ()=>{
        return(
            <div className="row">
              <div className="col-12">
                    <div className="card">
                      <div className="card-body text-center">
                        <input type="checkbox" id="add" />
                          <div className="them">
                            <form>
                              <h4>Sửa thông tin user </h4>
                              <div className="form-group">
                                <input onChange={this.isChagne}  defaultValue={this.props.obj_user.name} type="text" className="form-control" name="name" placeholder="Nhập tên" />
                              </div>
                              <div className="form-group">
                                <input onChange={this.isChagne} defaultValue={this.props.obj_user.phone} type="text" className="form-control" name="phone" placeholder="Nhập số điện thoại" />
                              </div>
                              <div className="form-group">
                                <select onChange={this.isChagne} defaultValue={this.props.obj_user.permission} className="custom-select" name="permission" >
                                  <option>Chọn quyền mặc định</option>
                                  <option value="Admin">Admin</option>
                                  <option value="User">User</option>
                                  <option value="Normal">Nomal</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <input type="button" value="Update" className="btn btn-primary btn-block" onClick={this.valueisChange}/>
                              </div>
                            </form>
                          </div>
                        
                      </div>
                    </div>
                  </div>
            </div>
        )
      
    }
    return (
        <div className="container">
          {formSua()}
        </div>
    )
  }
}



