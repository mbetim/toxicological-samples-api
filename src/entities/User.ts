import { uid } from "uid";

export class User {
  public readonly id: string;
  public email: string;
  public password?: string;
  public name: string;

  constructor(props: Omit<User, "id">, id?: string) {
    this.id = id || uid();
    this.email = props.email;
    this.password = props.password;
    this.name = props.name;
  }
}
