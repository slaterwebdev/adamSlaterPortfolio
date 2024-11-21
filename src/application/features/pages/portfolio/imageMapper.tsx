import {
  arnoldClark,
  darwin,
  goGirl,
  vp,
  howdens,
  vpHelp,
} from "@/assets/porfolio";
import { GridItem } from "../../../utils/types";

const portfolioImages: GridItem[] = [
  {
    id: "arnoldClark",
    url: "https://car.arnoldclarkinsurance.com/assumptions",
    src: arnoldClark,
  },
  {
    id: "darwin",
    url: "https://www.darwin-insurance.com/",
    src: darwin,
  },
  {
    id: "goGirl",
    url: "https://getquote.gogirl.co.uk/quote/create",
    src: goGirl,
  },
  {
    id: "vp",
    url: "https://www.victorianplumbing.co.uk/",
    src: vp,
  },
  {
    id: "howdens",
    src: howdens,
  },
  {
    id: "vpHelp",
    src: vpHelp,
  },
];

export const findPortfolioImage = (imageName: string) =>
  portfolioImages.find((imageEntry) => imageEntry.id === imageName);
