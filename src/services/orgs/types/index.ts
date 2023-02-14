interface OrgsStateTypes {
  orgId?: number;
  name?: string | number;
  package?: string;
  startDate?: string;
  endDate?: string;
  trailExpired: boolean;
  isSelectedOrg: boolean;
}

interface DomainStateTypes {
  domain: string;
}
interface DomainPayloadTypes {
  id: number;
}
export type { OrgsStateTypes, DomainStateTypes, DomainPayloadTypes };
