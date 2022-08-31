interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

const drink = {
  color: "brown",
  summary(): string {
    return `Color: ${this.color}`;
  },
};

const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
