// Mark Frederiksen

var counties,
	countiesMenu,
	i;

counties = [
	"Allegany County", 
	"Anne Arundel County", 
	"Baltimore City", 
	"Baltimore County", 
	"Calvert County", 
	"Caroline County", 
	"Carroll County", 
	"Cecil County", 
	"Charles County", 
	"Dorchester County", 
	"Frederick County", 
	"Garrett County", 
	"Harford County", 
	"Howard County", 
	"Kent County", 
	"Montgomery County", 
	"Prince George's County", 
	"Queen Anne's County", 
	"Saint Mary's County", 
	"Somerset County", 
	"Talbot County", 
	"Washington County", 
	"Wicomico County", 
	"Worcester County"
];

// populate drop doen countiesMenu

countiesMenu = document.getElementById('countiesMenu');

//
// countiesMenu.innerHTML += '<option>' + counties[0] + '</option>';
// countiesMenu.innerHTML += '<option>' + counties[1] + '</option>';

for (i=0; i < counties.length; i++) {
	countiesMenu.innerHTML += '<option>' + counties[i] + '</option>';
}




