import React, { Component } from 'react';
import Header from '../Header/Header';
import Wrapper from '../Wrapper/Wrapper';
import SearchForm from '../SearchForm/SearchForm';
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import API from '../../utils/API'
import TableTitle from '../TableTitle/TableTitle';

class Container extends Component {
    state = {
        results: [],
        filteredResults: [],
        search: ""
    };

    componentDidMount() {
        API.searchAll()
            .then(res => this.setState({
                results: res.data.results,
                filteredResults: res.data.results,
            }))
            .catch(err => console.log(err))
    }


    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <Wrapper>
                <Header />
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <TableTitle>
                    {this.state.results.map(results => (
                        <EmployeeTable
                            key={results.login.uuid}
                            id={results.login.uuid}
                            src={results.picture}
                            name={results.name}
                            email={results.email}
                            phone={results.cell}
                            dob={results.dob} 
                        />
                    ))}
                </TableTitle>
            </Wrapper>
        )
    }
}

export default Container;

