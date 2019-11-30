﻿import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Curtain.css';


class BottomFooter extends Component {
  getCurrentYear() {
    return document.write(new Date().getFullYear());
  }

  render() {
    return (
      <div id="bottom-footer" class="section">
        <div class="container">
					<div class="row">
            <div class="col-md-12 text-center">
              <ul class="footer-payments">
                <li><a href="#"><i class="fa fa-cc-visa"></i></a></li>
                <li><a href="#"><i class="fa fa-credit-card"></i></a></li>
                <li><a href="#"><i class="fa fa-cc-paypal"></i></a></li>
                <li><a href="#"><i class="fa fa-cc-mastercard"></i></a></li>
                <li><a href="#"><i class="fa fa-cc-discover"></i></a></li>
                <li><a href="#"><i class="fa fa-cc-amex"></i></a></li>
              </ul>
              <span class="copyright">
								Copyright &copy;{this.getCurrentYear} All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
							</span>
            </div>
          </div>
				</div>
			</div>
    )
  }
}

export default connect(null, null)(BottomFooter);