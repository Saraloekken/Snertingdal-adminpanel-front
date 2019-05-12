import React, { Component } from "react";
import "../../src/style.css";

export default class Venner extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      about: "",
      status: null,
      venner: []
    };
  }

  insert = data => {
    var form = new FormData();

    form.append("insert", data);
    fetch("http://localhost:8080/webprosjekt/pages/venner/venner-insert.php", {
      method: "POST",
      header: {},
      body: form
    })
      .then(res => res.json())
      .then(response => {
        if (response.status === false) {
          //nei

          this.setState({ status: false });

          console.log("error");
        }
        if (response.status === true) {
          //ja

          this.setState({ status: true });

          console.log("success");
        }
      });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = () => {
    var data = JSON.stringify(this.state);
    this.insert(data);
  };

  render() {
    return (
      <div>
        <div className="placeholder">
          {this.state.status === true ? <h1>Success</h1> : null}
          {this.state.status === false ? <h1>Error</h1> : null}

          <h4>Navn på venn:</h4>
          <div className="title">
            <input
              type="text"
              name="name"
              className="friendsinput"
              placeholder="Hva heter vennen din?"
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <h4>Profilbilde:</h4>
          <div className="file-input">
            <input type="file" />
            <span className="filebutton">Velg</span>
            <span className="label" data-js-label>
              Ingen fil er valgt
            </span>
          </div>

          <h4>Informasjon:</h4>
          <div className="information">
            <input
              type="text"
              name="about"
              className="infoinput"
              placeholder="Hva vil du fortelle om vennen din? (max 300 ord)"
              onChange={this.handleChange.bind(this)}
            />
          </div>

          <button type="button" className="addbutton" onClick={this.submit}>
            + Legg til ny
          </button>
        </div>
      </div>
    );
  }
}

//i cms har jeg laget dette
//denne fungerer med at jeg kan sette inn navnet på vennen og om vennen
//trykker jeg sumbit, går den gjennom en check på backend for å sørge for at alt sammen en sikekrt
//spør om sikkerhet: bruker prepared statements for å sørge for at alt er sikkert/sikre mot hackeangrep
//alt blir lagt inn i databasen.
//Sender fra frontend til backend og lagrer i databasen.
//- Men har enda ikke hentet, men har en ide om hvordan jeg gjør det. har basically gjort det i login.
