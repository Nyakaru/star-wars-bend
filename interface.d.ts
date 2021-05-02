export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

interface PersonResponse {
    results: [Person]
}
