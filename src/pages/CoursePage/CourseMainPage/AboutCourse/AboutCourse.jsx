import { Check } from "@mui/icons-material";
import React from "react";
import s from "../CourseMainPage.module.scss";

function AboutCourse() {
  return (
    <div className={s.about}>
      <h4>Haqqında</h4>
      <div className={s.aboutCourse}>
        <h3>Kurs haqqında giriş məlumat:</h3>
        <p>
          Bir çox iş yerlərində tələb olunan başlıca proqram Excel üzrə
          bacarıqlarınızın olmasıdır. Bu proqramı Maliyyə modelləşdirməsi ilə
          birləşdirdiyinizdə əvəz edilməz bilik və bacarığa sahib olacaqsınız.
          Bu sizin üçün iş yerlərinə müraciət edərkən və işləyərkən kompetitiv
          bacarıqlarınızı artıracaqdır.
        </p>
        <p>
          Excel-ə yeni başlayanlar ilkin detalları, düymələri rahatlıqla
          öyrənəcək və istifadə edə biləcək. Əlavə olaraq da Maliyyə
          Modelləşdirməsi haqqında biliklərə yiyələnəcəksiniz.
        </p>
        <p>
          Kursda praktiki hesabat hazırlama işləri ilə birlikdə effektiv maliyyə
          cədvəllərinin hazırlanması, büdcə və proqnoz hesabatların təqdimatı,
          borc, investisya və həyat siğorta ödənişlərinin və gəlirlərinin
          hesablanmasını da öyrənəcəksiniz.
        </p>
        <h6>Abunəlik:</h6>
        <p> * 9.99 AZN / aylıq</p>
      </div>
      <div className={s.aboutInstructor}>
        <h3>Təlimçi: Camal Alışov</h3>
        <p>
          Özüm haqqımda çox danışmağa ehtiyac duymuram :) 2 il Aztexnika MMC-də
          həftəlik şirkətin avto-servis performans hesabatlarının hazırlanması
          və ehtiyat hissələrinin dəyərləndirməsi üzrə maliyyə analitiki, 5 il
          Paşa İnşaat MMC şirkətində layihələrin büdcələnməsində və şirkətin
          maliyyə hesabatları komandasında işləmişəm və 4 ildən uzun müddətdir
          ki, bir çox şirkətlərə konsultasiya xidməti vermişəm. Bu müddət
          ərzində dövri maliyyə hesabatlarının hazırlanması, investisya
          dəyərləndirmələri, layihələrin büdcə hesabatları, fərqli şirkətlərin
          və layihələrinin KPİ hesabatlarının hazırlanıb dinamik cədvəllərin
          qurulması kimi işlər görmüşəm. Bu kursda sizlərlə bu bilik və
          bacarıqlarımı bölüşəcəm. İlkin dərslər sizə rahat gələ bilər, lakin
          hamısını kompleks hesabatlar qurarkən istifadə edəcəyik. Hamıya
          uğurlar arzu edirəm.
        </p>
      </div>
      <div className={s.whatWillLearn}>
        <h3>Nələr öyərənəcəksiniz</h3>
        <p><Check /> Başlanğıc səviyyəli formulalar</p>
        <p><Check /> Excelə başlayarkən bilməniz lazım olan detallar</p>
        <p><Check /> Maliyyə ilə əlaqədar bəzi bilməyiniz gərəkən sazlamalar</p>
        <p><Check /> Başlanğıc səviyyəli formulalar</p>
        <p><Check /> Qısa yollar</p>
        <p><Check /> Maliyyə ilə əlaqədar bəzi bilməyiniz gərəkən sazlamalar</p>
        <p><Check /> Qısa yollar</p>
        <p><Check /> Hesabatların hazırlanması</p>
        <p><Check /> Hesabatların hazırlanması</p>
      </div>
    </div>
  );
}

export default AboutCourse;
