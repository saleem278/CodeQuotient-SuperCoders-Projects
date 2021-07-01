import React, { Component } from "react";
import "./App.css";
const Information = [
  {
    name: "Sagar",
    location: "kaithal",
  },
  {
    name: "Rahul",
    location: "Chandigarh",
  },
  {
    name: "Rahul KL",
    location: "Banglore",
  },
  {
    name: "Sant",
    location: "Yamuna Nagar",
  },
  {
    name: "Sumit",
    location: "Chandigarh",
  },
  {
    name: "Ritvik",
    location: "kaithal",
  },
  {
    name: "Saleem",
    location: "Yamuna Nagar",
  },
  {
    name: "Shubham",
    location: "Sri Ganganagar",
  },
  {
    name: "Rahul",
    location: "Kanpur",
  },
  {
    name: "Raman",
    location: "Delhi",
  },
  {
    name: "Aashish",
    location: "Rohtak",
  },
  {
    name: "Naina",
    location: "Karnal",
  },
  {
    name: "Azhar",
    location: "Nagaur",
  },
  {
    name: "Sahil",
    location: "Ambala",
  },
  {
    name: "Virat",
    location: "Delhi",
  },
];

class App extends Component {
state = {
      users:Information,
      search: null,
      isSorted: false,
}


render(){
  let searchF = (event) => {
    this.setState({ search: event.target.value });
  };
    const items = Information.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase()) 
        ||
        data.location
        .toLowerCase()
        .includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    });

    return (
      <div class="container">
        <input
          type="text"
          placeholder="Search Your Restaurant"
          onChange={(e) => searchF(e)}
        />
        <div class="container">
          <table class="table center">
            <thead>
              <tr>
                <th scope="col">Name &nbsp;
                      <i
                        className="fas fa-sort"
                        onClick={(e) => {
                          // if false sort in ascending order
                          if (!this.state.isSorted) {
                            items.sort((a, b) => {
                              var aName = a.name;
                              var bName = b.name;

                              if (aName < bName) {
                                return -1;
                              } else if (aName > bName) {
                                return 1;
                              } else {
                                return 0;
                              }
                            });
                          } else {
                            // if true sort in descending order
                            items.sort((a, b) => {
                              var aName = a.name;
                              var bName = b.name;
                              if (aName > bName) {
                                return -1;
                              } else if (aName < bName) {
                                return 1;
                              } else {
                                return 0;
                              }
                            });
                          }
                          // change state of user details array and invert isSorted
                          this.setState({
                            users: items,
                            isSorted: !this.state.isSorted,
                          });
                        }}
                      ></i></th>
                <th scope="col">Location&nbsp;
                      <i
                        className="fas fa-sort"
                        onClick={(e) => {
                          // if false sort in ascending order
                          if (!this.state.isSorted) {
                            items.sort((a, b) => {
                              var aLocation = a.location;
                              var bLocation = b.location;

                              if (aLocation < bLocation) {
                                return -1;
                              } else if (aLocation > bLocation) {
                                return 1;
                              } else {
                                return 0;
                              }
                            });
                          } else {
                            // if true sort in descending order
                            items.sort((a, b) => {
                              var aLocation = a.location;
                              var bLocation = b.location;
                              if (aLocation > bLocation) {
                                return -1;
                              } else if (aLocation < bLocation) {
                                return 1;
                              } else {
                                return 0;
                              }
                            });
                          }
                          // change state of user details array and invert isSorted
                          this.setState({
                            users: items,
                            isSorted: !this.state.isSorted,
                          });
                        }}
                      ></i></th>
              </tr>
            </thead>
            <tbody> 
              {this.state.users.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.location}</td>
                      </tr>
                    );
                  })}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
