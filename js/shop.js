// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
        /* offer: {
            number: 3,
            percent: 20 
        }*/
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        /* offer: {
            number: 10,
            percent: 30
        } */
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;


//-------------------------------------------------------

function Carts(name, price, type, quantity, subtotal, subtotalWithDiscount) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.quantity = quantity;
    this.subtotal = subtotal;
    this.subtotalWithDiscount = subtotalWithDiscount;
}

// ************************************************ Nivell I *****************************************************

// Exercici 1 -------------------------------------

// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array

/*  La funció que has de completar es diu buy(), la qual rep l'id del producte a afegir. 
 Has de buscar el producte utilitzant aquest id rebut a l'array products, per finalment afegir-ho 
   a l´array cartList. */


function buy(id) {

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            cartList.push(products[i]);
            //console.log(cartList);
        }
    }
}

// Exercise 2 --------------------------------------------------------------------


/* Ara implementarem una funció que permeti a l'usuari/ària eliminar l'array generat a l'anterior exercici: buidar el carret.
En aquest cas, hauràs d'emprar la funció cleanCart(), la qual ha de reinicialitzar la variable CartList. */

function cleanCart() {

    cartList.splice(0, cartList.length); //Buidem cartList
    console.log(cartList); // comprovem que es buidi

    //Esborrem els productes de la finestra modal:

    let comptador = 1;
    let totalPrice = 0;

    for (i = 0; i < cart.length; i++) {

        document.getElementById(`producte${comptador}`).innerHTML = "";
        document.getElementById(`preu${comptador}`).innerHTML = "";
        document.getElementById(`quantitat${comptador}`).innerHTML = "";
        document.getElementById(`total${comptador}`).innerHTML = "";
        comptador++
    }
    document.getElementById("total_price").innerHTML = totalPrice;
    document.getElementById("count_product").innerHTML = "0";
    cart.splice(0, cart.length); ////Buidem cart
}




// Exercise 3 ----------------------------------------------------------------

// Calculate total price of the cart using the "cartList" array
// S'ha d'implementar un bucle for per anar sumant l'import de tots els productes.

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
        total = total + cartList[i].price;
        console.log(total)
    }
}

// Exercise 4 ---------------------------------------------------------------------------------------------

// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

/* Seria més convenient que no apareguessin repetits, sinó que cada producte del carret comptés amb un camp quantitat.

Per a això, hauràs de completar la funció generateCart(), la qual rep l'array cartList, generant l'array cart.

Crea un botó per tal de poder cridar a la funció generateCart() */


function generateCart(matriu) {

    //He posat a index.html la matriu cartList ------> generateCart(cartList)

    if (cartList.length > 0) { //No podem generar cart si cartList és buida

        if (cart.length === 0) {

            let nouObjecte = new Carts(matriu[0].name, matriu[0].price, matriu[0].type, 1, matriu[0].price, matriu[0].price);
            cart.push(nouObjecte);
            console.log(cart);

            for (let i = 1; i < matriu.length; i++) {

                let nameMatriu = matriu[i].name;

                const index = cart.findIndex(element => {
                    if (element.name === nameMatriu) {
                        return true;
                    } else
                        return false;
                });

                console.log(index);

                if (index !== -1) {
                    cart[index].quantity++;
                    cart[index].subtotal = cart[index].price * cart[index].quantity;
                    cart[index].subtotalWithDiscount = cart[index].price * cart[index].quantity; //És el que mostrem al modal
                } else {

                    let nouObjecte = new Carts(matriu[i].name, matriu[i].price, matriu[i].type, 1, matriu[i].price, matriu[i].price);
                    cart.push(nouObjecte);
                }
            }

            matriuLengthFirst = matriu.length; //Per saber on començar si afegim nous productes
            // console.log(matriuLengthFirst); 

        } else { //Quan la matriu Cart ja té alguns articles dins 

            for (let i = matriuLengthFirst; i < matriu.length; i++) {

                let nameMatriu = matriu[i].name;

                const index = cart.findIndex(element => {
                    if (element.name === nameMatriu) {
                        return true;
                    } else
                        return false;
                });

                if (index !== -1) {

                    cart[index].quantity++;
                    cart[index].subtotal = cart[index].price * cart[index].quantity;
                    cart[index].subtotalWithDiscount = cart[index].price * cart[index].quantity; //És el que mostrem al modal
                    matriuLengthFirst++;

                } else {

                    let nouObjecte = new Carts(matriu[i].name, matriu[i].price, matriu[i].type, 1, matriu[i].price, matriu[i].price);
                    cart.push(nouObjecte);
                    matriuLengthFirst++
                }
            }

            // console.log(cart);
        }

        document.getElementById("count_product").innerHTML = `${cartList.length}`;

        applyPromotionsCart(cart); //Apliquem promoció amb la funció de l´exercici 5

    } else alert("No products selected. Can´t generate Cart."); //Si cartList és buida
}



// Exercise 5 --------------------- Apply promotions to each item in the array "cart"------------------


//---- Si l'usuari compra 3 o més ampolles d'oli, el preu del producte descendeix a 10 euros:


