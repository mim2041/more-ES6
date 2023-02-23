class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    provideFeedBack(){
        console.log(`$(this.name) thank you for your feedback`)
    }
}

class Instructor extends TeamMember{
    designation = 'Web Coursr Instructor'
    team= 'web team'
    constructor(name, location){
        super(name,location);
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}

class Developer extends TeamMember{
    designation = 'Web Coursr Instructor'
    team= 'web team'
    constructor(name, location){
        super(name, location);
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
    
}

class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos'
    team= 'Job placement'
    region;
    constructor(name, location){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
    
}

const alia = new Developer('Alia bhatt', 'Dhaka', 'React');
console.log(alia);