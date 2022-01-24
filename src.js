
const List = function(element, listItems){
	// sample template

	this.pageSize =5;
	this.currentPage = 0;
	this.render = function(){
		console.log("here i am ");
                //Empty previous entries
			document.getElementById(element).innerHTML = '';
			let table = document.createElement('table');
			
			let thead = document.createElement('thead');
			
			let tbody = document.createElement('tbody');
			
		  table.appendChild(thead);
		  table.appendChild(tbody);
		  document.getElementById(element).appendChild(table);
				let row_1 = document.createElement('tr');
		let header_1 = document.createElement('th');
		header_1.innerHTML = "Id";
		let header_2 =  document.createElement('th');
		header_2.innerHTML = "Name";
		let header_3 = document.createElement('th');
		header_3.innerHTML = "Roll Number";

		row_1.appendChild(header_1);
		row_1.appendChild(header_2);
		row_1.appendChild(header_3);
	   thead.appendChild(row_1);
		for(i=0;i<5;i++){
			if((i+this.pageSize*this.currentPage)>=listItems.length)
			{
				break;
			}
			let row_2 = document.createElement('tr');
			let body_1 = document.createElement('td');
			body_1.innerHTML = listItems[i+this.pageSize*this.currentPage]["id"];
			let body_2 =  document.createElement('td');
			body_2.innerHTML = listItems[i+this.pageSize*this.currentPage]["name"];
			let body_3 = document.createElement('td');
			body_3.innerHTML = listItems[i+this.pageSize*this.currentPage]["roll_number"];
	
			row_2.appendChild(body_1);
			row_2.appendChild(body_2);
			row_2.appendChild(body_3);
		   	tbody.appendChild(row_2);
		}

		//Code to push page data
               // Here goes your code
	};
	this.navigateFirst = function(){
		this.currentPage = 0;
		this.render();
	};
	this.navigateLast = function(){
		this.currentPage = parseInt(listItems.length/this.pageSize);
		console.log(this.currentPage);
		this.render();
	};
	this.navigatePrev = function(){
		this.currentPage -=1;
		this.render();
	};
	this.navigateNext = function(){
		this.currentPage +=1;
		this.render();
	};
	this.changePageSize = function(size){
		this.pageSize = size;
		this.render();
	};
};
