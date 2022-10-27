
describe ('calculator tests', function(){
  it('should calculate the monthly rate correctly', function () {
  const values = { amount:1000, years: 1, rate: 2};
  expect(calculateMonthlyPayment(values)).toEqual('84.24');
});


it("should return a result with 2 decimal places", function() {
  const values = {amount:1000, years:1, rate:2};
  expect(calculateMonthlyPayment(values).toString()).toMatch(/^\d+\.\d\d$/);
});
});
/// etc
