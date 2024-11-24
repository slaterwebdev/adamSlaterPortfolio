import {
  arnoldClark,
  darwin,
  goGirl,
  vp,
  howdens,
  vpHelp,
  mbs,
  bigMarketing,
  darwinQuote,
} from "@/assets/porfolio";
import { GridItem } from "@/utils/types";

export const portfolioImages: GridItem[] = [
  {
    id: "arnoldClark",
    url: "https://car.arnoldclarkinsurance.com/assumptions",
    src: arnoldClark,
    category: "B2C",
  },
  {
    id: "darwin",
    url: "https://www.darwin-insurance.com/",
    src: darwin,
    category: "B2C",
  },
  {
    id: "goGirl",
    url: "https://getquote.gogirl.co.uk/quote/create",
    src: goGirl,
    category: "B2C",
  },
  {
    id: "vp",
    url: "https://www.victorianplumbing.co.uk/",
    src: vp,
    category: "B2C",
    employer: true,
  },
  {
    id: "howdens",
    src: howdens,
    category: "B2B",
  },
  {
    id: "vpHelp",
    src: vpHelp,
    url: "https://www.victorianplumbing.co.uk/help-and-customer-service",
    category: "B2B",
  },
  {
    id: "mbs",
    url: "https://www.madebysauce.com/",
    src: mbs,
    employer: true,
  },
  {
    id: "bigMarketing",
    url: "https://bigmarketing.co.uk/",
    src: bigMarketing,
    employer: true,
  },
  {
    id: "darwinQb",
    url: "https://quote.darwin-insurance.com/quote/create",
    src: darwinQuote,
    category: "B2C"
  },
];

export const B2CImages = portfolioImages.filter(
  (item) => item.category === "B2C"
);
export const B2BImages = portfolioImages.filter(
  (item) => item.category === "B2B"
);
export const employers = portfolioImages.filter(
  (item) => item.employer
);
