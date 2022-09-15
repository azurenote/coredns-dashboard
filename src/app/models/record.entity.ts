

export interface RecordEntity {
  id?: number,
  zone: string,
  name: string
  ttl: number,
  createdAt?: Date
  updatedAt?: Date
  zoneId?: number
}

export type RecordTypeEnum = 'A' | 'MX' |'CNAME' |'';

export interface RecordA extends RecordEntity {
  recordType: 'A',
  content: {
    ip: string
  }
}

export interface RecordMX extends RecordEntity {
  recordType: 'MX',
  content: {
    host: string,
    priority: number
  }
}

export interface RecordCNAME extends RecordEntity {
  recordType: 'CNAME',
  content: {
    host: string
  }
}

export interface RecordEmpty extends RecordEntity {
  recordType: '',
  content?: any
}


export type Record =
  RecordA |
  RecordMX |
  RecordCNAME |
  RecordEmpty;



export function emptyRecord(): Record {
  return {
    zone: '',
    name: '',
    ttl: 0,
    recordType: ''
  }
}
