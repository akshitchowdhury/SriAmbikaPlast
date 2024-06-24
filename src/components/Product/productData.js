import flexSuction from '../../assets/products/flexSuction.webp';
import superFlexSuction from '../../assets/products/superFlexSuction.webp';
import topLonBraided from '../../assets/products/topLonBraided.webp';
import goodLonBraided from '../../assets/products/goodLonBraided.webp';
import colorLDpipes from '../../assets/products/colorLDpipes.webp';
import whiteLDpipes from '../../assets/products/whiteLDpipes.avif';

const productsData = [
  {
    category: "PVC Suction Hose Pipe",
    subproducts: [
      {
        product: {
          ProductName: "Flex Suction",
          image: flexSuction,
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
          image: superFlexSuction,
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
          image: topLonBraided,
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
          image: goodLonBraided,
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
          image: {},
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
          image: {},
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
          image: {},
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
          image: {},
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
          image: {},
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
          image: {},
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
          ProductName: "Black Zebra",
          image: {},
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
          ProductName: "Double Decker",
          image: {},
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
          image: {},
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
          image: {},
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
          image: {},
          sizeWeight: [
            { s: '6MM', w: "700GM, 1KG" },
            { s: '8MM', w: "1KG" },
            { s: '10MM', w: "1.5KG" }
          ],
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
          image: colorLDpipes,
          sizeWeight: [
            { s: '2"', w: "6" },
            { s: '2.5"', w: "8" },
            { s: '3"', w: "10" },
            { s: '4"', w: "18" },
            { s: '5"', w: "25" },
            { s: '6"', w: "30" }
          ],
          colors: ["Dark Green, Dark Blue, White, Black"],
          rollLength: "30mtr",
        },
      },
      {
        product: {
          ProductName: "White Transparent",
          image: whiteLDpipes,
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
];

export default productsData;
