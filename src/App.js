import logo from "./logo.svg";
import "./App.css";
// import {Component} from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { useState, useEffect} from "react";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
  },[])//the second parameter is empty. so the function only run once.

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  },[monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  // const onTitleChange = (event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   setTitle(searchFieldString);
  // };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box' placeholder='search monsters'/>
      <br/>
  <CardList monsters={filteredMonsters}/> 
    </div>
  );
};

// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state={
//       monsters:[],
//       searchField:''
//       };
//   }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((users)=>this.setState(()=>{
//       return {monsters:users};
//     },
//     ()=>{}
//     ));
//   }

// onSearchChange=(event)=>{
//   const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return { searchField }; //set searchField:searchField
//     });
// };

//   render () {
//     const {monsters,searchField}=this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//       <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
