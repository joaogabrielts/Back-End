interface IUser {
  id: number;
  name: string;
  email: string;
  module?: string;
}

interface IModule {
  cname: string;
  skills: string[];
}

export const user :IUser = {id:1, name: "alex", email: "alex@kenzie.com.br"}
