

export { Zone } from './zone.entity';
export {
  Record, emptyRecord, RecordTypeEnum, RecordEmpty, RecordTypeOptions,
  RecordA, RecordMX, RecordCNAME
} from './record.entity';

export interface ZoneList {
  zones: Zone[]
}
