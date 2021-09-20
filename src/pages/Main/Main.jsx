import MainTitleSection from "./Title/MainTitleSection";
import MainFeatures from "./MainFeatures/MainFeatures";
import MainTopCourses from "./MainTopCourses/MainTopCourses";
import MainPackets from "./MainPackets/MainPackets";
import PopularCategories from "./PopularCategories/PopularCategories";

function Main() {
  return (
    <main>
      <MainTitleSection />
      <MainFeatures />
      <MainTopCourses />
      <MainPackets />
      <PopularCategories />
    </main>
  );
}

export default Main;
