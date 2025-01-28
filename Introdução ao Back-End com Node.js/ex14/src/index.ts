const nameList: string[] = [];

const addName = (name: string): void => {
  nameList.push(name);
};

const getName = (): void => {
  nameList.forEach((name) => console.log(name));
};

const removeName = (index: number): void => {
  nameList.splice(index, 1);
};

const updateName = (index: number, name: string): void => {
  nameList.splice(index, 1, name);
};

addName("Alex")
addName("Otávio")
addName("Roberto")
removeName(1)
updateName(1,"Osvaldo")
getName()
