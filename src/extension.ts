// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "ispy" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let run = vscode.commands.registerCommand('ispy.run', () => {
		const terminal = vscode.window.activeTerminal;
		const editor = vscode.window.activeTextEditor;
		if (editor !== undefined) {
			const filename = editor.document.fileName;
			if(terminal !== undefined && editor !== undefined) {
				if(editor.document.isDirty) {
					editor.document.save();
				}	
				terminal.sendText(`%run -i ${filename}`);
			} else {
				vscode.window.showErrorMessage('No terminal available');
			}
		} else {
			vscode.window.showErrorMessage('No editor available');
		}
	});
	let start = vscode.commands.registerCommand('ispy.start', () => {
		const terminal = vscode.window.activeTerminal;
		if(terminal !== undefined) {
			terminal.sendText('ipython --pylab');
		}
	});

	context.subscriptions.push(run);
	context.subscriptions.push(start);
}

// this method is called when your extension is deactivated
export function deactivate() {}
