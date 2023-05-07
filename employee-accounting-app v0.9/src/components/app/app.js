import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employeers-list/employees-list';
import EmployeesAddForm from '../employeers-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        const myData = localStorage.getItem('myData');
        this.state = {
            data: myData ? JSON.parse(myData) : [
                {name: 'Daniil A',salary: 15000, like: false, increase: false, id: 1},
                {name: 'Dinara A',salary: 15000, like: false, increase: false, id: 2},
                {name: 'Pup AS',salary: 150, like: false, increase: false, id: 3},
            ],            
            
            term: '',
            filter: 'all'
        }
        this.maxId = this.state.data.length;
    }




    deleteItem = (id) => {
        localStorage.setItem('myData', JSON.stringify(this.state.data.filter((item => item.id !== id))))
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)   
            }
            
        })
    }
    addItem = (name, salary) => {
        if (name !== '' && salary !== '') {
            
          const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId += 1
            }
            this.setState(({data}) =>{
                const newArr = [...data, newItem]
                localStorage.setItem('myData', JSON.stringify(newArr))
                return {
                    data: newArr
                }   
            })  
        }          
    }



    onToggleProp = (id, prop) => {
        localStorage.setItem('myData', JSON.stringify(this.state.data.map(item => {
            if(item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })));
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items ,term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }


    filerPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like)
            case 'more1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onChange2 = (ee) => {
        console.log(ee)
    }

    render() {
        const {data, term, filter} = this.state;
        const people = this.state.data.length
        const peopleIncr = this.state.data.filter(element => element.increase === true).length
        const visibleData = this.filerPost(this.searchEmp(data, term), filter);

        
        return (
            <div className="app">
                <AppInfo 
                    people = {people}
                    peopleIncr = {peopleIncr}
                    data = {data}
                    />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter 
                    filter = {filter}
                    onFilterSelect = {this.onFilterSelect}
                    />
                </div>
                    <EmployeesList 
                    data = {visibleData}
                    onDelete = {this.deleteItem}
                    onToggleProp={this.onToggleProp} 
                    />
                    <EmployeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}
export default App;