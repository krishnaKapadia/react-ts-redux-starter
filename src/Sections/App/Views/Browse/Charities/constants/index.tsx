import { ICharity } from '../../../../Models';

const Charities: ICharity[] = [
  {
    name: "SPCA",
    label: "spca",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donators: 1400,
    totalRaised: "600",
    bannerUrl: "https://images.pexels.com/photos/2331575/pexels-photo-2331575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    name: "Cancer society",
    label: "cancerSociety",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donators: 6542,
    totalRaised: "9700",
    bannerUrl: "https://cdn.pixabay.com/photo/2018/05/03/12/39/woman-3371263_960_720.jpg"
  },
  {
    name: "SPCA",
    label: "spca",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donators: 1400,
    totalRaised: "600",
    bannerUrl: "https://images.pexels.com/photos/2331575/pexels-photo-2331575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    name: "Cancer society",
    label: "cancerSociety",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donators: 6542,
    totalRaised: "9700",
    bannerUrl: "https://cdn.pixabay.com/photo/2018/05/03/12/39/woman-3371263_960_720.jpg"
  },
  {
    name: "SPCA",
    label: "spca",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donators: 1400,
    totalRaised: "600",
    bannerUrl: "https://images.pexels.com/photos/2331575/pexels-photo-2331575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    name: "Cancer society",
    label: "cancerSociety",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donators: 6542,
    totalRaised: "9700",
    bannerUrl: "https://cdn.pixabay.com/photo/2018/05/03/12/39/woman-3371263_960_720.jpg"
  },
];

type ISortBy = {
  name: string;
};

const SortBy: ISortBy[] = [
  {
    name: "Most popular"
  },
  {
    name: "Recently added"
  }
];

export { Charities, SortBy };