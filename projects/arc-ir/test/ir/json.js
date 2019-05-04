module.exports = [
    {
        type: 'record',
        path: ['name'],
        data: '@nyar/arc-ir'
    },
    {
        type: 'record',
        path: ['version'],
        data: '0.2.4'
    },
    {
        type: 'record',
        path: ['main'],
        data: 'dist/index.js'
    },
    {
        type: 'record',
        path: ['license'],
        data: 'MPL-2.0'
    },
    {
        type: 'record',
        path: ['scripts', 'antlr'],
        data: 'antlr4ts -visitor ../../node_modules/@nyar/arc-antlr/ARC.g4 -o ./source/antlr'
    },
    {
        type: 'record',
        path: ['scripts', 'lint'],
        data: 'eslint test/**/*.js --fix'
    },
    {
        type: 'record',
        path: ['scripts', 'ir'],
        data: 'ts-node ./test/arc-ir.ts'
    },
    {
        type: 'record',
        path: ['scripts', 'json'],
        data: 'ts-node ./test/ir-json.ts && yarn lint'
    },
    {
        type: 'record',
        path: ['scripts', 'build'],
        data: 'yarn install && yarn antlr && tsc -b'
    },
    {
        type: 'record',
        path: ['scripts', 'upload'],
        data: 'yarn build && npm publish --access public'
    },
    {
        type: 'record',
        path: ['dependencies', 'antlr4ts'],
        data: '^0.5.0-alpha.3'
    },
    {
        type: 'record',
        path: ['dependencies', 'js-big-decimal'],
        data: '^1.2.1'
    },
    {
        type: 'record',
        path: ['dependencies', 'ramda'],
        data: '^0.26.1'
    },
    {
        type: 'record',
        path: ['devDependencies', '@nyar/arc-antlr'],
        data: '^1.0.22'
    },
    {
        type: 'record',
        path: ['devDependencies', '@types/ramda'],
        data: '^0.26.8'
    },
    {
        type: 'record',
        path: ['devDependencies', 'eslint'],
        data: '^5.16.0'
    },
    {
        type: 'record',
        path: ['devDependencies', 'eslint-plugin-json'],
        data: '^1.4.0'
    }
];