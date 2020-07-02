import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import FindUser from './components/FindUser';
import TableUser from './components/TableUser';
import AddUser from './components/AddUser';
import Datauser from './components/data.json';
//import UpdateUser from './components/UpdateUser';
const shortid = require('shortid');

let x = {}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trangthai : false,
      data : [],
      valueSearch:"",
      edit : false,
      valueUser:{},
      valueEditUser:{},
      userUpdate:{},
      formUpdate:false
    }
    this.chuyendoiTT = this.chuyendoiTT.bind(this);
    this.searchUser = this.searchUser.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.editFunc1 = this.editFunc1.bind(this);
    this.doneUpdateUser = this.doneUpdateUser.bind(this);
    this.showFormUpdate = this.showFormUpdate.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }
  doneUpdateUser(user){
    this.setState({userUpdate : user});
    this.state.data.forEach((value,key) =>{
      if(value.id === user.id){
        value.id = user.id;
        value.name = user.name;
        value.phone = user.phone;
        value.permission = user.permission;
      }
    })
    localStorage.setItem('arr_users',JSON.stringify(this.state.data));
  }
  chuyendoiTT(){
    this.setState({
      trangthai : !this.state.trangthai
    });
  }
  showFormUpdate(){
    this.setState({
      formUpdate : !this.state.formUpdate
    })
  }
  async searchUser (dl) {
    await this.setState({
      valueSearch : dl
    });
  }
  createNewUser(name,phone,permission){
    let user = {};
    user.id = shortid.generate();
    user.name = name;
    user.phone = phone;
    user.permission = permission;
    let users = this.state.data;
    users.push(user);
    this.setState({
      data : users
    });
    localStorage.setItem('arr_users',JSON.stringify(this.state.data));
  }
  async editFunc1(user){
    await this.setState({
      edit : !this.state.edit,
      formUpdate : !this.state.formUpdate,
      valueUser : user
    });
  }
  async deleteUser(user){
    let arr = this.state.data.filter(item => item.id !== user);
    await this.setState({
      data:arr
    })
    await localStorage.setItem('arr_users',JSON.stringify(arr));
  }

  // bắt đầu lifecycle
  //áp dụng với bài học lưu dữ liệu vào localStorage
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  //hàm này luôn chạy đầu tiên
  componentWillMount() {
    //kiểm tra xem có localStorage chưa
    if(localStorage.getItem('arr_users') === null){
      localStorage.setItem('arr_users',JSON.stringify(Datauser))
    }
    else{
      let arr = JSON.parse(localStorage.getItem('arr_users'));
      this.setState({data:arr})
    }
  }
  //kết thúc lifecycle

  render() {

    let arr = this.state.data.filter(it => {
      if(it.name.indexOf (this.state.valueSearch) !== -1){
        return it
      }
    })
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="row">
            <FindUser formUpdate={this.showFormUpdate} updateUser={(user)=>this.doneUpdateUser(user)} showForm={this.state.formUpdate} obj_user = {this.state.valueUser}  tt={this.chuyendoiTT} button={this.state.trangthai} findUser={(dl)=>this.searchUser(dl)}/>
            <div className="col-12"><hr/></div>
            {/* <UpdateUser ttUpdate={this.state.edit} done={(user)=>this.doneUpdate(user)} id={this.state.valueUser.id} name={this.state.valueUser.name} phone={this.state.valueUser.phone} permission={this.state.valueUser.permission}/>  */}
            
            <TableUser del={(user)=>this.deleteUser(user)} users={arr} callEdit={(user)=>this.editFunc1(user)} TTedit={this.state.edit} TTuser={this.state.valueUser}/>
            
            <AddUser TT={this.state.trangthai} add={(name,phone,permission)=>this.createNewUser(name,phone,permission)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
