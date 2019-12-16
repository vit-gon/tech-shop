﻿import React, { Component } from 'react';

class CategoriesFilter extends Component {
  render() {
    return (
      <div className="aside">
        <h3 className="aside-title">Categories</h3>
        <div className="checkbox-filter">

          <div className="input-checkbox">
            <input type="checkbox" id="category-1" />
            <label for="category-1">
              <span></span>
              Laptops
										<small>(120)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-2" />
            <label for="category-2">
              <span></span>
              Smartphones
										<small>(740)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-3" />
            <label for="category-3">
              <span></span>
              Cameras
										<small>(1450)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-4" />
            <label for="category-4">
              <span></span>
              Accessories
										<small>(578)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-5" />
            <label for="category-5">
              <span></span>
              Laptops
										<small>(120)</small>
            </label>
          </div>

          <div className="input-checkbox">
            <input type="checkbox" id="category-6" />
            <label for="category-6">
              <span></span>
              Smartphones
										<small>(740)</small>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoriesFilter;