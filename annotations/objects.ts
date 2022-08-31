const profile = {
  name: "Jackson",
  age: 36,
  coordinates: {
    latitude: -122.5,
    longitude: -122.5,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;
const {
  coordinates: { latitude, longitude },
}: {
  coordinates: { latitude: number; longitude: number };
} = profile;
