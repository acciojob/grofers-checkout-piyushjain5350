const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.getElementsByClassName("price");
	let ans=0;
	for(let i of prices){
		ans+=Number(i.innerText);
	}
	// console.log(ans);
	let row=document.createElement("tr");
	let col1=document.createElement("td");
	let col2=document.createElement("td");
	col2.id="ans";
	col2.innerText=`${ans}`;
	row.appendChild(col1);
	row.appendChild(col2);
	let table=document.getElementsByTagName("table")[0];
	table.appendChild(row);
  
};

getSumBtn.addEventListener("click", getSum);

