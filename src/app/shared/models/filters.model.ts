export class FiltersObject {
  constructor(
    public price?: {from: number, to: number},
    public category?: string,
    public stock?: string
  ) {
  }
}
