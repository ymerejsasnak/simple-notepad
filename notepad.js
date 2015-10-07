$(function() {
    "use strict";

    const SAVE_PREFIX = 'myjsnotepad-';
    let title = 'Untitled';

    const element = {
                        newButton: $('#new'),
                        loadButton: $('#load'),
                        saveButton: $('#save'),
                        saveAsButton: $('#save-as'),
                        textArea: $('textarea') 
                    };

    const action = {
                        clearText: () => {
                            element.textArea.val('').focus();
                        },

                        save: () => {
                            localStorage.setItem(SAVE_PREFIX + title, element.textArea.val());
                            element.textArea.focus();
                        },

                        saveAs: () => {
                            title = prompt('Enter a name to save as');
                            document.title = title;
                            action.save();
                        },

                    };


    //clear text with NEW button
    element.newButton.on('click', () => {
        action.clearText();
    });

    //'save' button
    element.saveButton.on('click', () => {
        action.save();
    });

    //'save as' button
    element.saveAsButton.on('click', () => {
        action.saveAs();
    });






});