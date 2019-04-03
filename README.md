# ispy README

ispy = ipython + vscode

Simple minimalistic extension to work with ipython within vscode.

## Features

- ispy: Run File in Ipython Terminal (`ctrl+enter`)  
Executes the active .py file in the currently running ipython terminal.

- ispy: Run Selection/Line in Ipython Terminal (`ctrl+shift+enter`)  
Executes the active selection or the text on the active line in the ipython terminal.

- ispy: Create Ipython Terminal
Convenience function to create an ipython terminal or start ipython within an exisiting terminal.

- The extension contributes key-bindings to open and switch between the editor and the terminal by using `ctrl+`\` (ctrl+backtick).  To close the terminal use `ctrl+j`.

- It is possible to have more than one ipython terminal running at a given time.  If you want to run the code in another terminal, simply make that terminal active and issue the ispy commands again.

## Requirements

- It is the users responsibility to ensure `ipython` is running in an active terminal before issuing `ispy` commands.  This can be as simple as running `ipython` within a terminal.  The convenience command `ispy: Create Ipython Terminal` can be used for this purpose.

- After `ipython` is running, simply issue the ispy commands to send the file or selected text to the active terminal.  The user can then continue to work in the ipython terminal interactively, including using all of the `%magic` commands that `ipython` offers. Use `$lsmagic` within the `ipython` terminal to get a list of the magic commands.  

- It is recommended to install the python extension along with the ispy extension.


## Extension Settings
- runmagic

## Known Issues

- If `python` is already running in the active terminal, then you will need to close it and start `ipython`.

- It is assumed that the `ipython` executable is in the current path and can be run from the terminal as `ipython`.  If this is not the case, then you can select an inerpreter with `Python: Select Interpreter` and then open a python terminal with `Python: Create Terminal`.  This should make it so `ipython` is in your path.  You should now be able to run `ipython` in the current terminal.


## Release Notes

### 0.0.1

- Initial release

### 0.0.2

- Added command to execute the active selection or the text on the active line in the ipython terminal

- Configuration settings
    * ispy.cmdargs.ipython: Specifies the flags for `ipython`.
    * ispy.cmdargs.runmagic: Specifies the flags for ipython `%run` magic command


