module.exports = [
    {
        type: 'record',
        path: ['workspace', 'members', 1],
        data: 'src/bootstrap'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 2],
        data: 'src/rustc'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 3],
        data: 'src/libstd'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 4],
        data: 'src/libtest'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 5],
        data: 'src/librustc_codegen_llvm'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 6],
        data: 'src/tools/cargotest'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 7],
        data: 'src/tools/clippy'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 8],
        data: 'src/tools/compiletest'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 9],
        data: 'src/tools/error_index_generator'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 10],
        data: 'src/tools/linkchecker'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 11],
        data: 'src/tools/rustbook'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 12],
        data: 'src/tools/unstable-book-gen'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 13],
        data: 'src/tools/tidy'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 14],
        data: 'src/tools/build-manifest'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 15],
        data: 'src/tools/remote-test-client'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 16],
        data: 'src/tools/remote-test-server'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 17],
        data: 'src/tools/rust-installer'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 18],
        data: 'src/tools/cargo'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 19],
        data: 'src/tools/rustdoc'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 20],
        data: 'src/tools/rls'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 21],
        data: 'src/tools/rustfmt'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 22],
        data: 'src/tools/miri'
    },
    {
        type: 'record',
        path: ['workspace', 'members', 23],
        data: 'src/tools/rustdoc-themes'
    },
    {
        type: 'record',
        path: ['workspace', 'exclude', 1],
        data: 'build'
    },
    {
        type: 'record',
        path: ['workspace', 'exclude', 2],
        data: 'obj'
    },
    {
        type: 'record',
        path: ['profile', 'release', 'opt-level'],
        data: 2
    },
    {
        type: 'record',
        path: ['profile', 'bench', 'opt-level'],
        data: 2
    },
    {
        type: 'record',
        path: ['profile', 'dev', 'debug'],
        data: false
    },
    {
        type: 'record',
        path: ['profile', 'dev', 'debug-assertions'],
        data: false
    },
    {
        type: 'record',
        path: ['profile', 'test', 'debug'],
        data: false
    },
    {
        type: 'record',
        path: ['profile', 'test', 'debug-assertions'],
        data: false
    },
    {
        type: 'record',
        path: ['patch', 'https://github.com/rust-lang/cargo', 'cargo', 'path'],
        data: 'src/tools/cargo'
    },
    {
        type: 'record',
        path: ['patch', 'crates-io', 'rustfmt-nightly', 'path'],
        data: 'src/tools/rustfmt'
    },
    {
        type: 'record',
        path: ['patch', 'crates-io', 'rustc-workspace-hack', 'path'],
        data: 'src/tools/rustc-workspace-hack'
    },
    {
        type: 'record',
        path: ['patch', 'crates-io', 'rustc-std-workspace-core', 'path'],
        data: 'src/tools/rustc-std-workspace-core'
    },
    {
        type: 'record',
        path: ['patch', 'crates-io', 'rustc-std-workspace-alloc', 'path'],
        data: 'src/tools/rustc-std-workspace-alloc'
    },
    {
        type: 'record',
        path: ['patch', 'https://github.com/rust-lang/rust-clippy', 'clippy_lints', 'path'],
        data: 'src/tools/clippy/clippy_lints'
    }
];