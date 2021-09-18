import s from "./Main.module.scss";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Main() {
  return (
    <main>
      <section
        className={s.titleWrap}
        style={{
          background: 'url("./images/main/hero-particles.png") center/cover',
        }}
      >
        <div className={s.container + " container"}>
          <div className={s.title}>
            <h1>Tap. Öyrən. İnkişaf et.</h1>
            <p>
              Ekspertlər tərəfindən öyrədilən beynəlxalq kvalifikasiya kursları,
              maliyyə və vergi uçotu, biznes idarəetmə, xarici dil, informasiya
              texnologiya kursları ilə biliyinizi artırın. Bilik və
              bacarıqlarınızı bizim peşəkar TapÖyrən videokurslarımız ilə kəşf
              edin və təkmilləşdirin.
            </p>
          </div>
          <div className={s.img}>
            <img src={require('../../assets/images/main/hero-splash.png').default} alt="hero splash" />
          </div>
        </div>
      </section>
      <section className={s.info}>
        <div className="container">
          <div className={s.features}>
            <div className={s.feature}>
              <h4>Video Kurslar</h4>
              <p>
                TapÖyrən onlayn video kursları ilə karyeranıza bir addım öndə
                başlayın. ACCA, CFA, DipIFR, Vergi uçotu, Marketinq, Dizayn və
                bu kimi digər sahələrdən biliklər əldə edin.
              </p>
            </div>
            <div className={s.feature}>
              <h4>Peşəkar Təlimçilər</h4>
              <p>
                Təlimlər öz sahələrinin peşəkarları tərəfindən keçirilir.
                TapÖyrən-lə təlimçilərə suallar verəcək, onların bilik və
                təcrübələrindən faydalanacaqsınız. Verilən suallar ən qısa
                müddətdə cavablandırılır.
              </p>
            </div>
            <div className={s.feature}>
              <h4>7/24 Giriş</h4>
              <p>
                Götürdüyünüz abunəlik müddətində siz veb-platformamızdan
                seçdiyiniz kursa 7/24 giriş əldə edirsiniz, bütün dərsləri
                görürsünüz. Dərsləri izləyərək biliklərinizi artıracaqsınız.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={s.top}>
        <div className="container">
          <div className="title">
            <h2>Top kurslar</h2>
          </div>
          <div className={s.topLinks}>
            <Link to="/">MS Excel</Link>
            <Link to="/">Veb İnkişafı</Link>
            <Link to="/">İngiliscə</Link>
            <Link to="/">İnsan resursları</Link>
          </div>
          <div className={s.topCourses}>
            <div className={s.topCourse}>
              <Link to="/about">
                <img src={require('../../assets/images/courses/course.jpeg').default} alt="course" />
              </Link>
              <div className={s.name}>
                <Link to="/">
                  Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr
                </Link>
                <FavoriteBorderIcon />
              </div>
            </div>
          </div>
          <div className="title" style={{ marginTop: "25px" }}>
            <h2>
              <Link to="/">Bütün Kurslar</Link>
            </h2>
          </div>
        </div>
      </section>
      <section className={s.packets}>
        <div className="container">
          <div className="title">
            <h2>Paketlər</h2>
          </div>
          <div className={s.topPackets}>
            <div className={s.topPacket}>
              <Link to="/about">
                <img src={require('../../assets/images/courses/course.jpeg').default} alt="course" />
              </Link>
              <div className={s.name}>
                <Link to="/">
                  Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.popular}>
        <div className="container">
          <div className="title">
            <h2>Populyar kurslar</h2>
          </div>
          <div className={s.popularCourses}>
            <div className={s.popularCourse}>
              <div className={s.card}>
                <h3>CFA</h3>
                <Link to='/'>KATEQORİYAYA GET</Link>
              </div>
            </div>
            <div className={s.popularCourse}>
              <div className={s.card}>
                <h3>CFA</h3>
                <Link to='/'>KATEQORİYAYA GET</Link>
              </div>
            </div>
            <div className={s.popularCourse}>
              <div className={s.card}>
                <h3>CFA</h3>
                <Link to='/'>KATEQORİYAYA GET</Link>
              </div>
            </div>
            <div className={s.popularCourse}>
              <div className={s.card}>
                <h3>CFA</h3>
                <Link to='/'>KATEQORİYAYA GET</Link>
              </div>
            </div>
            <div className={s.popularCourse}>
              <div className={s.card}>
                <h3>CFA</h3>
                <Link to='/'>KATEQORİYAYA GET</Link>
              </div>
            </div>
            <div className={s.popularCourse}>
              <div className={s.card}>
                <h3>CFA</h3>
                <Link to='/'>KATEQORİYAYA GET</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
