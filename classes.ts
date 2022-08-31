class Vehicle {
  // public drive(): void {
  //   console.log("Drive");
  // }
  // color: string = "black";
  constructor(private color: string) {}

  protected honk(): void {
    console.log("honk");
  }
}

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car("black");

car.startDrivingProcess();
