export class Actor {
  constructor(
    public id: number,
    public name: string,
    public role:string,
    public skill: string,
    public studio?: string
  ){}
}