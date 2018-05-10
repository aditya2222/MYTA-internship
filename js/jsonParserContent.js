var contentJSON = {"status":0,"data":[{"contentList":[{"isEnabled":true,"_id":"5ae7e869bd32e6000442c25b","ques":"<div>What is the force between two small charged spheres having charges of 2 ×</div><div>10−7 C and 3 × 10−7 C placed 30 cm apart in air?</div>","ans":"<div>Repulsive force of magnitude 6 × 10−3 N</div><div>Charge on the first sphere, q1 = 2 × 10−7 C</div><div>Charge on the second sphere, q2 = 3 × 10−7 C</div><div>Distance between the spheres, r = 30 cm = 0.3 m</div><div>Electrostatic force between the spheres is given by the relation</div><div><br></div><div>Therefore, force</div><div>F =<span style=\"display: inline !important;\">9 × 109 × 2 × 10−7</span></div><div><span style=\"display: inline !important;\">&nbsp; = 6 × 10−3N</span></div><div><br></div><div><br></div><div><br></div><div>Hence, force between the two small charged spheres is 6 × 10−3 N. The</div><div>charges are of same nature. Hence, force between them will be repulsive.</div>","q_type":0},{"isEnabled":true,"_id":"5ae7e8b6bd32e6000442c25d","ques":"<div>When a glass rod is rubbed with a silk cloth, charges appear on both. A similar</div><div>phenomenon is observed with many other pairs of bodies. Explain how this</div><div>observation is consistent with the law of conservation of charge.</div>","ans":"<div>Rubbing produces charges of equal magnitude but of opposite nature on the&nbsp;<span style=\"display: inline !important;\">two bodies because charges are created in pairs. This phenomenon of charging&nbsp;</span><span style=\"display: inline !important;\">is called charging by friction. The net charge on the system of two rubbed&nbsp;</span><span style=\"display: inline !important;\">bodies is zero. This is because equal amount of opposite charges annihilate&nbsp;</span><span style=\"display: inline !important;\">each other. When a glass rod is rubbed with a silk cloth, opposite natured&nbsp;</span><span style=\"display: inline !important;\">charges appear on both the bodies. This phenomenon is in consistence with&nbsp;</span><span style=\"display: inline !important;\">the law of conservation of energy. A similar phenomenon is observed with&nbsp;</span><span style=\"display: inline !important;\">many other pairs of bodies.</span></div>","q_type":2}],"_id":"5ae7e55bbd32e6000442c24e","name":"Electric Field"},{"contentList":[{"isEnabled":true,"_id":"5af19e43762ab10004c9d260","ques":"Give reasons why are ionic crystals hard and brittle.","ans":"Binding energy&nbsp; in ionic crystal ranges between 400 to 4000 kj/mol and its melting point is upto 1500K. Ionic crystal is made of ions bonded to each other by ionic bond which is non directional so they are hard and brittle .","q_type":2}],"_id":"5ae7e57cbd32e6000442c250","name":"Electric Field Lines"}]}

var content = "";

console.log(Object.keys(contentJSON.data).length);
for(var i=0;i<Object.keys(contentJSON.data).length;i++){
for(var j=0;j<Object.keys(contentJSON.data).length-1;j++){
	if(contentJSON.data[i].contentList[j].ques){
		content+=contentJSON.data[i].contentList[j].ques+"<br>"+contentJSON.data[i].contentList[j].ans+"<br><hr style='border: none;height:1px;color:#333;background-color: #333'>";
	}
}

}




document.getElementById('electricFieldContent').innerHTML=content;

// content+=contentJSON.data[i].contentList[j].ques+contentJSON.data[i].contentList[j].ans;