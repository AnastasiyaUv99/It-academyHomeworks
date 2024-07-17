const fse  = require('fs-extra');

fse.ensureDir ("Folder_1");
fse.outputFileSync ("file.txt","Hello");
fse.ensureDir ("Folder_2");
fse.moveSync ("file.txt", "Folder_2/file.txt");
fse.ensureDir ("Folder_3");
fse.copySync ("Folder_2/file.txt","Folder_3/file.txt");
fse.removeSync("file.txt");
fse.removeSync("Folder_2/file.txt")
fse.removeSync("Folder_3/file.txt")
fse.removeSync("Folder_1")
fse.removeSync("Folder_2")
fse.removeSync("Folder_3")