function applyPromotionsCart(matriu) {

    for (i = 0; i < matriu.length; i++) {

        if (matriu[i].name == 'cooking oil' && matriu[i].quantity >= 3) {

            matriu[i].subtotalWithDiscount = 10 * matriu[i].quantity //preu amb descompte 10euros
        }
    }

    //---- Quan es compren 10 o més productes per a fer pastís, el seu preu es rebaixa a 2/3:

    for (i = 0; i < matriu.length; i++) {

        if (matriu[i].name == 'Instant cupcake mixture' && matriu[i].quantity >= 10) {

            matriu[i].subtotalWithDiscount = (2 / 3) * 5 * matriu[i].quantity;
        }
    }
}

// Exercise 6 --------------------- Fill the shopping cart modal manipulating the shopping cart dom -----------



function printCart() {

    let comptador = 1;
    let totalPrice = 0;

    for (i = 0; i < cart.length; i++) {

        document.getElementById(`producte${comptador}`).innerHTML = cart[i].name;
        document.getElementById(`preu${comptador}`).innerHTML = "$" + cart[i].price;
        document.getElementById(`quantitat${comptador}`).innerHTML = cart[i].quantity;
        document.getElementById(`total${comptador}`).innerHTML = "$" + cart[i].subtotalWithDiscount.toFixed(2);
        comptador++
        totalPrice += cart[i].subtotalWithDiscount;
        console.log(totalPrice);
    }
    document.getElementById("total_price").innerHTML = totalPrice.toFixed(2);
}

// ************************************************ Nivell II *****************************************************

// Exercise 8 ---------------------------------------------------------------------------------------

// Refactor previous code in order to simplify it 
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array or update its quantity in case it has been added previously.

/* Repassant el programa, es poden mantenir les funcionalitats simplificant el codi: això es diu fer un refactor.

Podem deixar d'usar buy() i generateCart() (no els esborris, per a facilitar la correcció), per a generar el carretó en una única funció addToCart(). */


function addToCart(id) {

    matriuLength = cart.length;

    if (matriuLength == 0) {

        let nouObjecte = new Carts(products[id - 1].name, products[id - 1].price, products[id - 1].type, 1, products[id - 1].price, products[id - 1].price);
        cart.push(nouObjecte);
        console.log(cart);
        document.getElementById("count_product").innerHTML = "1";


    } else {

        let y = products[id - 1].name;
        console.log(y);

        const index = cart.findIndex(element => {
            if (element.name === y) {
                return true;
            } else
                return false;
        });

        if (index !== -1) {

            cart[index].quantity++;
            cart[index].subtotal = cart[index].price * cart[index].quantity;
            cart[index].subtotalWithDiscount = cart[index].price * cart[index].quantity; //És el que mostrem al modal
            document.getElementById("count_product").innerHTML = `${cart.length}`;

        } else {

            let nouObjecte = new Carts(products[id - 1].name, products[id - 1].price, products[id - 1].type, 1, products[id - 1].price, products[id - 1].price);
            cart.push(nouObjecte);
        }
    }

    let q = 0;

    for (i = 0; i < cart.length; i++) {

        q += cart[i].quantity;
    }

    document.getElementById("count_product").innerHTML = q;

    applyPromotionsCart(cart); //Apliquem promoció amb la funció de l´exercici 5
}



// Exercise 9


/* Has de completar la funció removeFromCart(), la qual rep l'id del producte per al qual es deu decrementar la seva quantitat en una unitat.

Tingues en compte que si la quantitat del producte a decrementar és 1, has d'eliminar-lo del carret, no passar la seva quantitat a 0. */


function removeFromCart(id) {
   


    matriuLength = cart.length;

    if (matriuLength == 0) {

        alert("The product is not in the basket");

    } else {


        let y = products[id - 1].name;

        const index = cart.findIndex(element => {
            if (element.name === y) {
                return true;
            } else
                return false;
        });

        if (index !== -1) {

            if (cart[index].quantity == 1) {

                cart.splice(index, 1);
                document.getElementById(`producte${id}`).innerHTML = "";
                document.getElementById(`preu${id}`).innerHTML = "";
                document.getElementById(`quantitat${id}`).innerHTML = "";
                document.getElementById(`total${id}`).innerHTML = "";

                //Buido l´ultim article visible dins el carret.
                document.getElementById(`producte${cart.length + 1}`).innerHTML = "";
                document.getElementById(`preu${cart.length + 1}`).innerHTML = "";
                document.getElementById(`quantitat${cart.length + 1}`).innerHTML = "";
                document.getElementById(`total${cart.length + 1}`).innerHTML = "";


                console.log(cart);

            } else {
                cart[index].quantity--;
                cart[index].subtotal = cart[index].price * cart[index].quantity;
                cart[index].subtotalWithDiscount = cart[index].price * cart[index].quantity; //És el que mostrem al modal
                console.log(cart);
            }

        } else {

            alert("The product is not in the basket");

        }
    }

    let z = 0;
    for (i = 0; i < cart.length; i++) {
        z = z + cart[i].quantity;
    }

    document.getElementById("count_product").innerHTML = z;
}

/************************************************************************************* */


function open_modal() {
    console.log("Open Modal");
    printCart();
}