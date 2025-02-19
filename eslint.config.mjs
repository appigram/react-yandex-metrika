import globals from 'globals';
import babelParser from '@babel/eslint-parser';

export default [{
    languageOptions: {
        globals: {
            ...globals.node,
        },

        parser: babelParser,
        ecmaVersion: 11,
        sourceType: 'module',

        parserOptions: {
            requireConfigFile: false,
        },
    },

    rules: {
        curly: [2],

        'keyword-spacing': [2, {
            before: true,
            after: true,
        }],

        'no-with': 2,
        'brace-style': [2, '1tbs'],

        'space-unary-ops': [2, {
            words: true,
            nonwords: false,
        }],

        'space-infix-ops': 2,
        'one-var': [2, 'never'],
        'space-in-parens': [2, 'never'],
        'no-empty': 2,
        'wrap-iife': [2, 'any'],

        'comma-spacing': [2, {
            before: false,
            after: true,
        }],

        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
        }],

        'space-before-blocks': [2, 'always'],
        'comma-style': [2, 'last'],
        quotes: [2, 'single', 'avoid-escape'],
        'no-multi-str': 2,
        yoda: [2, 'never'],
        'dot-notation': 2,

        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
        }],

        'quote-props': [2, 'as-needed'],
        'max-len': [2, 120, 4],
        'spaced-comment': [2, 'always'],
        'eol-last': 2,

        'no-multiple-empty-lines': [2, {
            max: 1,
        }],

        'no-mixed-spaces-and-tabs': 2,
        'no-trailing-spaces': 2,
        indent: [2, 4],
        'linebreak-style': [2, 'unix'],
        semi: [2, 'always'],
        camelcase: 0,
    },
}];
