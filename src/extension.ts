// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


function createTerminal() {
	let terminal = vscode.window.activeTerminal;
	terminal = vscode.window.activeTerminal;
	if(terminal === undefined) {
		terminal = vscode.window.createTerminal();
		terminal.show();
	}
	if(terminal.name !== "python") {
		terminal.sendText('ipython --pylab');	
	}
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "ispy" is now active!');
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json


	let createipythonterminal = vscode.commands.registerCommand('ispy.createipythonterminal', () => {
		createTerminal();
	});

	let runfile = vscode.commands.registerCommand('ispy.execfile', () => {
		createTerminal();
		let terminal = vscode.window.activeTerminal;
		const editor = vscode.window.activeTextEditor;
		if (editor && terminal) {
			if(editor.document.isDirty) {
				editor.document.save();
			}
			terminal.sendText(`%run -i ${editor.document.fileName}\r\n`);
		} else {
			vscode.window.showWarningMessage('No editor available');
		}
	});

	let runselected = vscode.commands.registerCommand('ispy.execselected', () => {
		createTerminal();
		let terminal = vscode.window.activeTerminal;
		const editor = vscode.window.activeTextEditor;
		if (editor && terminal) {
			let text = editor.document.getText(editor.selection);
			if(text) {
				terminal.sendText(text);
			} else {
				terminal.sendText(editor.document.lineAt(editor.selection.active.line).text.trimLeft());
			}
		} else {
			vscode.window.showWarningMessage('Python Editor Not Active');
		}
	});

	context.subscriptions.push(createipythonterminal);
	context.subscriptions.push(runfile);
	context.subscriptions.push(runselected);
}

// this method is called when your extension is deactivated
export function deactivate() {}
