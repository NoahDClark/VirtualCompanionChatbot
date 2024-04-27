// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require('@expo/metro-config');
/*
const defaultconfig = getDefaultConfig(__dirname);
defaultconfig.resolver.assetsExts.push('cjs');
*/
/** @type {import('expo/metro-config').MetroConfig} */
//const config = getDefaultConfig(__dirname);

const config = getDefaultConfig(__dirname);

// Remove all console logs in production...
config.transformer.minifierConfig.compress.drop_console = true;
config.resolver.sourceExts = [...config.resolver.sourceExts, "mjs", "cjs"];


module.exports = config;
