# ispy README

ispy = ipython + vscode

Simple minimalistic extension to work with ipython within vscode.

## Commands

ispy: Run File in Terminal (ctrl+enter):  Executes the active .py file in the currently running ipython terminal.

ispy: Run Selection/Line in Terminal (ctrl+shift+enter):  Executes the active selection or the text on the active line in the ipython terminal.

ispy: Create Ipython Terminal: Convenience function to create and an ipython terminal.  Should rarely be needed.

The extension also contributes key-bindings to open and switch betweent the editor and the terminal by using 'ctrl+`' (ctrl+backtick).  To close the terminal use 'ctrl+j'.

## Description

The only requirement for running a python file or sending selected text to a terminal is that a terminal is active and the name of the terminal is 'python'.  If this is not the case, then the extension tries to open a new terminal (if one is not already active), and/or start ipython if not already running.  If python is already running then you will need to close it and then start ipython manually or simply issue any of the ispy commands.

After ipython is running, simply issue the ispy commands to send the file or selected text to the active terminal.  The user can then continue to work in the ipython terminal interactively, including using all of the %magic commands that ipython offers. Use $lsmagic within ipython terminal to get a list of the magic commands.  

It is possible to have more than one ipython terminal running at a given time.  If you want to run the code in another terminal, simply make that terminal active and issue the ispy commands again.

It is recommended to install the python extension along with the ispy extension.

It is assumed that ipython executable is in the current path and can be run from the terminal as 'ipython'.  If this is not the case, then you can select an interpreter with 'Python: Select Interpreter' and then open a python terminal with 'Python: Create Terminal'.  You should now be able to run ipython in the current terminal.


