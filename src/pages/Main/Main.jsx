import MainTitleSection from "./Title/MainTitleSection";
import MainFeatures from "./MainFeatures/MainFeatures";
import MainTopCourses from "./MainTopCourses/MainTopCourses";
import MainPackets from "./MainPackets/MainPackets";
import PopularCategories from "./PopularCategories/PopularCategories";

export const dummyData = [
  {id: 0, url: '/course/123', img: '/', title: 'Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr Məcəlləsi və Praktiki Nümunələr', isFavorite: true},
  {id: 1, url: '/course/123', img: '/', title: 'Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr', isFavorite: true},
  {id: 2, url: '/course/123', img: '/', title: 'Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr', isFavorite: true},
];
export const dummyPacks = [
  {id: 0, url: '/package/123', img: '/', title: 'Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr Məcəlləsi və Praktiki Nümunələr', isFavorite: true},
  {id: 1, url: '/package/123', img: '/', title: 'Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr', isFavorite: true},
  {id: 2, url: '/package/123', img: '/', title: 'Vergi Uçotu: Vergi Məcəlləsi və Praktiki Nümunələr', isFavorite: true},
];

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
