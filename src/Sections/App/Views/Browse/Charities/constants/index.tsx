import { ICharity } from '../../../../Models';

export const Categories = [
  "Animals",
  "Community",
  "Disaster",
  "Education",
  "Health",
]

const Charities: ICharity[] = [
  {
    _id: '1',
    name: "SPCA",
    label: "spca",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donatorCount: 1400,
    logoUrl: "https://images.pexels.com/photos/2331575/pexels-photo-2331575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    _id: '2',
    name: "Cancer society",
    label: "cancerSociety",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donatorCount: 6542,
    logoUrl: "https://cdn.pixabay.com/photo/2018/05/03/12/39/woman-3371263_960_720.jpg"
  },
  {
    _id: '3',
    name: "SPCA",
    label: "spca",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donatorCount: 1400,
    logoUrl: "https://images.pexels.com/photos/2331575/pexels-photo-2331575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    _id: '4',
    name: "Cancer society",
    label: "cancerSociety",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donatorCount: 6542,
    logoUrl: "https://cdn.pixabay.com/photo/2018/05/03/12/39/woman-3371263_960_720.jpg"
  },
  {
    _id: '5',
    name: "SPCA",
    label: "spca",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donatorCount: 1400,
    logoUrl: "https://images.pexels.com/photos/2331575/pexels-photo-2331575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    _id: '6',
    name: "Cancer society",
    label: "cancerSociety",
    desc: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donatorCount: 6542,
    logoUrl: "https://cdn.pixabay.com/photo/2018/05/03/12/39/woman-3371263_960_720.jpg"
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