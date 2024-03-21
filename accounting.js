const employees = [
    { name: 'John', position: 'Manager', salary: 5000 },
    { name: 'Alice', position: 'Developer', salary: 4000 },
    { name: 'Bob', position: 'Designer', salary: 3500 }
];
// 1. Извлеките информацию о зарплатах всех работников.
//    Создайте массив из зарплат каждого работника.

const salaries = [];
employees.forEach ((p) => {salaries.push(p.salary);
});
console.log('Salaries of employees:', salaries);

// 2. Для каждого работника с позицией 'Developer' добавьте премию в размере 10% к его зарплате.

const updatedEmployees = [];
const bonus = 1.1;
employees.forEach (({salary, ...rest}) => {if (rest.position === 'Developer') {
    salary *= bonus;
    updatedEmployees.push({salary, ...rest});
} else {updatedEmployees.push({salary, ...rest});}});

console.log('Updated employee data:', updatedEmployees);

// 3. Извлеките имена и позиции всех работников.
//    Создайте новый массив объектов, содержащий только имена и позиции работников.

const namesAndPositions = [];
employees.forEach(({name, position}) => {
    namesAndPositions.push({name, position});
    });

console.log('Names and roles of the employees:', namesAndPositions);