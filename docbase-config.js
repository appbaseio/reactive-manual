var docbaseConfig = {
  "method": "github",
  "generic": {
    "baseurl": "",
    "path": ""
  },
  "file": {
    "path": ""
  },
  "github": {
    "user": "appbaseio",
    "repo": "reactive-maps-docs",
    "path": "docs",
    "branch": "master",
    "access_token": "OTAwNDU5MTk4M2NlYzViYzQxNzFlN2E3Yjk1MWQ2ZjhkODRjMTg5Yg=="
  },
  "indexHtml": "./html/main.html",
  "flatdocHtml": "./bower_components/docbase/html/flatdoc.html",
  "default_version": "",
  "manual_override": false,
  "versions" : {
  "v1": [
    {
      "name": "getting-started",
      "label": "Getting Started",
      "files": [
        {
          "name": "start",
          "label": "Quick Start"
        },
        {
          "name": "AppbaseList",
          "label": "AppbaseList Sensor"
        },
        {
          "name": "AppbaseSearch",
          "label": "AppbaseSearch Sensor"
        },
        {
          "name": "AppbaseSlider",
          "label": "AppbaseSlider Sensor"
        },
        {
          "name": "AppbaseMap",
          "label": "AppbaseMap Sensor"
        },
        {
          "name": "Dependency",
          "label": "Dependency"
        }
      ]
    },
    {
      "name": "mapping",
      "label": "mapping",
      "files": [
        {
          "name": "mapping",
          "label": "Mapping"
        }
      ]
    },
    {
      "name": "contribution",
      "label": "Contribution",
      "files": [
        {
          "name": "contribution",
          "label": "contribution"
        }
      ]
    }
  ]
},
  "publish": "github"
}
