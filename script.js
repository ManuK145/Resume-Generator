function addNewWorkExperienceField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workExperienceField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder", "Enter here");

    let workExperienceOb = getElementById("workExperience");
    let workExperienceAddButtonOb=document.getElementById("workExperienceAddButton");    
    workExperienceOb.insertBefore(newNode, workExperienceAddButtonOb);

}

function addNewAcedemicQualificationField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acedemicQualificationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute("placeholder", "Enter here");

    let acedemicQualificationOb = getElementById("acedemicQualification");
    let acedemicQualificationAddButtonOb=document.getElementById("acedemicQualificationAddButton");    
    acedemicQualificationOb.insertBefore(newNode, acedemicQualificationAddButtonOb);

}