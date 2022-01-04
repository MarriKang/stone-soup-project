export interface RewardData {
    id: number,
    price: number,
    description: string
}

export interface ProjectData {
    id?: any | null,
    creatorId: number,
    creatorName: string,
    title: string,
    currFunds: number
    goal: number,
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

export interface UserData {
    id: number,
    firstName: string,
    lastName: string
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
    creatorName: string,
    title: string,
    currFunds: number,
    goal: number,
    type: string,
    rewards: Array<RewardData>
}

export type RewardContainerProps = {
    id: number,
    price: number,
    description: string,
    key: number
}

export type CheckoutProps = {
    projectId: number,
    rewards: Array<RewardData>,
    submitCheckout: Function
}