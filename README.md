/**************************
 * DOBLE NEGACION DE NULL *
 **************************/
 
 let data = null
 console.log(data); al cargarse arroja null

null devuelve null
!null devuelve true
!!null devuelve false

data=[{
    author:'lee',
    quote:'lala...
}]

console.log(data) //[]

evaluo data que sea true y obtengo lo que haya en la posicion 0 de data
  const { author, quote } = !!data && data[0];
  console.log(quote);


/**********************************************
 * CAMBIAR VALOR DEL USESTATE SIN DEPENDENCIA *
 **********************************************/

const [counter, setCounter] = useState(10);

setCounter((c) => c + 1);

  video 118

/********
 * MEMO *
 ********/
 Es un HOC
 useMemo es un hook para memorizar un valor.

 
/*****************************
 * NO USAR EL INDEX COMO KEY *
 *****************************/
usar un id o new Date().getTime()