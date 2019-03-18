# ispy README

ispy = ipython + vscode

Simple extension to work with ipython within vscode.  Provides the beginnings of a Spyder-like expereience within vscode. 

## Features

ispy.run (ctrl+enter):  Executes the active .py file in the currently running ipython terminal.
ispy.start (ctrl+i):  Convenience function to start ipython in the the active terminal

The extension also contributes key-bindings to open and switch betweent the editor and the terminal by using 'ctrl+`' (ctrl+backtick).  To close the terminal use 'ctrl+j'.

## Requirements

The user is responsible for having an ipython terminal up and running before issuing the command 'ispy: Run File'.  This can be as simple as opening up the terminal and running 'ipython' from the command line.  A convenicence command for doing this is ispy: Start IPython Interpreter' or using the shortcut "ctrl+i".

After ipython is running, simply issue the command 'ispy: Run File' or use the shortcut 'ctrl+enter' and the active .py file will be executed in the ipython terminal.  The user can then continue to work in the ipython terminal interactively, including using all of the %magic commands that ipython offers.  For example, use $who to see user defined and variables and %clear to clear the currently defined variables. 

It is possible to have more than one ipython terminal running at a given time.  The command 'ispy: Run File' simply runs the python code referenced in the active editior in the currently acive terminal.  If you want to run the code in another terminal, simply make that terminal active and issue the 'ispy: Run File' command again.

It is recommended to install the python extension along with the ispy extension.

It is assumed that ipython executable is in the current path and can be run from the terminal as 'ipython'.  If this is not set in the path, then you can select an interpreter with 'Python: Select Interpreter' and then open a python terminal with 'Python: Create Terminal'.  You should now be able to run ipython in the current terminal.

