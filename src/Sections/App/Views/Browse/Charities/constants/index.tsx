type ICharity = {
  name: string;
  description: string;
  donators: number;
  totalRaised: string;
  imgUrl: string;
}

const Charities: ICharity[] = [
  {
    name: "SPCA",
    description: "We help animals find happy, healthy homes. Support us so that we can help those in need.",
    donators: 1400,
    totalRaised: "65000",
    imgUrl: "https://images.pexels.com/photos/2331575/pexels-photo-2331575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
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