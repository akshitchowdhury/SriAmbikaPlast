import flexSuction from '../../assets/products/FlexSuction.png';
import plainBlack from '../../assets/products/Flex Suction/FlexSuctionBlack.png';
import flexSuctionGreen from '../../assets/products/Flex Suction/FlexSuctionGreen.png';
import flexCross1 from '../../assets/products/Flex Suction/flexCross1.png';
import flexCross2 from '../../assets/products/Flex Suction/flexCross2.png';
import superFlexSuction from '../../assets/products/superFlexSuction.png';
import superFlexSuction1 from '../../assets/products/Super Suction/superSuction1.png';
import superFlexSuction2 from '../../assets/products/Super Suction/suoersuctionCross.png';
import graySuction from '../../assets/products/Super Suction/WhatsApp Image 2024-06-28 at 2.23.39 PM-Photoroom.png';

import topLonBraided1 from '../../assets/products/Top Lon Braidedd/braided1.png';
import topLonBraided2 from '../../assets/products/Top Lon Braidedd/braided2.png';
import topLonBraided3 from '../../assets/products/Top Lon Braidedd/topLon2.png';

import goodLonBraided from '../../assets/products/Good Lon Braided/goodLon1.png';
import goodLonBraided1 from '../../assets/products/Good Lon Braided/goodLon2.png';
import goodLonBraided2 from '../../assets/products/Good Lon Braided/goodLon3.png';
import colorLDpipes from '../../assets/products/Color LD.png';
import colorLDpipes1 from '../../assets/products/Color LD/colorLd1.png';
import colorLDpipes2 from '../../assets/products/Color LD/colorLd2.png';
import whiteLDpipes from '../../assets/products/whiteLDpipes.avif';
import whiteLDpipes1 from '../../assets/products/Whit Ld/WhiteLd1.png';
import whiteLDpipes2 from '../../assets/products/Whit Ld/WhiteLd1.png';
import fiftyFifty from '../../assets/products/50-50.png';
import fiftyFifty1 from '../../assets/products/Fifity fifty/fiftyfifty1.png';
import fiftyFifty2 from '../../assets/products/Fifity fifty/fiftyFifty2.png';
import colorZebra from '../../assets/products/ColorZebra.png';
import colorZebra1 from '../../assets/products/Color Zebra/colorZebra1.png';
import colorZebra2 from '../../assets/products/Color Zebra/colorZebra2.png';
import WhiteTT from '../../assets/products/WhiteTT.png';
import WhiteTT2 from '../../assets/products/whiteTT2.png';
import opek from '../../assets/products/Opek.png';
import opek1 from '../../assets/products/Opek/opek1.png';
import opek2 from '../../assets/products/Opek/opek2.png';
import metallic from '../../assets/products/Metallic.png';
import ctt from '../../assets/products/CTT.png';
import ctt1 from '../../assets/products/Color TT/colorTT1.png';
import ctt2 from '../../assets/products/Color TT/colorTT2.png';
import blackZebra from '../../assets/products/BlackZebra.png';
import levelTube from '../../assets/products/LevelTube.png';
import doubleDecker from '../../assets/products/DoubleDecker.png';

import superFoamOne from '../../assets/products/Super Foam/superFoamOne.png';
import superFoamTwo from '../../assets/products/Super Foam/superFoamTwo.png';
import foam2 from '../../assets/products/Super Foam/foam2.png';
import superFoamThree from '../../assets/products/Super Foam/superFoamThree.png';

import LineRib2 from '../../assets/products/Line Rib/32one.png';
import LineRib3 from '../../assets/products/Line Rib/32two.png';
import LineRib from '../../assets/products/32LineRib.png';
import ptmtConnection from '../../assets/products/PMT/PMT1.png';
import ptmtConnection1 from '../../assets/products/PMT/PMT2.png';
import sinkPipes from '../../assets/products/Sink pipe/sinkPipe1.png';
import braided from '../../assets/products/Sink pipe/braided.png';
import tubing from '../../assets/products/Sink pipe/tubing.png';



