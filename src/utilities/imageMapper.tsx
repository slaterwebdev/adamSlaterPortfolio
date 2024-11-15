import {
  arnoldClark,
  darwin,
  goGirl,
  vp,
  howdens,
  vpHelp,
} from "@/assets/porfolio";
import { GridItem } from "@/types/types";

const portfolioImages: GridItem[] = [
  {
    name: "arnoldClark",
    url: "https://car.arnoldclarkinsurance.com/assumptions",
    src: arnoldClark,
  },
  {
    name: "darwin",
    url: "https://www.darwin-insurance.com/",
    src: darwin,
  },
  {
    name: "goGirl",
    url: "https://getquote.gogirl.co.uk/quote/create",
    src: goGirl,
  },
  {
    name: "vp",
    url: "https://www.victorianplumbing.co.uk/",
    src: vp,
  },
  {
    name: "howdens",
    src: howdens,
  },
  {
    name: "vpHelp",
    src: vpHelp,
  },
];

export const findPortfolioImage = (imageName: string) =>
  portfolioImages.find(imageEntry => imageEntry.name === imageName);
