describe('Testiranje funkcionalnosti kalkulatora', () => {

  it('should add numbers', () => {
    expect(add(2, 2)).toBe(4);
    expect(add(-2, -2)).toBe(-4);
    expect(add(2, -2)).toBe(0);
    expect(add(2, Infinity)).toBe(Infinity);
  })

  it('should subtract numbers', () => {
    expect(subtract(5, 2)).toBe(3)
    expect(subtract(2, 5)).toBe(-3)
    expect(subtract(5, "k")).toBeNaN()
  })

  it('should multiply numbers', () => {
    expect(multiply(3, 3)).toBe(9)
    expect(multiply(-3, -3)).toBe(9)
  })

  it('should divide numbers', () => {
    expect(divide(3, 3)).toBe(1)
    expect(divide(9, 3)).toBe(3)
  })

})