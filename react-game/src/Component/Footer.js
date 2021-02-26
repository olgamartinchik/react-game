import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className='d-flex flex-column footer-container'>
        <footer className='footer container '>
          <div>
            <a href='https://rs.school/js/'>
              <img
                className='mr-2'
                src='https://rs.school/images/rs_school_js.svg'
                alt='Logo RS-school'
                width='80'
              />
            </a>
            <span>&copy; 2021</span>
          </div>
          <div className='ml-auto'>
            <a href='https://github.com/olgamartinchik'>Olga Martinchik</a>
          </div>
          <div>
            <a href='https://coreui.io'>
              Game description
              <img
                className='ml-2'
                src='https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
                alt='Logo YouTube'
                width='30'
              />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
