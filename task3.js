import { isTSAnyKeyword } from "@babel/types";

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

export default pluck;