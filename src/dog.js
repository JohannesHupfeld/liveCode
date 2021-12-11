class Dog {
  constructor(id, name, breed, knownFor) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.knownFor = knownFor;
  }

  renderDog() {
    return `
      <div class="dog-card">
        <p>Name: ${this.name}</p>
        <p>Breed: ${this.breed}</p> 
        <p>Known For: ${this.knownFor}</p>
      </div>
      `;
  }
}

Dog.all = [];