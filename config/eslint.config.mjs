import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['node_modules']
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict
]
