const del  = require('del');
const path = require('path');
const glob = require("glob");

const globOptions = {absolute: true};

const bundles          = glob.sync("bundle.*", globOptions);
const indexHtml        = glob.sync("index.html", globOptions);
const manifestJson     = glob.sync("manifest.json", globOptions);
const precacheManifest = glob.sync("precache-manifest.*", globOptions);
const sw               = glob.sync("sw.js", globOptions);

const files = [...bundles, ...indexHtml, ...manifestJson, ...precacheManifest, ...sw];

const deletedPaths = del.sync(files);

console.log('Files and directories that would be deleted:\n', deletedPaths.join('\n'));

