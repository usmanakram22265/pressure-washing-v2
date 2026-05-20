import { Routes, Route } from 'react-router-dom';
import LegacyPage from './components/LegacyPage.jsx';

// Core pages
import homeHtml from './raw-pages/index.html?raw';
import servicesHtml from './raw-pages/services.html?raw';
import galleryHtml from './raw-pages/gallery.html?raw';
import aboutHtml from './raw-pages/about.html?raw';
import quoteHtml from './raw-pages/quote.html?raw';
import blogHtml from './raw-pages/blog.html?raw';
import seoPagesHtml from './raw-pages/seo-pages.html?raw';

// City landing pages
import houstonHtml from './raw-pages/pressure-washing-houston.html?raw';
import sugarLandHtml from './raw-pages/pressure-washing-sugar-land.html?raw';
import katyHtml from './raw-pages/pressure-washing-katy.html?raw';
import pearlandHtml from './raw-pages/pressure-washing-pearland.html?raw';
import woodlandsHtml from './raw-pages/pressure-washing-the-woodlands.html?raw';

// Roof cleaning × city
import roofSugarLandHtml from './raw-pages/roof-cleaning-sugar-land.html?raw';
import roofKatyHtml from './raw-pages/roof-cleaning-katy.html?raw';
import roofPearlandHtml from './raw-pages/roof-cleaning-pearland.html?raw';
import roofWoodlandsHtml from './raw-pages/roof-cleaning-the-woodlands.html?raw';

// Driveway cleaning × city
import drivewaySugarLandHtml from './raw-pages/driveway-cleaning-sugar-land.html?raw';
import drivewayKatyHtml from './raw-pages/driveway-cleaning-katy.html?raw';
import drivewayPearlandHtml from './raw-pages/driveway-cleaning-pearland.html?raw';
import drivewayWoodlandsHtml from './raw-pages/driveway-cleaning-the-woodlands.html?raw';

// House washing × city
import houseSugarLandHtml from './raw-pages/house-washing-sugar-land.html?raw';
import houseKatyHtml from './raw-pages/house-washing-katy.html?raw';
import housePearlandHtml from './raw-pages/house-washing-pearland.html?raw';
import houseWoodlandsHtml from './raw-pages/house-washing-the-woodlands.html?raw';

// Blog articles
import howOftenHtml from './raw-pages/how-often-pressure-wash-houston.html?raw';
import softVsPressureHtml from './raw-pages/soft-wash-vs-pressure-wash.html?raw';
import roofStreaksHtml from './raw-pages/remove-roof-streaks-houston.html?raw';
import washingCostHtml from './raw-pages/pressure-washing-cost-houston.html?raw';
import beforeSellingHtml from './raw-pages/pressure-washing-before-selling.html?raw';
import chooseWasherHtml from './raw-pages/how-to-choose-pressure-washer-houston.html?raw';

export default function App() {
  return (
    <Routes>
      {/* Core */}
      <Route path="/" element={<LegacyPage html={homeHtml} />} />
      <Route path="/services" element={<LegacyPage html={servicesHtml} />} />
      <Route path="/gallery" element={<LegacyPage html={galleryHtml} />} />
      <Route path="/about" element={<LegacyPage html={aboutHtml} />} />
      <Route path="/quote" element={<LegacyPage html={quoteHtml} />} />
      <Route path="/blog" element={<LegacyPage html={blogHtml} />} />
      <Route path="/seo-pages" element={<LegacyPage html={seoPagesHtml} />} />

      {/* City landing pages */}
      <Route path="/pressure-washing-houston" element={<LegacyPage html={houstonHtml} />} />
      <Route path="/pressure-washing-sugar-land" element={<LegacyPage html={sugarLandHtml} />} />
      <Route path="/pressure-washing-katy" element={<LegacyPage html={katyHtml} />} />
      <Route path="/pressure-washing-pearland" element={<LegacyPage html={pearlandHtml} />} />
      <Route path="/pressure-washing-the-woodlands" element={<LegacyPage html={woodlandsHtml} />} />

      {/* Roof cleaning × city */}
      <Route path="/roof-cleaning-sugar-land" element={<LegacyPage html={roofSugarLandHtml} />} />
      <Route path="/roof-cleaning-katy" element={<LegacyPage html={roofKatyHtml} />} />
      <Route path="/roof-cleaning-pearland" element={<LegacyPage html={roofPearlandHtml} />} />
      <Route path="/roof-cleaning-the-woodlands" element={<LegacyPage html={roofWoodlandsHtml} />} />

      {/* Driveway cleaning × city */}
      <Route path="/driveway-cleaning-sugar-land" element={<LegacyPage html={drivewaySugarLandHtml} />} />
      <Route path="/driveway-cleaning-katy" element={<LegacyPage html={drivewayKatyHtml} />} />
      <Route path="/driveway-cleaning-pearland" element={<LegacyPage html={drivewayPearlandHtml} />} />
      <Route path="/driveway-cleaning-the-woodlands" element={<LegacyPage html={drivewayWoodlandsHtml} />} />

      {/* House washing × city */}
      <Route path="/house-washing-sugar-land" element={<LegacyPage html={houseSugarLandHtml} />} />
      <Route path="/house-washing-katy" element={<LegacyPage html={houseKatyHtml} />} />
      <Route path="/house-washing-pearland" element={<LegacyPage html={housePearlandHtml} />} />
      <Route path="/house-washing-the-woodlands" element={<LegacyPage html={houseWoodlandsHtml} />} />

      {/* Blog articles */}
      <Route path="/how-often-pressure-wash-houston" element={<LegacyPage html={howOftenHtml} />} />
      <Route path="/soft-wash-vs-pressure-wash" element={<LegacyPage html={softVsPressureHtml} />} />
      <Route path="/remove-roof-streaks-houston" element={<LegacyPage html={roofStreaksHtml} />} />
      <Route path="/pressure-washing-cost-houston" element={<LegacyPage html={washingCostHtml} />} />
      <Route path="/pressure-washing-before-selling" element={<LegacyPage html={beforeSellingHtml} />} />
      <Route path="/how-to-choose-pressure-washer-houston" element={<LegacyPage html={chooseWasherHtml} />} />
    </Routes>
  );
}
