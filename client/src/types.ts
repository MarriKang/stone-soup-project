export interface RewardData {
    id: number,
    price: number,
    description: string
}

export default interface ProjectData {
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

export type ProjectContainerProps  = {
  id: number,
  title: string,
  currFunds: number,
  goal: number,
  imageUrl: string,
  type: string,
  key: number
}