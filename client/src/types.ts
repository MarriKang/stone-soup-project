export interface RewardData {
    id: number,
    price: number,
    description: string
}

export interface ProjectData {
    id: number,
    creatorId: number,
    title: string,
    currFunds: number
    goal: number,
    endDate: Date,
    description: string,
    status: string,
    imageURL: string,
    type: string
}

export interface RewardData {
    id: number,
    price: number,
    description: string
}

export type ProjectContainerProps  = {
  id: number,
  title: string,
  currFunds: number,
  goal: number,
  imageUrl: string,
  type: string,
  key: number
}

export type SingleProjectProps = {
    id: number,
    creatorId: number,
    title: string,
    currFunds: number,
    goal: number,
    type: string,
    endDate: Date,
    rewards: Array<RewardData>
}

export type RewardContainerProps = {
    id: number,
    price: number,
    description: string,
    key: number
}