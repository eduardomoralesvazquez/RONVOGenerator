const { writeFileSync } = require('fs');

// const testFolder = 'D:/projects/RONswat4Voice/VO/GenericCivilianFemale_Young_01';
const fs = require('fs').promises;
let vo = [];

document.addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();
    // cleanOutput();
    // writeThis("{");
    if(event.dataTransfer.files.length > 1 ){
        alert("Solo 1 archivo")
    }else{

        readDir(event.dataTransfer.files[0].path, event.dataTransfer.files.name, 1);

    }
});

async function readDir(path, name, clean){
    if(clean)
        vo=[];
    await fs.readdir(path, (err, files)=>{
        
        if(err) console.log("Error fs.readddir in readDir function");
        vo[name] = [];

        for(const content of files){
            
            fs.stat(path+"\\"+content, (err, stats)=>{

                if(err) console.log("Error fs.stat in readDir function");

                if(!stats.isFile()){
                    createFolder('./output/'+content);
                    readDir(path+"\\"+content, content);
                }else{
                    createFile('./output/'+content);
                    vo[name].push(content);
                }
            });

        }
    });
}

async function createFolder(path){
    await fs.mkdir(path, err => {
        if(!err)
            console.log('already exists: '+path);
    });
}

async function createFile(path){

}
document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.path[0].id);
    if(e.path[0].id == "source"){
        
    }else{

    }
});
  
document.addEventListener('dragenter', (event) => {
});
  
document.addEventListener('dragleave', (event) => {
});