const productsData = [
  {
    category: "PVC Suction Hose Pipe",
    subproducts: [
      {
        product: {
          ProductName: "Flex Suction",
          image: [flexSuction,flexSuctionGreen,flexCross2],
          sizeWeight: [
            { s: '3/4"', w: "4.5" },
            { s: '1"', w: "5.5" },
            { s: '1.25"', w: "8" },
            { s: '1.50"', w: "10" },
            { s: '2"', w: "14-18" },
            { s: '2.50"', w: "18-25" },
            { s: '3"', w: "28-35" },
            { s: '4"', w: "58-65" },
            { s: '5"', w: "60-70" },
            { s: '6"', w: "70-85" }
          ],
          colors: ["Green, Blue , Orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Super Flex Suction",
          image: [superFlexSuction,superFlexSuction1,superFlexSuction2,graySuction],
          sizeWeight: [
            { s: '3/4"', w: "5.5" },
            { s: '1"', w: "6-7" },
            { s: '1.25"', w: "10" },
            { s: '1.50"', w: "12" },
            { s: '2"', w: "16-20" },
            { s: '2.50"', w: "24-30" },
            { s: '3"', w: "34-40" },
            { s: '4"', w: "70-85" },
            { s: '5"', w: "80-90" },
            { s: '6"', w: "85-105" }
          ],
          colors: ["Parrot green, Blue, Gray, White"],
          rollLength: "30mtr",
        },
      },
    ],
  },
  {
    category: "PVC Braided Hose Pipe",
    subproducts: [
      {
        product: {
          ProductName: "Top Lon Braided",
          image: [topLonBraided2,topLonBraided1,topLonBraided3],
          sizeWeight: [
            { s: '1/2"', w: "3.5" },
            { s: '3/4"', w: "5.2" },
            { s: '1"', w: "8.2" }
          ],
          colors: ["green, yellow, orange, Parrot Green, Pink"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Good Lon Braided",
          image: [goodLonBraided,goodLonBraided2,goodLonBraided1],
          sizeWeight: [
            { s: '8MM', w: "11", sMtr: "100" },
            { s: '10MM', w: "14", sMtr: "100" },
            { s: '12MM', w: "16-32", sMtr: "50-100" },
            { s: '3/4"', w: "5.5-14", sMtr: "30-50" },
            { s: '1"', w: "12-21", sMtr: "30-50" }
          ],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr, 50mtr, 100mtr",
        },
      },
    ],
  },
  {
    category: "Garden and Tubing Hose Pipe",
    subproducts: [
      {
        product: {
          ProductName: "Fifty-Fifty (50-50)",
          image: [fiftyFifty2,fiftyFifty1,fiftyFifty],
          sizeWeight: [
            { s: '1/2"', w: "3" },
            { s: '3/4"', w: "4.5" },
            { s: '1"', w: "7" }
          ],
          colors: ["Yellow, Orange, Parrot Green, Pink"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Color Transparent (C.T.T)",
          image: [ctt,ctt1,ctt2 ],
          sizeWeight: [
            { s: '1/2"', w: "2.5" },
            { s: '3/4"', w: "3.5" },
            { s: '1"', w: "6.5" }
          ],
          colors: ["Yellow, Orange, Parrot Green, Pink"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Color Zebra",
          image: [colorZebra,colorZebra1,colorZebra2],
          sizeWeight: [
            { s: '1/2"', w: "3" },
            { s: '3/4"', w: "4.5" },
            { s: '1"', w: "7" }
          ],
          colors: ["Yellow, Orange, Parrot Green, Pink"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Opek",
          image: [opek1,opek,opek2],
          sizeWeight: [
            { s: '1/2"', w: "3" },
            { s: '3/4"', w: "4.5" },
            { s: '1"', w: "7" }
          ],
          colors: ["Yellow, Orange, Parrot Green, Pink"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "White T.T",
          image: [WhiteTT,WhiteTT2],
          sizeWeight: [
            { s: '1/2"', w: "3" },
            { s: '3/4"', w: "4.5" },
            { s: '1"', w: "7.5" }
          ],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Metallic",
          image: [metallic,metallic],
          sizeWeight: [
            { s: '1/2"', w: "3" },
            { s: '3/4"', w: "4.5" },
            { s: '1"', w: "7.5" }
          ],
          colors: ["Yellow, Orange, Parrot Green, Pink"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Double Decker",
          image: [doubleDecker],
          sizeWeight: [
            { s: '1/2"', w: "3.5" },
            { s: '3/4"', w: "5" },
            { s: '1"', w: "8" }
          ],
          colors: ["Parrot Green , Yellow, Blue, White, Orange, Pink"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Super Foam",
          image: [superFoamTwo, superFoamOne,foam2],
          sizeWeight: [
            { s: '1/2"', w: "3.5" },
            { s: '3/4"', w: "5" },
            { s: '1"', w: "8" }
          ],
          colors: ["Parrot Green , Yellow, Orange, Pink"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Super 32 Line Rib",
          image: [LineRib3,LineRib2],
          sizeWeight: [
            { s: '3/4"', w: "5" },
            { s: '1"', w: "8.5" }
          ],
          colors: ["Parrot Green , Yellow, Blue, White, Orange, Pink"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Level Tube",
          image: [levelTube,levelTube],
          sizeWeight: [
            { s: '6MM', w: "700GM, 1KG" },
            { s: '8MM', w: "1KG" },
            { s: '10MM', w: "1.5KG" }
          ],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Plain Black",
          image: [plainBlack,plainBlack],
          sizeWeight: [
            { s: '1/2"', w: "3.5" },
            { s: '3/4"', w: "5" },
            { s: '1"', w: "8" }
          ],
          colors: ["black"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "Black Zebra",
          image: [blackZebra,blackZebra],
          sizeWeight: [
            { s: '1/2"', w: "3.5" },
            { s: '3/4"', w: "5" },
            { s: '1"', w: "8" }
          ],
          colors: ["black"],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
    ],
  },
  {
    category: "LD Kissan Hose/Layflat Tube",
    subproducts: [
      {
        product: {
          ProductName: "Color L.D. Pipes",
          image: [colorLDpipes,colorLDpipes1,colorLDpipes2],
          sizeWeight: [
            { s: '2"', w: "6" },
            { s: '2.5"', w: "8" },
            { s: '3"', w: "10" },
            { s: '4"', w: "18" },
            { s: '5"', w: "25" },
            { s: '6"', w: "30" }
          ],
          colors: ["Dark Green, B.J.P and Lemon Yellow, Dark Blue, White, Black"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "White Transparent",
          image: [whiteLDpipes1,whiteLDpipes,whiteLDpipes2],
          sizeWeight: [
            { s: '2"', w: "6" },
            { s: '2.5"', w: "8" },
            { s: '3"', w: "10" },
            { s: '4"', w: "18" },
            { s: '5"', w: "25" },
            { s: '6"', w: "30" }
          ],
          //   colors: ["green", "blue", "orange"],
          rollLength: "30mtr",
        },
      },
    ],
  },
  {
    category: "PTMT connection pipes",
    subproducts: [
      {
        product: {
          ProductName: "PTMT Connection Pipes",
          image: [ptmtConnection,ptmtConnection1],
          sizeWeight: [
            { s: '1.5 feet', w: '18"' },
            { s: '2 feet', w: '24"' },
            { s: '1 meter', w: '39"' },
            { s: '1.50 meter', w: '59"' },
            { s: '2 meter', w: '79"' },
            
          ],
          // colors: ["Dark Green, Dark Blue, White, Black"],
          rollLength: "30mtr",
        },
      },
    ],
  },
  {
    category: "Sink/Basin Pipes",
    subproducts: [
      {
        product: {
          ProductName: "Sink/Basin Pipes",
          ProductArrs: ["Suction Sink/Basin Pipe", "Braided Sink/Basin Pipe", "Tubing Sink/Basin Pipe"],
          image: [sinkPipes,braided,tubing],
          sizeWeight: [
            { s: '28"-30"' },
            {withCup: '30"'}
          ],
          // colors: ["Dark Green, Dark Blue, White, Black"],
          // rollLength: "30mtr",
        },
      },
    ],
  },
];

export default productsData;
