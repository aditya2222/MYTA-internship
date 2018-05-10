// building up the sidenav
var text = "";
var rootnav = {
    "status": 0,
    "data": {
        "childOrderingArray": [0, 1, 2],
        "list": [{
            "isEnabled": true,
            "childOrderingArray": [0, 1],
            "subjectList": [{
                "isEnabled": true,
                "childOrderingArray": [0],
                "subSubjectList": [{
                    "isEnabled": true,
                    "childOrderingArray": [0],
                    "chapterList": [{
                        "isEnabled": true,
                        "childOrderingArray": [],
                        "_id": "5ae7e3efbd32e6000442c24c",
                        "name": "Electric Field",
                        "mappedChapterId": "5ae7e3efbd32e6000442c24b"
                    }],
                    "_id": "5ae7e3d2bd32e6000442c249",
                    "name": "Physics"
                }],
                "_id": "5ae7e3c6bd32e6000442c247",
                "name": "Science"
            }, {
                "isEnabled": true,
                "childOrderingArray": [],
                "subSubjectList": [],
                "_id": "5ae802c8c9dd2b0004bfe691",
                "name": "Social Study"
            }],
            "_id": "5ae7e3bfbd32e6000442c245",
            "name": "Grade 12"
        }, {
            "isEnabled": true,
            "childOrderingArray": [0],
            "subjectList": [{
                "isEnabled": true,
                "childOrderingArray": [0, 1],
                "subSubjectList": [{
                    "isEnabled": true,
                    "childOrderingArray": [],
                    "chapterList": [],
                    "_id": "5ae80d74c9f010000405b86f",
                    "name": "History"
                }, {
                    "isEnabled": true,
                    "childOrderingArray": [0],
                    "chapterList": [{
                        "isEnabled": true,
                        "childOrderingArray": [],
                        "_id": "5ae999c378d1ad0004cc3446",
                        "name": "Development",
                        "mappedChapterId": "5ae999c378d1ad0004cc3445"
                    }],
                    "_id": "5ae9993178d1ad0004cc3443",
                    "name": "Economics"
                }],
                "_id": "5ae80d5cc9f010000405b86d",
                "name": "Social Studies"
            }],
            "_id": "5ae80242c9dd2b0004bfe681",
            "name": "Grade 10"
        }, {
            "isEnabled": true,
            "childOrderingArray": [0],
            "subjectList": [{
                "isEnabled": true,
                "childOrderingArray": [0, 1],
                "subSubjectList": [{
                    "isEnabled": true,
                    "childOrderingArray": [0, 1],
                    "chapterList": [{
                        "isEnabled": true,
                        "childOrderingArray": [],
                        "_id": "5ae80eb6c9f010000405b87f",
                        "name": "French Revolution",
                        "mappedChapterId": "5ae80eb6c9f010000405b87e"
                    }, {
                        "isEnabled": true,
                        "childOrderingArray": [],
                        "_id": "5ae9927778d1ad0004cc3441",
                        "name": "What is democracy ? Why democracy ?",
                        "mappedChapterId": "5ae9927778d1ad0004cc3440"
                    }],
                    "_id": "5ae80ea6c9f010000405b87c",
                    "name": "History"
                }, {
                    "isEnabled": true,
                    "childOrderingArray": [0],
                    "chapterList": [{
                        "isEnabled": true,
                        "childOrderingArray": [],
                        "_id": "5ae82bf39a089f0004ce20fd",
                        "name": "The Story of Village Palampur",
                        "mappedChapterId": "5ae82bf39a089f0004ce20fc"
                    }],
                    "_id": "5ae82bd89a089f0004ce20fa",
                    "name": "Economics"
                }],
                "_id": "5ae80e98c9f010000405b87a",
                "name": "Social Studies"
            }],
            "_id": "5ae802c7c9dd2b0004bfe68f",
            "name": "Grade 9"
        }],
        "_id": "5ae7e37bbd32e6000442c241",
        "__v": 31
    }
};


// root.json parser

for (var i = 0; i <= Object.keys(rootnav.data.list).length; i++) {
    for (var j = 0; i <= 2; i++) {

        if (rootnav.data.list[i].subjectList[j]) {
            text += rootnav.data.list[i].subjectList[j].name + "<br>";
            for (var a = 0; a <= Object.keys(rootnav.data.list).length; a++) {
                if (rootnav.data.list[i].subjectList[j].subSubjectList[a]) {
                    text += "<ul><li>" + rootnav.data.list[i].subjectList[j].subSubjectList[a].name + "</li></ul>";
                    for (var b = 0; b <= Object.keys(rootnav.data.list).length; b++) {
                        if (rootnav.data.list[i].subjectList[j].subSubjectList[a].chapterList[b]) {
                            var newString = rootnav.data.list[i].subjectList[j].subSubjectList[a].chapterList[b].name.replace(/[^A-Z0-9]+/ig, "_");
                            text += "<ul><ul><li><a href='"+newString+".html"+"'>"+rootnav.data.list[i].subjectList[j].subSubjectList[a].chapterList[b].name+"</a></li></ul></ul>";
                        }
                    }
                }

            }
        }


    }

}

document.getElementById("subjects").innerHTML = text;
