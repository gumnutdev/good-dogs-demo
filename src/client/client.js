// Client-side JavaScript entry point
console.log('Client-side JavaScript loaded'); 

import { connectToGumnutDoc, buildTestToken, useNode } from 'gumnut-v0-api';
import 'gumnut-v0-api/dom';

// console.log("Creating new AbortController");
// const controller = new AbortController();

var gumnut;

try {
    const token = buildTestToken('bandit-h', {
        name: 'Bandit',
        email: 'bandit.h@gumnut.dev'
    });

    const doc = connectToGumnutDoc({docId: "good-dogs", getToken: () => token}).doc
    await doc.ready;
    console.log(`Ready to edit "${doc.docId}" with Gumnut.dev`);

    const dogNameNode = doc.forNode('dogName')
    document.querySelectorAll('[name="dogName"]').forEach(element => {
        element.node = dogNameNode;
    });

    const descriptionNode = doc.forNode('description')
    document.querySelectorAll('[name="description"]').forEach(element => {
        element.node = descriptionNode;
    });

    const floppyEarsNode = doc.forNode('floppyEars')
    document.getElementById('floppyEars').node = floppyEarsNode;

    const boopableSnootNode = doc.forNode('boopableSnoot')
    document.getElementById('boopableSnoot').node = boopableSnootNode;

    const toeBeansNode = doc.forNode('toeBeans')
    document.getElementById('toeBeans').node = toeBeansNode;

    const goodDogRangeNode = doc.forNode('goodDogRange')
    document.getElementById('goodDogRange').node = goodDogRangeNode;

    document.getElementById('connection-status').gumnutApi = gumnut;

    document.getElementById('save').addEventListener('click', () => {
        doc.actions.commit(async (changes) => { })
        console.log('Document snapshot created'); 
    });

} catch (error) {
    console.error("Error connecting to Gumnut", error);
}