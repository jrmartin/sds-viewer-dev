export const type_key = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";


export const rdfTypes = {
    "Ontology": {
        "image": "./images/dataset.svg",
        "key": "Ontology",
        "properties": []
    },
    "Award": {
        "image": "./images/dataset.svg",
        "key": "Award",
        "properties": []
    },
    "Collection": {
        "image": "./images/dataset.svg",
        "key": "Collection",
        "properties": []
    },
    "Dataset": {
        "image": "./images/graph/database.svg",
        "key": "Dataset",
        "properties": []
    },
    "File": {
        "image": "./images/graph/database.svg",
        "key": "File",
        "properties": []
    },
    "Subject": {
        "image": "./images/graph/folder.svg",
        "key": "Subject",
        "properties": [
            {
                "type": "TEMP",
                "key": "hasFolderAboutIt",
                "property": "hasFolderAboutIt",
                "label": "Folder that contains collection and files about the subject"
            },
            {
                "type": "TEMP",
                "key": "localId",
                "property": "identifier",
                "label": "Unique instance identifier"
            },
    ]
    },
    "Sample": {
        "image": "./images/dataset.svg",
        "key": "Sample",
        "properties": [
            {
                "type": "TEMP",
                "key": "hasFolderAboutIt",
                "property": "hasFolderAboutIt",
                "label": "Folder that contains collection and files about the sample"
            },
            {
                "type": "TEMP",
                "key": "wasDerivedFromSubject",
                "property": "derivedFrom",
                "label": "Derived from the subject"
            },
            {
                "type": "TEMP",
                "key": "localId",
                "property": "identifier",
                "label": "Unique instance identifier"
            }
        ]
    },
    "Person": {
        "image": "./images/dataset.svg",
        "key": "Person",
        "properties": []
    },
    "Protocol": {
        "image": "./images/dataset.svg",
        "key": "Protocol",
        "properties": []
    },
    "Unknown": {
        "image": "./images/graph/database.svg",
        "key": "Unknown",
        "properties": []
    }
};


export const typesModel = {
    "NamedIndividual": {
        ORCID: {
            "type": "Person"
        },
        awards: {
            "type": "Award"
        },
        collection: {
            "type": "Collection"
        },
        contributor: {
            "type": "Person"
        },
        dataset: {
            "type": "Dataset"
        },
        sample: {
            "type": "Sample"
        },
        subject: {
            "type": "Subject",
        }
    },
    "sparc": {
        Protocol: {
            "type": "Protocol",
            "length": 999
        },
    },
    "ontology": {
        "type": "Ontology",
        "length": 999
    },
    "unknown": {
        "type": "Unknown",
        "length": 0
    }
};
