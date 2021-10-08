import React from "react";
import s from "./Package.module.scss";
import { useParams, useLocation } from "react-router";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Button } from "@material-ui/core";
import courseImg from "../../assets/images/courses/course.jpeg";
import { Link } from "react-router-dom";
import Product from '../../components/Product/Product';
import { dummyData } from '../Main/Main';

function Package() {
  let { id: packageId } = useParams();
  let location = useLocation();

  // if (true) { if url incorrect
  //   return <Redirect to='/not_found' />
  // }

  return (
    <div>
      <PageTitle
        title={
          "ACCA TX - Taxation Package (F6 Paketi - UK version) " + packageId
        }
      />
      <section>
        <div className="container">
          <div className={s.packSubscribe + " " + s.wrap}>
            <img src={courseImg} alt="packageimage" />
            <h3>ACCA TX - Taxation Package (F6 Paketi - UK version)</h3>
            <Button color="primary" variant="contained">
              <Link to={location.pathname + '/subscribe'}>Subscribe</Link>
              {/* <Link to={'/package/' + packageId + '/subscribe'}>Subscribe</Link> */}
            </Button>
          </div>
          <div className={s.packAbout + " " + s.wrap}>
            <h3>About</h3>
            <p>
              Bu paketdə "UK version ACCA TX- Taxation" study book mövzuları,
              həm də revision izahlı həlləri daxildir.
            </p>
            <p>
              <span></span> <b>Abunəlik:</b>
            </p>
            <ul>
              <li>- 29.9 AZN / aylıq</li>
              <li>- 79.9 AZN / rüblük</li>
            </ul>
            <p>
              <span></span> <b>Qeyd: </b> TX kursunun normal öyrənmə müddəti{" "}
              <b>3 aylıq (rüblük)</b> olaraq məsləhət görülür.
            </p>
            <p>
              Paket üçün ödənişi istəsəniz burada "başla" və ya "enroll"
              düyməsinə tıklayaraq kartla, və ya <Link target='_blank' to="/faq">milli ön</Link>{" "}
              vasitəsilə həyata keçirə bilərsiniz.
            </p>
          </div>
          <div className={s.packCourses + " " + s.wrap}>
            <h3>Paketə daxil olan kurslar</h3>
            <Product data={dummyData} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Package;
