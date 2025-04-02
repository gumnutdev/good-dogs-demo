// Client-side JavaScript entry point
console.log('Client-side JavaScript loaded'); 

import { connectToGumnut, buildTestToken } from 'gumnut-v0-api';
import 'gumnut-v0-api/dom';

console.log("Creating new AbortController");
const controller = new AbortController();

var gumnut;

try {
    gumnut = connectToGumnut(controller.signal, {
        projectId: 'good-dogs',
        localDevKey: '_DO_NOT_USE_IN_PROD_UWi5Yh2QJntqDwZlTToekA',
        host: "v0-collab.dev.gumnut.dev",
    });

    const token = buildTestToken('bandit-h', {
        name: 'Bandit',
        email: 'bandit.h@gumnut.dev'
    });
    console.log("Built token", token);
    
    gumnut.provideToken(token);

    const doc = gumnut.join(controller.signal, 'Spot');
    await doc.ready;
    console.log("Document ready", doc);

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

    function saveDocument() {
        doc.snapshot();
        console.log('Document snapshot created');
    }

} catch (error) {
    console.error("Error connecting to Gumnut", error);
}