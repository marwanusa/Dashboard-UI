/* eslint-disable prettier/prettier */
import React from 'react'

const FilterFields = () => {
  return (
    <div >
      <h5 className="mb-3">Filters</h5>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select className="form-select" id="category">
          <option value="">All</option>
          <option value="tech">Technology</option>
          <option value="fashion">Fashion</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="minValue" className="form-label">Min Value</label>
        <input type="number" className="form-control" id="minValue" placeholder="Enter min" />
      </div>

      <div className="mb-3">
        <label htmlFor="maxValue" className="form-label">Max Value</label>
        <input type="number" className="form-control" id="maxValue" placeholder="Enter max" />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input type="date" className="form-control" id="date" />
      </div>

      <button className="btn btn-primary w-100">Apply Filters</button>
    </div>
  )
}

export default FilterFields
