import { IRequestStatus } from "../../../Utils/Redux/models";

export type AppState = {
  charities: ICharity[];
  request: IRequestStatus,
  topLevelSearch: string;
};


export type ICharity = {
  _id: string;
  name: string;
  label: string;
  desc: string;
  donatorCount: number;
  logoUrl: string;
};


export type IGetAllCharitiesResponse = {
  charities: ICharity[];
};