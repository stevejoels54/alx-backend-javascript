class Teacher {
    private _firstName: string;
    private _lastName: string;
    private _fullTimeEmployee: boolean;
    private _yearsOfExperience?: number;
    private _location: string;
  
    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._fullTimeEmployee = fullTimeEmployee;
      this._location = location;
      this._yearsOfExperience = yearsOfExperience;
    }
  
    // Getter for firstName
    get firstName(): string {
      return this._firstName;
    }
  
    // Getter for lastName
    get lastName(): string {
      return this._lastName;
    }
  
    // Getter for fullTimeEmployee
    get fullTimeEmployee(): boolean {
      return this._fullTimeEmployee;
    }
  
    // Getter for yearsOfExperience
    [key: string]: any; // Add index signature

    get yearsOfExperience(): number | undefined {
        return this._yearsOfExperience;
    }

    // Getter for location
    get location(): string {
        return this._location;
    }

    // Method to add any attribute to the object
    addAttribute(key: string, value: any): void {
        this[key] = value;
    }
  }
  
  // Example usage
  const teacher3 = new Teacher('John', 'Doe', false, 'London', 5);
  teacher3.addAttribute('contract', false);
  
  console.log(teacher3);
  