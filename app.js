// function(){
let heroData = [
{	
	name: "Spider-Man",
	phone_no:"888-555-1118",
	comics:"Marvel",
	image_url:"https://vignette1.wikia.nocookie.net/spiderman/images/9/98/Spidey_12.png/revision/latest?cb=20150606182652"
},{	name: "Agent Venom",
	phone_no:"888-555-1117",
	comics:"Marvel",
	image_url:"https://vignette4.wikia.nocookie.net/marveldatabase/images/c/cc/Venom_Vol_2_4_Textless.jpg/revision/latest/scale-to-width-down/180?cb=20110510180414"
},{	name: "The Scarlet Spider",
	phone_no:"888-555-1116",
	comics:"Marvel",
	image_url:"https://static.comicvine.com/uploads/original/11116/111161527/3956443-scarlet+spider.jpg"
},{	name: "Superman",
	phone_no:"888-555-1114",
	comics:"DC",
	image_url:"http://www.dccomics.com/sites/default/files/files/character-pops/superman_459Wx300H_589104907a0b05.70849485.png"
},{	name: "Batman",
	phone_no:"888-555-1114",
	comics:"DC",
	image_url:"https://s-media-cache-ak0.pinimg.com/736x/e5/a0/69/e5a06942fa42823c88be5f3a834e063d.jpg"
},{	name: "The Punisher",
	phone_no:"888-555-1113",
	comics:"Marvel",
	image_url:"http://orig06.deviantart.net/bcbd/f/2016/086/f/9/silhouette_series___punisher_by_eranga_d-d9wqs7b.jpg"
}];


angular.module('heroApp', []).controller('PhoneBookController', [phonebook])

	function phonebook() {
		this.heroList = heroData;
		this.hide = true;
		this.showPic = function(){hide = !hide}
	}

// }();










