
$( document ).ready(function() {

    console.log( "ready!" );

    getCart();
    toyCheckOut();

});

function toyOrder(){
	console.log("Ordering toy");
	//var choco_value = parseInt($('#choco_value').val());
	//console.log(typeof choco_value)
	//var fuzzBallInfo = $('#fuzzBallInfo').1;
	//var sugar_value = $('#sugar_value').val();
	//Cookies.set('Fuzz Ball', 1);
	//Cookies.set('Lemon Cookie', lemon_value);
	//Cookies.set('Sugar Cookie', sugar_value);
	//console.log('cookieOrder', document.cookie);
	var item = new Item({name: 'Fuzz Ball', qty: 1, price: 24.99});
	cart.add(item);
	setCart();
	//console.log(Cookies.get('Fuzz Ball'));
};



function Item(options){
	this.name = options['name'];
	this.qty = options['qty'];
	this.price = options['price'];
}

function Cart(){
	this.items = [];
	this.add = function(item){
		this.items.push(item);
	}
};

var cart = new Cart;

function setCart(){
	var cart_settings = JSON.stringify(cart);
	Cookies.set('cart',cart_settings);
} 

function getCart(){
	var restored_cart = JSON.parse(Cookies.get('cart'));
	cart.items = restored_cart.items;
} 

/*function checkToy(){
	if (Cookies.get('Fuzz Ball')){
		console.log(Cookies.get('Fuzz Ball')); 		
	}

};*/

function toyCheckOut(){
	if (true){
		var cart_items = '';
		for(i=0;i < cart.items.length;i++){
			cart_items += '<li>'+ cart.items[i].name +' $'+ cart.items[i].price +' Quanity '+ cart.items[i].qty +'</li>'	
		}
		$('#items').html(cart_items);
		//$('#fuzzBall').show(Cookies.get('Fuzz Ball'));
		//$('#choco').html('Chocolate Cookies: + Cookies.get('Chocolate Cookie'));
		//$('#lemon').show();
		//$('#lemon').html('Lemon Cookies: ' + Cookies.get('Lemon Cookie'));
		//$('#sugar').show();
		//$('#sugar').html('Sugar Cookies: ' + Cookies.get('Sugar Cookie'));
		//$('#mainCopy').html('Please check your order and complete the following fields.');
	//} else {
		//$('#orderHistory').hide();
		//$('#fuzzBall').hide();
		//$('#lemon').hide();
		//$('#sugar').hide();
	}
} 
