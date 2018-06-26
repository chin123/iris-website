$(function() {
	$.scrollify({
		section:".panel",
		interstitialSection:".footer",
		before:function(i, panels) {
			var ref = panels[i].attr("data-section-name");

			$(".pagination .active").removeClass("active");

			$(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
		},
		afterRender:function() {
			var pagination = "<ul class=\"pagination\">";
			var activeClass = "";
			$(".panel").each(function(i) {
					activeClass = "";
					if(i === 0) {
						activeClass = "active";
					}
					pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
			});

			pagination += "</ul>";

			$(".home").append(pagination);

			$(".pagination a").on("click",$.scrollify.move);
		}
	});
});

new WOW().init();
var ids = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth"];
rules = ["<p style='font-size:1em !important;'>\
	<u>Time:</u> 9:00-2:30 \
	<u>Participation:</u> 3 members per team \
	<u>Eligibility:</u> 9-12 <br>\
	<u>Rules:</u> \
	This event requires broad knowledge of the sciences,\
	ranging across biology, chemistry and physics, as well as\
	aspects of literature and science fiction.\
	More than textbook knowledge, the treasure hunt\
	requires the ability to deduce, connect, and apply\
	information. Thinking outside the box is of the essence.\
	The use/possession of phones or other gadgets during\
	this event is prohibited. A watch is allowed, and\
	recommended.</p>",

	"<p style='font-size:0.9em !important;'><u>Time:</u> 9:00-2:30 <u>Participation:</u> 2 members per team <u>Eligibility:</u> 11-12 <br><u>Round 1</u>:The teams will be given a list of diseases with relevant study material by July 5th based on which a written test will be conducted on the day of the event. The written test will contain 50 questions related to the diseases mentioned which is to be attempted in 30 minutes based on which 4 teams will be selected to qualify onto the next round.<br> <u>Round 2</u>: After the teams have been selected they will be given extra study material with which they will have approx. 1.5 hours to prepare for the next round. In the final round the teams will be given medical case studies in which they will have to identify the misdiagnosis made and come up with the correct diagnosis for the illness.The cases will be related to the study material given beforehand andbetween the two rounds.<br><u>Additional Rules:</u>No access to phones/laptops/internet in any form will be allowed.Teams will be judged based on their performance in both the rounds.</p>",

	"<p style='fony-size:1em !important'>\
	<u>Time:</u> 9.00 am - 2.30 pm \
	<u>Participation:</u> 15 TEAMS (Up to 2 per school), \
	2-4 members each. \
	<u>Eligibility Grades:</u> 9-12 \
	<u> No. of Rounds:</u> 2\
	<br>\
	Each team will be required to assemble and code a black line following robot. Each round will be an elimination round. The robots which complete the track in the least time will proceed to the next round.<br>\
	<u>Rules:</u><br>\
	No visual coding softwares to be used<br>\
	Robots have to follow a black line<br>\
	Robots cannot be remote controlled<br>\
	The course may contain loops, ramps, intersecting and broken lines<br>\
	Lego Mindstorm kits cannot be used<br>\
	Robot dimensions - 20 cm x 20 cm (maximum)<br>\
	Internet will be provided but some sites will be restricted<br>\
	Participants have to bring their own laptops, sensors, wires and other materials required for their robot<br>\
	",

	"<p style='fony-size:1em !important'> <u>No.of participants:</u> 5 members(1 team per school). \
	<u>First 6 schools to register can participate.</u>\
	<u>Timings:</u> 9am to 2 pm (Teams will have to book their slots at the registration desk on the day of the\
	fest. Each slot is 25 minutes.)<br>\
	Participants are placed in an escape room scenario where they must find a way to escape\
	from a crashing spacecraft.Participants &#39; abilities to apply math and physics concepts are put\
	to a test with 5 challenging questions.Each question is based on any topic in math and\
	physics and / or their application in architecture.Each answer reveals one character of a\
	keycode which unlocks the door of the spacecraft.Teams will be judged on their accuracy\
	and time of completion.</p>",
	
	"<p style='font-size: 1em !important;'>Oops</p>",
	
	"<p style='font-size: 1em !important;'><u>Grades Eligible: </u> 9-12 \
	<u>Number of Participants:</u> Groups of three \
	<u>Number of Rounds:</u> 3 \
	<u>Timing:</u> 9:00am – 1:00pm <br>\
	Qualifiers: (Written Round) \
	Participants will have to answer 20 questions worth one mark including MCQs and subjective questions.\
	8 teams move to semi-finals.<br>\
	Semi-finals:<br>\
	Round 1: \
	Qualified teams will have to answer 4 questions each- organic, inorganic<br>\
	Round 2: \
	Participants will have to answer questions based on a theme that they will have to identify. \
	Four teams are eliminated at the end of this round.<br>\
	Finals:<br>\
	Round 1: \
	Participants will have to answer three rounds of questions based on several categories.<br>\
	Round 2:Surprise Round, \
	Rules will be revealed on the spot.<br>\
	Round 3: \
	A team can bet on another team or on themselves. \
	Rules for this round will be given to the participants.\
	</p>",
	
	"<p style='font-size:0.9em !important;'><u>Theme:</u> The Science of Fashion \
	<u>Time:</u> 12 pm to 3pm\
	<u>Number of Participants:</u> 6 models +2 designers \
	<u>Number of rounds:</u> 3<br>\
	Round 1 (Elimination): \
	Teams are required to send in their designs of the entire line by 10th July.\
	Designs have to incorporate elements from one science based company and one fashion brand\
	A minimum of 2 designs are required per category for the following-\
	Jackets/ Pants/ Skirts/ Shoes/ Tops/ Dresses/ Shirts/ Jewellery/ Accessories (hats, bags, scarves)<br>\
	Round 2: \
	Categories will be unlocked on the basis of a quiz. The quiz will require participants to have a basic understanding of scientific concepts.\
	Only the unlocked components of the outfits will be judged at the final show.\
	Any 2 team members can participate in this round.<br>\
	Round 3: \
	Participants have to display their complete line in the final show. However, the design of only the unlocked components from round 2 will be judged.\
	Each team is required to have a 1 min narration. \
	The time limit of the performance is 8 min.<br>\
	General Rules:\
	All designs should be original. The line needs to be region and season specific. \
	Props can be used however hazardous materials will not be permitted. \
	Participants will not be allowed to use electronic gadgets or the Internet. \
	All teams must wear appropriate clothing. \
	Each team is required to send the audio track to npsk.iris2018@gmail.com by 15th July. A copy of the same must be brought on the day of the event. \
	Teams that make it to the second round will be provided with the ramp specifications by 12th July.\
	</p>",
	
	"<p style='font-size:1em !important'><u>Grades Eligible:</u> 9-12<br>\
	<u>Number of Participants:</u> 5 members per team<br>\
	<u>Number of Rounds:</u> 3 surprise rounds<br>\
	<u>Timings:</u> 9:00am-11:00am</p>",
	
	"<p style='font-size:1em !important'><u>Grades Eligible:</u> 9-12<br>\
	<u>Number of Participants:</u> Groups of two<br>\
	<u>Number of Rounds:</u> 2<br>\
	<u>Event Details:</u><br>\
	<u>Round 1:</u><br>\
	The team will have one hour to write a poem of 32-48\
	lines based on a given topic.<br>\
	<u>Round 2:</u><br> The 10 best poems will be selected from the first round.<br>\
	Teams will have to recite the written poem.<br>\
	Teams are allowed to send both or one participants for this\
	round.<br>\
	<u>Additional Rules:</u><br>\
	Use of a dictionary/thesaurus or any digital item will not be\
	permitted.<br>\
	<u>Timings:</u> 9:00am – 2:00pm</p>",
	
	"<p style='font-size:0.9em !important'>\
	<u>TIME:</u> 9.00 am – 2.00 pm \
	<u>PARTICIPATION:</u> 10 TEAMS (1 per school), \
	2 members each. \
	<u>ELIGIBILITY:</u> GRADES 9-12 \
	<u>NO. OF ROUNDS:</u> 1<br>\
	This is a journalism based event that consists of 3 parts. Teams will be required to plan and create content to cover the events at IRIS. <br>\
	Live tweeting: \
	Teams must split up and try to cover as many events at IRIS as they can, reporting on any occurrences that would require the attention of the public. Participants must take special note to tweet every 15 minutes in order to stay relevant and to ensure that they get exclusive coverage of the various events.\
	<br><u>Front Page:</u> \
	Each team will be required to create the front page of their newspaper that should cover important occurrences at the fest accompanied with articles and pictures.\
	<br><u>Special Assignment:</u> \
	Each team will be instructed to carry a video camera. Should there be any occurrence that requires immediate reporting, the incident must be recorded and relevant information must be included in only 1 minute of footage.\
	<br><u>RULES:</u>\
	Teams must carry all required equipment including a laptop, a video camera, phones with data connection and their respective chargers.\
	The laptop should have a basic video editing software and a software to design a softcopy of the newspaper front page (MS Word allowed) Softwares must be installed beforehand.\
	There are no individual time limits for any aspects of the event. The video and front page can be submitted any time before 2:00pm and teams will tweet throughout the day.\
	</p>",
	
	"<p style='font-size:1em !important'><u>Timings:</u> 9 am to 11am\
	<br><u>No. of rounds:</u> 3 rounds\
	<br><u>No. of participants:</u> 2 members (1 team per school)\
	<br><u>ROUND 1:</u> \
	The first round is a Literature Quiz and requires participants to have a fair knowledge of the subject.\
	<br><u>ROUND 2:</u>\
	In this round, one team will be given a prompt, using which they must build a story. Each team will take turns in elaborating the same story. The objective of every team is to end the story so the following team cannot continue.\
	<br><u>ROUND 3:</u>\
	The final round is a tag team story writing challenge. Teams will be given a character and a genre. A member from the team will be given 5 minutes to build the story after which they must switch with their partner.\
	<br>Each round in the event is an elimination round.\
	</p>",
	
	"<p style='font-size:1em !important'><u>Time:</u> 9:00-2:30<br> \
	<u>Participation:</u> 2 members per team<br> \
	<u>Eligibility:</u> 9-12<br> \
	<u>No. of rounds</u>: 2 <br>\
	<u>Round 1: </u>\
	Teams will be given a broad topic (Example – Education) 2 weeks before\
	the event. The teams will have to come up with an idea on the topic given\
	to them. All the teams will be given the same topic. The teams must come\
	up with a viable product along with the go to marketing strategy.\
	<br><u>Round 2:</u> \
	This is a surprise round; details will be revealed on the day of the event.\
	The teams that qualified from round 1 (half of the total number of teams\
	taking part) will participate in this round.\
	<br><u>Rules:</u> \
	For the first round, the team will be given be given 5 minutes to\
	present and 10 minutes for questions from the panel of judges.\
	No other teams will be allowed to observe the happenings of other\
	teams.\
	The teams will be judged based on the viability of the product,\
	presentation as well as the Go To Market strategy.\
	Teams must give a SWOT analysis for the product as well.\
	Teams will not be required to present a valuation on the company\
	and sell a certain equity.</p>",
	
	"<p style='font-size:1em !important'><u>Time:</u> 9:00-1:00<br>\
	<u>Participation:</u>  MAX 16 teams, 2 members per team<br>\
	<u>Eligibility:</u> 10-12<br>\
	<u>Rules:</u> <br>\
	Teams face off in classic knockout format.\
	<br>Schools are required to send maximum two participants to represent their team. They are allowed to carry their phones or laptops.\
	<br>In one such round, teams will be presented a corporate law case.\
	<br>Each round will be a total of 40 minutes.\
	<br>Case details will be displayed on a projector, teams must make note of whatever they deem necessary. They are allowed to use their phones/laptops to help them legally build their case.\
	<br>They are given 20 minutes to do so and towards the end of the 20 minutes they are notified of whether they are plaintiff or defendant.\
	<br>The format is as follows-\
	<br>Each speaker has 3 minutes, in which the first and last minute are safe time, where he/she cannot be questioned by the opposition. Between the first and last minute, the opposition can question the speaker.\
	<br>Speaker is allowed to respond or ignore the question, points will be awarded on how they question or answer.\
	<br>Order of speaking is, plaintiff opening followed by defendant opening and then plaintiff closing and defendant closing.\
	This is concluded with a round of questioning by the judge, where both sides will be scored on how they respond.\
	</p>"];

var oldhtml = [];

var showinfo = function (ind) {
	var inittext = "<div class=\"mainpg\"><div class=\"details rules wow fadeIn parallax-window\" data-parallax=\"scroll\" data-image-src=\"background.jpg\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">";
	var inittextold = "<div class=\"mainpg\"><div class=\"details wow fadeIn parallax-window\" data-parallax=\"scroll\" data-image-src=\"background.jpg\" data-wow-duration=\"1s\" data-wow-delay=\"0.5s\">";

	var endtext = '</div></div>'

	var buttontext = '<div class="button r-m" onclick="showold(' + ind + ')"><span class="button__mask"></span><span class="button__text" style="font-size: 1em">Back</span><span class="button__text button__text--bis" style="font-size: 1em">Back</span></div>';

	oldhtml[ind - 1] = $("*[data-section-name=\"" + ids[ind] + "\"]").html();

	$("*[data-section-name=\"" + ids[ind] + "\"]").html("");
	$("*[data-section-name=\"" + ids[ind] + "\"]").html(inittext + rules[ind - 1] + buttontext + endtext);
	return false;
}

var showold = function (ind) {
	$("*[data-section-name=\"" + ids[ind] + "\"]").html("");
	$("*[data-section-name=\"" + ids[ind] + "\"]").html(oldhtml[ind - 1]);

}