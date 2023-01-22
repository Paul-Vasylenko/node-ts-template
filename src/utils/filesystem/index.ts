import environment from "environment";
import LocalFileSystem from "./local";
import { FS } from "./types";

function getFileSystem() {
    switch(environment.FS){
        case FS.LOCAL:
            return LocalFileSystem
        case FS.S3:
            // Add if using
        default:
            return LocalFileSystem
    }
}

const fs = getFileSystem();
export default fs;



