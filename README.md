# Contacts App
[![Build Status](https://travis-ci.org/justin-loyola/contacts.svg?branch=master)](https://travis-ci.org/justin-loyola/contacts)

Hosted at [http://justin-loyola.github.io/contacts/](http://justin-loyola.github.io/contacts/)

#Development

1. Install dependencies: ```npm install```
2. Run the build: ```npm run build```

Tests can be run with ```npm test```

#Features
* Flexbox based layout
* Unit test scaffolding and coverage reporter
* Low number of dependencies (angular, x-editable, and lodash)
* Custom Mac OS X style dropdown menu, search bar, list interface, and buttons
* Travis CI integration
* Modular components for easy-reuse

#Design
This project reflects an attempt to design toward interfaces where ever possible.
The object model is patterned after a recursive composite design pattern.

The Contacts object is the top level object which is composed of a Contacts List object and Contacts Edit Pane object.
The Contacts List object is composed of Contact Person objects. The Contact Edit Pane object is composed of one Contact Person object.
The Contact Person object is composed of a collection of Contact Field objects.

All of the objects communicate with each other using Angular best practices -- following a typical MVVM design pattern. Controllers are intentionally
thin objects that delegate to service layer objects. Service objects manipulate the underlying models produced by factories.
