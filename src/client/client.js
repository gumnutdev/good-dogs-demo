// Client-side JavaScript entry point
console.log('Client-side JavaScript loaded'); 

import { connectToGumnutDoc, buildTestToken } from 'gumnut-v0-api';
import 'gumnut-v0-api/dom';

const doc = connectToGumnutDoc({
    docId: "good-dogs",
    getToken: token
}).doc

const token = () => buildTestToken('bandit-h', {
    name: 'Bandit',
    email: 'bandit.h@gumnut.dev'
});


await doc.ready;
console.log(`Ready to edit "${doc.docId}" with Gumnut.dev`);

const dogNameNode = doc.forNode('dogName')
document.getElementById('dogName').node = dogNameNode;
document.getElementById('dogNameFocus').node = dogNameNode;

const descriptionNode = doc.forNode('description')
document.getElementById('description').node = descriptionNode;
document.getElementById('descriptionFocus').node = descriptionNode;

const floppyEarsNode = doc.forNode('floppyEars')
document.getElementById('floppyEars').node = floppyEarsNode;

const boopableSnootNode = doc.forNode('boopableSnoot')
document.getElementById('boopableSnoot').node = boopableSnootNode;

const toeBeansNode = doc.forNode('toeBeans')
document.getElementById('toeBeans').node = toeBeansNode;

const goodDogRangeNode = doc.forNode('goodDogRange')
document.getElementById('goodDogRange').node = goodDogRangeNode;

document.getElementById('connection-status').gumnutApi = gumnut;

document.getElementById('save').addEventListener('click', async () => {
    try {
        await doc.actions.commit(async (changes) => {
            console.log('Beep Boop, Saving to Your Database:', changes);
        });

        console.log('Document snapshot created'); 
    } catch (error) {
        console.error("Error saving document", error);
    }
});