// Component Author
let authorWrap = document.createElement( 'h4' );
authorWrap.id = 'author';
authorWrap.title = 'GossJS';
let author = document.body.appendChild( authorWrap );
author.textContent = 'Danil Rostov';

function clckFunc() {
	console.log( this );
	this.textContent = this.id;
}

// Component Buttons
document.querySelector('#bt1').addEventListener( 'click', clckFunc );
document.querySelector('#bt2').addEventListener( 'click', ( { target } ) => target::clckFunc() );