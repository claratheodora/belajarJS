const pluck = require('../task3');

test('should pluck values', () =>{
    except(pluck(student, 'name')).toEqual(['Yoan', 'Agata', 'Yosua']);
});