//Exercício 41 - Só aceitar letras maiúsculas

const letrasMaiusculas = /^[A-Z]+$/;
/* console.log(letrasMaiusculas.test("D3"));
console.log(letrasMaiusculas.test("D")); */

//Exercício 42 - Só aceitar strings terminadas com 'ID'

const terminaComID = /ID$/;
/* console.log(terminaComID.test("123ID"));
console.log(terminaComID.test("abcdD")); */

//Exercício 43 - Só aceitar strings que começam com "Marca: " seguidas de uma das 4 marcas:
//Nike, Adidas, Puma ou Asics.

const marcas = /^Marca: (Nike|Adidas|Puma|Asics)$/;
/* console.log(marcas.test("Marca: Adidas"));
console.log(marcas.test("Marca:Adidas")); */

//Exercício 44 - Só aceitar formatos de IP válidos

const ipFormats = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;

/* console.log(ipFormats.test("192.168.0.1"));
console.log(ipFormats.test("194.168.0.a")); */

//Exercício 45 - Só aceitar nomes de usuários válidos (letras, _, - e números)
//Tamanho: 3 - 16 caracteres

const usuarioValido = /^(?=.{3,16}$)[a-z0-9_-]/;

console.log(usuarioValido.test("joao123"));