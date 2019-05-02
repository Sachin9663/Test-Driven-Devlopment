const sum = require('./sum');
test('adds 1 and 2 will give results 3' , ()=>{
    expect(sum(1,2)).toBe(3);  
})

test('adds -1 and 3 will give results 2' , ()=>{
    
    expect(sum(-1,3)).toBe(2); 
})

test('two plus two', () => {
    const value = sum(2,2);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });


  const list=[
      "Mean",
      "feen",
      "jvm",
      "DevOps",
      "ioS",
      "Druple",
      "Android"
  ];

  test("the list of competency contain Mean in it",()=>{
      expect(list).toContain('Mean');
  })

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);  //somthing rounding error       
    expect(value).toBeCloseTo(0.3); // This works.
  });


  test('there is m in sachin', () => {
    expect('sachin').not.toMatch(/m/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
