const { Generator } = require('@batterii/yeoman-helpers');
const decamelize = require('decamelize');
const { validateName } = require('./utils');

class ClassGenerator extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.optionPrompt({
			type: 'input',
			name: 'name',
			alias: 'n',
			description: 'Name of the class',
			message: 'Enter the class name.',
			validate: validateName,
		});
	}

	addClass() {
		// Get the class name from the options.
		const { name } = this.options;

		// Create the module name by decamelizing the class name.
		const moduleName = decamelize(name, '-');

		// Create the new class file in the lib directory.
		this.copyTemplate('class.ts', `lib/${moduleName}.ts`);

		// Create the new test file in the unit test directory.
		this.copyTemplate(
			'test.ts',
			`test/unit/${moduleName}.ts`,
			{ name, moduleName },
		);
	}
}

module.exports = ClassGenerator;
