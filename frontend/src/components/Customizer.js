import React, { useState } from "react";
import Dashboard1 from "./Dashboards/Dashboard1";
import Select from "react-select";

const Customizer = () => {
  const dashboardList = [<Dashboard1 />];

  const fontFamily = [
    { value: "Montserrat", label: "Montserrat" },
    { value: "Zen Dots", label: "Zen Dots" },
    { value: "poppins", label: "poppins" },
    { value: "Open Sans ", label: "Open Sans" },
    { value: "Noto Sans ", label: "Noto Sans" },
    { value: "Oswald", label: "Oswald" },
    { value: "Inter", label: "Inter" },
    { value: "Mukta", label: "Mukta" },
    { value: "Ubantu", label: "Ubantu" },
    { value: "Nuntio", label: "Nuntio" },
  ];
  const backgroundColor = [
    { value: "Black", label: "Black" },
    { value: "DarkBlue", label: " DarkBlue" },
    { value: "Orange", label: "Orange" },
    { value: "Red", label: "Red" },
    { value: "Yellow", label: "Yellow" },
    { value: "Green", label: "Green" },
    { value: "Brown", label: "Brown" },
    { value: "LightGrey", label: "LightGrey" },
    { value: "Cyan", label: "Cyan" },
    { value: "Maroon", label: "Maroon" },
    { value: "Purple", label: "Purple" },
    { value: "Magenta", label: "Magenta" },
    { value: "Pink", label: "Pink" },
    { value: "Olive", label: "Olive" },
    { value: "Aquamarine", label: "Aquamarine" },
    { value: "LightBlue", label: "LightBlue" },
  ];
  const fontSize = [
    { value: "10px", label: "10px" },
    { value: "14px", label: "14px" },
    { value: "12px", label: "12px" },
    { value: "18px", label: "18px" },
    { value: "20px", label: "20px" },
    { value: "22px", label: "22px" },
    { value: "24px", label: "24px" },
    { value: "26px", label: "26px" },
  ];
  const borderColor = [
    { value: "Purple", label: "Purple" },
    { value: "Blue", label: "Blue" },
    { value: "Orange", label: "Orange" },
    { value: "Red", label: "Red" },
    { value: "Yellow", label: "Yellow" },
    { value: "Green", label: "Green" },
    { value: "Brown", label: "Brown" },
    { value: "LightGrey", label: "LightGrey" },
    { value: "DarkVoilet", label: "DarkVoilet" },
    { value: "Maroon", label: "Maroon" },
  ];
  const padding = [
    { value: "2px", label: "2px" },
    { value: "3px", label: "3px" },
    { value: "4px", label: "4px" },
    { value: "1px", label: "1px" },
    { value: "2em", label: "2em" },
    { value: "3em", label: "3em" },
    { value: "4em", label: "4em" },
    { value: "5em", label: "5em" },
    { value: "2%", label: "2%" },
    { value: "4%", label: "4%" },
    { value: "6%", label: "6%" },
  ];

  const borderRadius = [
    { value: "4px", label: "4px" },
    { value: "6px", label: "6px" },
    { value: "8px", label: "8px" },
    { value: "10px", label: "10px" },
    { value: "12px", label: "12px" },
    { value: "1em", label: "1em" },
    { value: "1.5em", label: "1.5em" },
    { value: "2em", label: "2em" },
    { value: "2.5em", label: "2.5em" },
    { value: "3em", label: "3em" },
  ];
  const borderWidth = [
    { value: "1px", label: "1px" },
    { value: "3px", label: "3px" },
    { value: "4px", label: "4px" },
    { value: "5px", label: "5px" },
    { value: "6px", label: "6px" },
    { value: "7px", label: "7px" },
    { value: "2em", label: "2em" },
    { value: "3em", label: "3em" },
    { value: "4em", label: "4em" },
    { value: "5em", label: "5em" },
  ];
  const Color = [
    { value: "Black", label: "Black" },
    { value: "Blue", label: "Blue" },
    { value: "Orange", label: "Orange" },
    { value: "Red", label: "Red" },
    { value: "Yellow", label: "Yellow" },
    { value: "Green", label: "Green" },
    { value: "Brown", label: "Brown" },
    { value: "LightGrey", label: "LightGrey" },
    { value: "DarkVoilet", label: "DarkVoilet" },
    { value: "Maroon", label: "Maroon" },
  ];
  // const fontFamily = ['Montserrat', 'Roboto', 'Popins', 'Zen Dots'];

  const [selFontFam, setSelFontFam] = useState("Montserrat");
  const [selbgcolor, setselbgcolor] = useState("White");
  const [selFontsiz, setselFontsiz] = useState("15px");
  const [selBordercolor, setselBordercolor] = useState("Black");
  const [selpadding, setselpadding] = useState("5px");
  const [selBorderrad, setselBorderrad] = useState("2px");
  const [selBorderwid, setselBorderwid] = useState("2px");
  const [selFontcolor, setselFontcolor] = useState("black")
  return (
    <div>
      <header className="custom-header">
        <div className="container">
          <p className="header-title">Dashboard Customizer</p>
          {/* <Select options={fontFamily} onChange={({value, label}) => setSelFontFam(value) } value={selFontFam} /> */}
          <div className="row">
            <div className="col-md-3">
              <label className="text-white my-2">Select Font Family</label>
              <select
                className="form-control"
                onChange={(e) => setSelFontFam(e.target.value)}
                value={selFontFam}
              >
                {fontFamily.map((font) => (
                  <option value={font.value}>{font.label}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="text-white my-2">Select BackgroundColor </label>
              <select
                className="form-control"
                onChange={(e) => setselbgcolor(e.target.value)}
                value={selbgcolor}
              >
                {backgroundColor.map((color) => (
                  <option value={color.value}>{color.label}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="text-white my-2">Select Font Size </label>
              <select
                className="form-control"
                onChange={(e) => setselFontsiz(e.target.value)}
                value={selFontsiz}
              >
                {fontSize.map((Size) => (
                  <option value={Size.value}>{Size.label}</option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="text-white my-2">Select Border Color </label>
            <select className="form-control"
            onChange={(e) => setselBordercolor(e.target.value)}
            value={selBordercolor}
          >
            {borderColor.map((color) => (
              <option value={color.value}> {color.label}</option>
            ))}
          </select>
            </div>
            <div className="col-md-3">
              <label className="text-white my-2">Select Padding</label>
             <select className="form-control"
            onChange={(e) => setselpadding(e.target.value)}
            value={selpadding}
          >
            {padding.map((padding) => (
              <option value={padding.value}> {padding.label}</option>
            ))}
          </select>
            </div>
            <div className="col-md-3">
              <label className="text-white my-2">Select Border Radius </label>
            <select  className="form-control"
            onChange={(e) => setselBorderrad(e.target.value)}
            value={selBorderrad}
          >
            {borderRadius.map((borderRadius) => (
              <option value={borderRadius.value}> {borderRadius.label}</option>
            ))}
          </select>
            </div>
            <div className="col-md-3">
              <label className="text-white my-2">Select Border Width </label>
            <select  className="form-control"
            onChange={(e) => setselBorderwid(e.target.value)}
            value={selBorderwid}
          >
            {borderWidth.map((borderWidth) => (
              <option value={borderWidth.value}> {borderWidth.label}</option>
            ))}
          </select> 

            </div>
            <div className="col-md-3">
              <label className="text-white my-2">Select Font Color </label>
              <select
                className="form-control"
                onChange={(e) => setselFontcolor(e.target.value)}
                value={selFontcolor}
              >
                {Color.map((color) => (
                  <option value={color.value}>{color.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>
      <Dashboard1
        selFontFam={selFontFam}
        selbgcolor={selbgcolor}
        selFontsiz={selFontsiz}
        selBordercolor={selBordercolor}
        selpadding={selpadding}
        selBorderrad={selBorderrad}
        selBorderwid={selBorderwid}
        selFontcolor={selFontcolor}
      />
    </div>
  );
};

export default Customizer;
