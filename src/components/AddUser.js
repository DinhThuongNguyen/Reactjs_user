import React, { Component } from 'react'

export default class AddUser extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     trangthai: true
  //   }
  //   this.chuyendoiTT = this.chuyendoiTT.bind(this);
  //   this.addButton = this.addButton.bind(this);
  // }
  // chuyendoiTT() {
  //   this.setState({
  //     trangthai: !this.state.trangthai
  //   })
  // }
  // addButton() {
  //   if (this.state.trangthai === true) {
  //     return (
  //       <div>
  //         <label htmlFor="add" className="mo"  ><h4 className="card-title btn btn-primary" onClick={this.chuyendoiTT}>Thêm mới user</h4></label>
          
  //       </div>
  //     )
  //   }
  //   else {
  //     return (<label htmlFor="add" className="dong"  ><h4 className="card-title btn btn-primary" onClick={this.chuyendoiTT}>Hủy thêm mới </h4></label>)
  //   }
  // }
  constructor(props) {
    super(props)
    this.state = {
      id:"",
      name:"",
      phone:"",
      permission:""
    }
    this.getvalue = this.getvalue.bind(this);
    this.hienthiForm = this.hienthiForm.bind(this);
  }
  
  getvalue(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
  }


  hienthiForm(){
    if(this.props.TT === true){
      return(
          <div className="col">
            <div className="card">
              <div className="card-body text-center">
                <input type="checkbox" id="add" />
                  <div className="them">
                    <form>
                    <h4>Thêm user mới</h4>
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" placeholder="Nhập tên" onChange={this.getvalue}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="phone" placeholder="Nhập số điện thoại" onChange={this.getvalue}/>
                    </div>
                    <div className="form-group">
                      <select className="custom-select" name="permission" onChange={this.getvalue}>
                        <option defaultValue="ad">Chọn quyền mặc định</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Normal">Nomal</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input type="reset" value="Thêm mới" onClick={(name,phone,permission)=> this.props.add(this.state.name,this.state.phone,this.state.permission)} className="btn btn-primary btn-block"/>
                    </div>
                    </form>
                  </div>
                
              </div>
            </div>
          </div>
      )
    }
    else{
      return(
        <div></div>
      )
    }
  }
  render() {
    
    return (
    <div>{this.hienthiForm()}</div>
    )
  }
}

