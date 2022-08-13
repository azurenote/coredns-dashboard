

export interface Record {
  id?: number,
  zone: string,
  name: string
  content: any,
  ttl: number,
  recordType: string,
  createdAt?: Date
}
