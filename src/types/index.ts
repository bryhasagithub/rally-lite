export type Person = {
  title: string;
  name: string;
  role: string;
  email: string;
};

export type Study = {
  id: string;
  name: string;
  ownerId: string;
  participantCount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  owner: User;
};
