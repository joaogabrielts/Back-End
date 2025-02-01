interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

//Omit é usado pra exluir
type TRegisterData = Omit<IUser, "id" | "name">; // E pra excluir dois basta colocar o ou |

// Criando um objeto válido do tipo TRegisterData
const object: TRegisterData = {
  email: "user@example.com",
  password: "securepassword",
  role: "admin",
};
console.log(object); // Já excluiu o id e name

//---------------------------------------------------------------------------------------------------------------------------------------------

//Pick é usado pra incluir

type TLoginBody = Pick<IUser, "email" | "password">;
const object1: TLoginBody = {
  email: "usser@gamil.com",
  password: "123456u",
};

//----------------------------------------------------------------------------------------------------------

//Partial todos os valores são opcionais

type TPartialUser = Partial<IUser>;
const object3: TPartialUser = {
  email: "", //agora todos os valores estao opcionaos, estao com ponto de ?
};

//--------------------------------------------------------------------------------------------------------------

//Partial + omit

type TUdateData = Partial<TRegisterData>;

const object4: TUdateData = {
    email: "",
    password: "",
}