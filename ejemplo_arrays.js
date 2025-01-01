var expenses = [10,45,67,180,432,1000,245,250,67,54,67,,765,4000,12,4,350];

// var resultadoForEach = expenses.forEach((x)=> console.log('<p>Gasto: '+x+'</p>'));
// console.log(resultadoForEach);

var resultadoMap = expenses.map((x) => x*2);
// console.log(resultadoMap);


var book1 = {"titulo": "la historia interminable", "autor": "ende", "precio": 18};
var book2 = {"titulo": "el hobbit ", "autor": "jrr tolkien", "precio": 9};
var book3 = {"titulo": "la vida imposible", "autor": "matt haig", "precio": 20};

var books = []
books.push(book1);
books.push(book2);
books.push(book3);

// var titles = books.map((x) => x.titulo.toUpperCase());
// console.log(titles);

book1.published="1983";
book2.published="1945";
book3.published="2024";



// calcular precio final
books.forEach((element) => element.iva = element.precio * 1.21);



console.log(books);

// calcular la media de una lista de enteros
function calcularMedia(lista) { // lista -> ej: [4,6,4,2,6,7]
    var total = 0;
    lista.forEach(element => {
      total = total + element;
    });
    return total / lista.length;
  }

  console.log(calcularMedia([1,2,3,3,4,4,5]));
