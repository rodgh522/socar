export type SubscribedEvent = {
  push: boolean,
  SMS: boolean,
  email: boolean
};

export type BasicUserInfo = {
  userName: string,
  dateOfBirth: string,
  firstNum: string,
  phone: string
}

export type User = {
  push: boolean,
  SMS: boolean,
  email: boolean
  userName: string,
  dateOfBirth: string,
  firstNum: string,
  phone: string,
  loginId: string,
  pwd: string,
  inviteCode: string
}