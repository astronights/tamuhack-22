export type subscription = {
  serviceName: string;
  fee: number;
  lastUsed: Date;
  renewalDate: Date;
  category?: string;
};
