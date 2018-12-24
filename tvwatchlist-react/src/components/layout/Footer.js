import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" class="top-space">
        <div class="footer1">
          <div class="container">
            <div class="row">
              <div class="col-md-6 widget">
                <div class="widget-body">
                  <p class="text-right">
                    Copyright &copy; 2018, Niklas Brynfeldt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
