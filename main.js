const keyboard = [ 
    {
        action: true,
        photo: "https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg",
        name: "Клавіатура дротова Logitech 2031J",
        reviews: 204,
        price: 800
    },
    {
        action: false,
        photo: "https://cdn.shopify.com/s/files/1/1920/0265/products/ZT_Keyboard_Silver_Bezel_transparent_background_-_squared_600x600.jpg?v=1571342079",
        name: "Клавіатура Cougar Vantar",
        reviews: 6,
        price: 1286
    },
    {
        action: true,
        photo: "https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg",
        name: "Клавіатура дротова Logitech 2031J",
        reviews: 204,
        price: 1199
    },
    {
        action: false,
        photo: "https://www.lenovo.com/medias/4Y40X49493-01-500x400.png?context=bWFzdGVyfHJvb3R8MTE2NjEwfGltYWdlL3BuZ3xoYTkvaDdiLzExMDQ1MTIzMjYwNDQ2LnBuZ3w1NDYyNzllMzJiZTFlYjEzZDU2ODYyOTRiNDMyNGRmODkyZDA2OTI2OTMyOTI2ODljMjQ4ZWYwMThjNWJkNWIy",
        name: "Клавіатура Cougar Vantar",
        reviews: 6,
        price: 1700
    },
    {
        action: true,
        photo: "https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg",
        name: "Клавіатура дротова Logitech 2031J",
        reviews: 204,
        price: 1199
    },
    {
        action: false,
        photo: "https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..1569470766.jpg",
        name: "Клавіатура Cougar Vantar",
        reviews: 6,
        price: 1286
    }
];

const products = document.getElementById('products');

let max = 0;
for(i=0; i<keyboard.length; i++ ){
	if(keyboard[i].price > max){ max = keyboard[i].price} 
}

let cards_text = ``;

for(i=0; i<keyboard.length; i++ ){

	let isaction=``;
	let point=0;
	point +=keyboard[i].reviews/2;
	let res = max-keyboard[i].price;

	if(keyboard[i].action){
		isAction=`<div class="action">Акція</div>`
		point += 100;

	}
	 point += res;

	 cards_text+=
	 `
	 <div class="card">
			<div class="header">
				${isAction} </div>
			
			<div class="card_image">
				<img src="${keyboard[i].photo}">
			</div>
			
			<div class="card_info">
				<div class="${keyboard[i].name}">
					
				</div>
				
				<div class="reviews">
					${keyboard[i].reviews} відгуки
				</div>
				
				<div class="price">
					${keyboard[i].price}
				</div>
			</div>
		</div>
	</div>
	
	`;
}

products.innerHTML = cards_text;

console.log(keyboard);