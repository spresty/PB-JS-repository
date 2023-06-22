function projectsCreation(input){

    let name = input[0];
    let projectsCount = Number(input[1]);

    let timeToCreate = projectsCount * 3;

    console.log(`The architect ${name} will need ${timeToCreate} hours to complete ${projectsCount} project/s.`);

}

projectsCreation(["George ","4 "])
