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
                        loadList: $('#load-list')
                    };

    const action = {
                        //main action functions

                        clearText: () => {
                            element.textArea.val('').focus();
                        },

                        loadText: () => {
                            //this is temporary, will load up a div and list the names saved after
                            title = prompt('Enter a name to load');
                            document.title = title;
                            element.textArea.val(localStorage.getItem(SAVE_PREFIX + title));
                            element.textArea.focus();
                        },

                        saveText: () => {
                            localStorage.setItem(SAVE_PREFIX + title, element.textArea.val());
                            element.textArea.focus();
                        },

                        saveAsText: () => {
                            title = prompt('Enter a name to save as');
                            document.title = title;
                            action.saveText();
                        },

                        //helper functions

                    };


    //clear text with NEW button
    element.newButton.on('click', () => {
        action.clearText();
    });

    //load button
    element.loadButton.on('click', () => {
        action.loadText();
    });

    //'save' button
    element.saveButton.on('click', () => {
        action.saveText();
    });

    //'save as' button
    element.saveAsButton.on('click', () => {
        action.saveAsText();
    });






});