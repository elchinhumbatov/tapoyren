import React from "react";
import ss from './MainPackets.module.scss'
import Product from "../../../components/Product/Product";
import { dummyData } from '../Main';

function MainPackets() {
  return (
    <section className={ss.packets}>
      <div className="container">
        <div className="title">
          <h2>Paketlər</h2>
        </div>
        <Product data={dummyData} />
      </div>
    </section>
  );
}

export default MainPackets;
