const { Generator } = require('@batterii/yeoman-helpers');
const { assign } = require('lodash');
const decamelize = require('decamelize');

const namePattern = /^[A-Z][A-Za-z0-9]*$/;

function isValidName(name) {
	return namePattern.test(name);
}

class ClassGenerator extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.option('name', {
			description: 'Name of the class',
			type: String,
		});
	}

	async promptForOptions() {
		assign(this.options, await this.prompt([
			{
				when: () => !this.options.name,
				type: 'input',
				name: 'name',
				message: 'Enter the class name',
				validate: isValidName,
			},
		]));
	}

	addClass() {
		const { name } = this.options;

		// Ensure the class name is valid upper camelcase.
		if (!isValidName(name)) this.env.error(`Invalid class name '${name}'`);

		// Decamelize the name to use for filenames.
		const filename = decamelize(name, '-');

		// Create the new class file in the lib directory.
		this.copyTemplate('class.ts', `lib/${filename}.ts`);

		// Create the new test file in the unit test directory.
		this.copyTemplate(
			'test.ts',
			`test/unit/${filename}.ts`,
			{ name, filename },
		);
	}
}

module.exports = ClassGenerator;
