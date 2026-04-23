import React, { useState } from "react";
import SpecialDeal from "./SpecialDeal";
import Input from "./Input";
import "../styles/Sidebar.css";
import Button from "./Button";
//import Select from "./Select";

function Sidebar({ brands, selectedBrand, onBrandChange }) {
  return (
    <>
      <div className="filters-container">
        <p>Filters</p>
        <label>Brand</label>
        <select
          className="select"
          value={selectedBrand}
          onChange={(e) => onBrandChange(e.target.value)}
        >
          <option value="">All brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <p>Price Range</p>
        <Input placeholder="0" /> <Input placeholder="5000" />
        <Button>Apply Filters</Button>
      </div>
      <div className="special-deal">
        <SpecialDeal />
      </div>
    </>
  );
}

export default Sidebar;
