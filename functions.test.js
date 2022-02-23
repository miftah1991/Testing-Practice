const functions = require('./functions');

describe('Practice Methos',() =>{


test('Add 2 + 2 to equal 4',()=>{
    expect(functions.add(2,2)).toBe(4);
})
test('Add 2 + 2 to not  equal 4',()=>{
    expect(functions.add(2,2)).not.toBe(5);
})
// check for truthy  and falsy values
// toBenull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches any that an if statment treats as true
// toBeFalsy matches anthing that an if statment treats as false
test('Add 2 + 2 to not  equal 4',()=>{
    expect(functions.add(2,2)).not.toBe(5);
})
test('Should be null', ()=>{
    expect(functions.isNull()).toBeNull();
})
test('Should be falsey', ()=>{
    expect(functions.checkVlalue(null)).toBeFalsy();
})
test('Should be falsey', ()=>{
    expect(functions.checkVlalue(0)).toBeFalsy();
})
test('Should be falsey', ()=>{
    expect(functions.checkVlalue(undefined)).toBeFalsy();
})
// test('Should be falsey', ()=>{
//     expect(functions.checkVlalue(2)).toBeFalsy();
// })
// test('User should be Miftah Amin object', ()=>{
//     expect(functions.createUser(undefined)).toBe({
//         firstName :'Miftah',
//         lastName :'Amin'
//     });
// })
//to be is for permative data type for object or array toEqual
test('User should be Miftah Amin object', ()=>{
    expect(functions.createUser(undefined)).toEqual({
        firstName :'Miftah',
        lastName :'Amin'
    });
})
//lest than and greater than

test('should be under 1600',() =>{
    const load1=800;
    const load2=700;
    expect(load1+load2).toBeLessThan(1600);
});

test('should be under 1600',() =>{
    const load1=800;
    const load2=800;
    expect(load1+load2).toBeLessThanOrEqual(1600);
});
test('regx there is not i in team',() =>{
    expect('team ').not.toMatch(/I/);
});
//Arrays
test('Admin shoud be in userans',() =>{
    usernames =['amin','admin','khan']
    expect(usernames).toContain('admin');
});

//working wiht async data promise
// test('user ftech name shoud be Leanne graham',() =>{
//    expect.assertions(1);
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     }) 
// });

//Async

// test('user ftech name shoud be Leanne graham', async () =>{
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
//  });

test('string lengh',() => {
    expect(functions.stringLength('amin')).toBe(4);
})

test('reverse string  lengh',() => {
    expect(functions.reversString('amin')).toBe('nima');
})
})