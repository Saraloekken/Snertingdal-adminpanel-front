import React, { Component } from "react";
import "./Events.css";

export default class Events extends Component {
  render() {
    return (
      <div className="events">
        <div className="events__container">
          <div className="box">
            <div className="arrangement">
              <div>
                <h3>Hva heter arrangementet:</h3>
                <input type="text" name="tittel" id="tittel" />
              </div>
              <div className="arrangement__beskrivelse">
                <h3>Beskrivelse av arrangementet:</h3>
                <textarea
                  name="beskrivelse"
                  id="beskrivelse"
                  cols="30"
                  rows="6"
                  maxLength="300"
                  placeholder="maks 300 ord"
                />
              </div>
            </div>

            <div className="oversikt">
              <div className="oversikt__dato">
                <h3>Dato</h3>
                <input type="date" name="dato" />
              </div>
              <div className="oversikt__tid">
                <h3>Tid</h3>
                <input type="text" name="tid" />
              </div>
              <div className="oversikt__sted">
                <h3>Sted</h3>
                <input type="text" name="sted" />
              </div>
            </div>

            <div className="banner">
              <h3>Velg Banner</h3>
              <input type="file" />
            </div>

            <div className="button__container">
              <button type="button" className="btn" /* onClick={this.submit} */>
                + Legg til
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
