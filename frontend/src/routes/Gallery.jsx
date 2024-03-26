import React from "react";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import JaviCard from "../components/JaviCard";
import YasmineCard from "../components/YaseminCard";
import styles from "./Gallery.module.css";
import KuwaitCard from "../components/KuwaitCard";
import MyCard from "../components/MaxPatchCard";
const Gallery = () => {
  return (
    <div className="Galleries">
      <JaviCard />
      <YasmineCard />
      <KuwaitCard />
      <MyCard />

      <div></div>
    </div>
  );
};
export default Gallery;
