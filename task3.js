let students = [{
        name: 'Yoan',
        university: 'UMN'
    },
    {
        name: 'Agata',
        university: 'UMN'
    },
    {
        name: 'Yosua',
        university: 'Surya'
    }
];

function pluck(arrayOfObject, propertyName) {
    let temp = [];
    for (let student of arrayOfObject) {
        temp.push(student[propertyName]);
    }
    return temp;
}

let names = pluck(students, 'name');

console.log(
    pluck(students, 'name'),
    ['Yoan', 'Agata', 'Yosua']
);

console.log(
    pluck(students, 'university'),
    ['UMN', 'UMN', 'Surya']
);