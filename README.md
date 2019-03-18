# ispy README

ispy = ipython + vscode

Simple extension to work with ipython within vscode.  Provides the beginnings of a Spyder-like expereience within vscode. 

## Features

ispy.run:  Executes the active .py file in the currently running ipython terminal.
ispy.start:  Convenience function to start ipython in the the active terminal

## Requirements

The user is responsible for having an ipython terminal up and running before issuing the command "ispy.run".  This can be as simple as opening up the terminal and running "ipython".  A convenicence command for doing this is "ispy:start" or using the shortcut "ctrl+i".

After ipython is running, simply issue the command 'ispy.run' or use the shortcut 'ctrl+enter' and the active .py file will be executed in the ipython terminal.  The user can then continue to work in the ipython terminal interactively, including all of the %magic commands that ipython offers.  For example, use $who to see user defined and variables and %clear to clear the currently defined variables. 

It is possible to have more than one ipython terminal running at a given time.  The command 'ispy.run' simply runs the python code in the ative editior in the acive terminal.  If you want to run the code in another terminal, simply make that terminal active and issue the 'ispy:run' command again.
