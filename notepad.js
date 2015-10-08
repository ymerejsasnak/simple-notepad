$(function() {
    "use strict";

    const SAVE_PREFIX = 'myjsnotepad-';
    let title = 'Untitled';

    const element = {
                        newButton: $('#new'),
                        loadButton: $('#load'),
                        saveButton: $('#save'),
                        saveAsButton: $('#save-as'),
                        textArea: $('textarea'),
                        loadList: $('ul')
                    };

    const action = {
                        //main action functions

                        clearText: () => {
                            element.textArea.val('').focus();
                        },                        

                        saveText: () => {
                            localStorage.setItem(SAVE_PREFIX + title, element.textArea.val());
                            element.textArea.focus();
                        },

                        saveAsText: () => {
                            title = prompt('Enter a name to save as');//make this my own div so it is nicer??
                            document.title = title;
                            action.saveText();
                        },

                        loadText: (fileName) => {
                            document.title = fileName;
                            element.textArea.val(localStorage.getItem(SAVE_PREFIX + fileName));
                            element.textArea.focus();
                        },

                        showFiles: () => {
                            action.makeList(action.getFileNames());
                        },

                        getFileNames: () => {
                            let fileNames = [];
                            for (var name in localStorage){
                                if (name.substring(0, SAVE_PREFIX.length) === SAVE_PREFIX) {
                                    fileNames.push(name);
                                }
                            }
                            return fileNames;
                        },

                        makeList: (names) => {
                            element.loadList.html(''); //clear list first so as not to keep adding redundantly
                            names.forEach((name) => {
                                element.loadList.append(`<li>${name.substring(SAVE_PREFIX.length)}</li>`);
                            });

                        }

                    };


    //clear text with NEW button
    element.newButton.on('click', () => {
        action.clearText();
    });

    //'save' button
    element.saveButton.on('click', () => {
        action.saveText();
    });

    //'save as' button
    element.saveAsButton.on('click', () => {
        action.saveAsText();
    });

    //load button
    element.loadButton.on('click', () => {
        action.showFiles();
    });

    //attach listener to ul for future li's to load file (can't use fat arrow here because of how 'this' is bound)
    element.loadList.on('click', 'li', function() {
        action.loadText($(this).text());
    });






});