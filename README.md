# @batterii/generator-ts-class
A [yeoman](https://yeoman.io/) generator for creating new classes in Batterii
TypeScript projects.


## Usage
```
  yo @batterii/ts-class [options]

Options:
  -h,   --help           # Print the generator's options and usage
        --skip-cache     # Do not remember prompt answers             Default: false
        --skip-install   # Do not automatically install dependencies  Default: false
        --force-install  # Fail on install dependencies error         Default: false
  -n,   --name           # Name of the class
```

## The Class Name
This generator accepts a `name` option, which will determine the name of the
class it creates. The name must be a valid TypeScript identifier in camelcase,
with the first letter capitalized. If it is not provided, the generator will
prompt the user for it.


## Implementing Your Class
When the generator has finished, two new files will exist:

- `src/lib/${decamelized name}.ts`: Implement your class here.
- `src/lib/${decamelized name}.spec.ts`: Write unit tests for your class here.

The generated unit test file imports your class, as well as the `expect`
function from `chai` for writing assertions. It also imports the entire `sinon`
module, so that you can easily make use of it for spies, stubs, and so on. Its
presence will generate linter warnings if you do not use it, however. Feel free
to remove it in this case.


## Exporting Your Class
If you are working on a library project, and you'd like your class to be
available as part of the library's public API, make sure to export it from
`src/index.ts`. Otherwise, classes created by this generator should be
considered internal to their projects.
