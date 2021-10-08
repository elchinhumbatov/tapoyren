import React from "react";
import s from "./PackageSubscribe.module.scss";
import { useParams } from "react-router";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TextField, Button } from '@mui/material';

function PackageSubscribe() {
  const { id: packageId } = useParams();

  return (
    <div>
      <PageTitle title={"Package number " + packageId} />
      <section className='minH'>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.card}>
              <svg
                width="150"
                height="160"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 275 60C 257 60 241 70 232 85C 232 85 7 475 7 475C -2 490 -2 510 7 525C 7 525 232 915 232 915C 241 930 257 940 275 940C 275 940 725 940 725 940C 743 940 759 930 768 915C 768 915 993 525 993 525C 1002 510 1002 490 993 475C 993 475 768 85 768 85C 759 70 743 60 725 60C 725 60 275 60 275 60C 275 60 275 60 275 60 M 0,0"
                  transform="rotate(90,500,500)"
                />
              </svg>
              <div className={s.priceWrap}>
                <p>Tövsiyə edilən</p>
                <p className={s.price}>₼ 299.99</p>
                <p>Ayliq</p>
              </div>
              <div className={s.formWrap}>
                <TextField className={s.code} size='small' label="Kupon Kodu" variant="filled" />
                <Button className={s.btn}>Bashlayin</Button>
              </div>
            </div>
            <div className={s.card + ' ' + s.even}>
              <svg
                width="150"
                height="160"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="blue"
                  stroke="red"
                  strokeWidth="25"
                  d="M 275 60C 257 60 241 70 232 85C 232 85 7 475 7 475C -2 490 -2 510 7 525C 7 525 232 915 232 915C 241 930 257 940 275 940C 275 940 725 940 725 940C 743 940 759 930 768 915C 768 915 993 525 993 525C 1002 510 1002 490 993 475C 993 475 768 85 768 85C 759 70 743 60 725 60C 725 60 275 60 275 60C 275 60 275 60 275 60 M 0,0"
                  transform="rotate(90,500,500)"
                />
              </svg>
              <div className={s.priceWrap}>
                <p>Tövsiyə edilən</p>
                <p className={s.price}>₼ 299.99</p>
                <p>Ayliq</p>
              </div>
              <div className={s.formWrap}>
                <TextField className={s.code} size='small' label="Kupon Kodu" variant="filled" />
                <Button className={s.btn}>Bashlayin</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PackageSubscribe;
