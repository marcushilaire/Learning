#!/bin/bash
handleArgs(){
    while getopts 'ehxuz' OPTION; 
    do case $OPTION in
        e) echo option selected e;;
        h) echo option selected h;;
        x) echo option selected x;;
        u) echo option selected u;;
        z) echo option selected h ;;
        ?) echo "script usage: $(basename $0) [-l] [-h] [-a somevalue]" 
    esac
    done
    shift "$(($OPTIND -1))"
}

handleArgs $@ 
#handleArgs must be called on $@ in order to parse through the argument list
#it ignores all non flagged arguments
#will work with -ehx or -eh -x
