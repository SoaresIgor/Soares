describe ("MDCIgor", function(){
	it("Encontra o maximo divisor comum entre dois numeros", function(){
		var expResult = 5;
		var result = MDC(15, 25);
		
		expect(expResult).toEqual(result);
	});
});