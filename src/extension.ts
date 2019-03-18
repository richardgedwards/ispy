// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "ispy" is now active!');
	// let terminal = vscode.window.activeTerminal;
	// if(terminal === undefined) {
	// 	terminal = vscode.window.createTerminal();
	// }
	// terminal.sendText('ipython --pylab')	

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let slected = vscode.commands.registerCommand('ispy.selected', () => {
		let terminal = vscode.window.activeTerminal;
		const editor = vscode.window.activeTextEditor;
		if (editor !== undefined) {
			if(terminal !== undefined) {
				terminal.show();
				if(editor.document.isDirty) {
					editor.document.save();
				}	
				terminal.sendText(`%run -i ${editor.document.fileName}`);
			} else {
				vscode.window.showWarningMessage('No terminal available');
			}
		} else {
			vscode.window.showWarningMessage('No editor available');
		}
	});


	let run = vscode.commands.registerCommand('ispy.run', () => {
		let terminal = vscode.window.activeTerminal;
		const editor = vscode.window.activeTextEditor;
		if (editor !== undefined) {
			if(terminal !== undefined) {
				terminal.show()
				if(editor.document.isDirty) {
					editor.document.save();
				}	
				terminal.sendText(`%run -i ${editor.document.fileName}\n`);
			} else {
				vscode.window.showWarningMessage('No terminal available');
			}
		} else {
			vscode.window.showWarningMessage('No editor available');
		}
	});

	let start = vscode.commands.registerCommand('ispy.start', () => {
		let terminal = vscode.window.activeTerminal;
		terminal = vscode.window.activeTerminal;
		if(terminal === undefined) {
			terminal = vscode.window.createTerminal();
		}
		terminal.sendText('ipython --pylab');	
	});

	context.subscriptions.push(run);
	context.subscriptions.push(start);
}

// this method is called when your extension is deactivated
export function deactivate() {}
