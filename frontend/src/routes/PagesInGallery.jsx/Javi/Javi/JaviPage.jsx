import React from "react";
import "./Javi.modules.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { supabase } from "/Users/seancarroll/repos/finalproject/frontend/src/config/supabase.Config.js";

export async function loader() {}

const JaviGallery = () => {
  const { data, error } = supabase.storage.from("javi").list("images");
  return (
    <div style={{ padding: "10px" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {data.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};
export default JaviGallery;
