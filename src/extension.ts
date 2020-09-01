import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const items: vscode.NotebookCellStatusBarItem[] = [];

	context.subscriptions.push(vscode.commands.registerCommand('cell-statusbar-example.addStatusbarItem', () => {
		const cell = vscode.notebook.activeNotebookEditor?.document.cells[items.length];
		if (cell) {
			const item = vscode.notebook.createCellStatusBarItem(cell, vscode.NotebookCellStatusBarAlignment.Right);
			items.push(item);
			item.text = 'Hello, Notebook!';
			item.command = 'cell-statusbar-example.statusbarHello';
			item.show();
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('cell-statusbar-example.removeStatusbarItem', () => {
		const removed = items.pop();
		if (removed) {
			removed.dispose();
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('cell-statusbar-example.statusbarHello', (cell: vscode.NotebookCell) => {
		vscode.window.showInformationMessage('Hello from cell: ' + cell.uri);
	}));
}

export function deactivate() {}
