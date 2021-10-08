import React from "react";
import ss from './MainPackets.module.scss'
import Product from "../../../components/Product/Product";
import { dummyPacks } from '../Main';

function MainPackets() {
  return (
    <section className={ss.packets}>
      <div className="container">
        <div className="mainPageTitle">
          <h2>Paketlər</h2>
        </div>
        <Product data={dummyPacks} />
      </div>
    </section>
  );
}

export default MainPackets;
