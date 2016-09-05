var formattedName = HTMLheaderName.replace("%data%", "Carey Casile");
var formattedRole = HTMLheaderRole.replace("%data%", "Programmer");
var bio = {
	"name": "Carey Casile",
	"role": "Programmer",
	"contactInfo": ["412.327.5608", "carey.casile@gmail.com", "www.twitter.com/carey_casile"],
	"pictureUrl": "images/headshot.jpg",
	"welcomeMessage": "Welcome To My Portfolio",
	"skills": ["Data Analysis", "HTML", "CSS", "JavaScript"]
};

var work = [{
	"position": "Salesman",
	"employer": "PNC",
	"years": 7,
	"city": "Pittsburgh"
},
{
	"position": "Manager",
	"employer": "Disney",
	"years": 1,
	"city": "Orlando"
}];

var school = [{
	"name": "Clarion",
	"years": 4,
	"city": "Clarion",
	"major": "business",
	"minor": "none"
},
{
	"name": "Pitt",
	"years": 4,
	"city": "Pittsburgh",
	"major": "communications",
	"minor": "sociology"
}];
var projects = {};
projects.projects = [{
	"name": "Udacity Resume Project",
	"date": "August 1st, 2016",
},
{
	"name": "Udacity Arcade Clone",
	"date": "October 1st, 2016",
}
];
projects.display = function(name, date) {
	$("#projects").append([HTMLprojectStart]);
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", name);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", date);
	$("#projects").append([formattedProjectTitle]);
	$("#projects").append([formattedProjectDates]);
};
projects.displayRun = function() {
	for (x in projects.projects) {
		projects.display(projects.projects[x].name, projects.projects[x].date);
	}
};
projects.displayRun();

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedWork = HTMLheaderRole.replace('%data%', bio.role);
var formattedMobile = HTMLmobile.replace('%data%', bio.contactInfo[0]);
var formattedEmail = HTMLemail.replace('%data%', bio.contactInfo[1]);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contactInfo[2]);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedSchool = HTMLschoolName.replace("%data%", school[0].name);


$("#main").append([internationalizeButton]);
$("#header").prepend([formattedName]);
$("#header").append([formattedRole]);
$("#header").append([formattedWelcome]);
$("#footerContacts").append([formattedMobile]);
$("#footerContacts").append([formattedEmail]);
$("#footerContacts").append([formattedTwitter]);
$("#header").append([formattedBiopic]);
$("#education").append([HTMLschoolStart]);
$("#education").append([formattedSchool]);
//$("#mapDiv").append([googleMap]);


if (bio.skills.length > 0) {
	$("#header").append([HTMLskillsStart]);
	$("#header").append([formattedSkills]);
}


school.displayWork = function() {
	for (var x in work) {
		$("#workExperience").append([HTMLworkStart]);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[x].employer);
		$("#workExperience").append([formattedWorkEmployer]);

		var formattedWorkPosition = HTMLworkTitle.replace("%data%", work[x].position);
		$("#workExperience").append([formattedWorkPosition]);

		var formattedWorkCity = HTMLworkDescription.replace("%data%", work[x].city);
		$("#workExperience").append([formattedWorkCity]);
	}
};

school.displayWork();

