const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'Tittle',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Give a quick description of the project',
            name: 'Description',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'list',
            name: 'licenses',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            message: 'Choose a license for this project',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},

        },
        {
            type: 'input',
            message: 'How do you install the application?',
            name: 'Instalation',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Intructions to follow to use application',
            name: 'intructions',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Credit to Anyone?',
            name: 'Credits',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Github Username',
            name: 'Github',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
        {
            type: 'input',
            message: 'Email',
            name: 'Email',
            validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
        },
    ]
).then(({
    Tittle,
    Decription,
    licenses,
    Instalation,
    instructions,
    Credits,
    Github,
    linkdedin,
    Email,
    
})=>{
const Template = `# ${Tittle}

* [Description](#Description)
* [licenses](#licenses)
* [Instalation](#Instalation)
* [instruction](#instruction)
* [Credits](#Credits)
# Description
${Decription}
## Licenses
${licenses}
###Instalation
${Instalation}
####instruction
${instructions}
## Credits 
${Credits}

# Contact
* Github :${Github}
* linkdedin :${linkdedin}
* Email :${Email}`

createNewFile(Tittle,Template)
}
);
function createNewFile(fileName,data) {
    fs.writeFile(`,/${fileName.toLowerCase().split(' ').join(' ')}.md`,data,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Your README file has been created successfully');
    })
}