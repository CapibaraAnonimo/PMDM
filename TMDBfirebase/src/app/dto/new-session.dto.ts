export class NewSessionDto {
  request_token: string = '';

  constructor(init?:Partial<NewSessionDto>) {
    Object.assign(this, init);
  }
}
