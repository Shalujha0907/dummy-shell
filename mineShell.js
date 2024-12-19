const homePrompt = 'fun-fake-shell ';
const showAllFiles = [];

let presentWorkingDirectory = [];
let promptCommand = homePrompt;

const changeDirectory = function (args) {
  promptCommand = homePrompt + ' ' + args[0].split('/').at(-1);
  presentWorkingDirectory.push(args);
};

const generateFile = function (args) {
  showAllFiles.push(args);
};

const commandsToExecute = function (commands, args) {
  switch (commands) {
    case 'echo': return args.join(' ');

    case 'cd': return changeDirectory(args);

    case 'touch': return generateFile(args[0]);

    case 'ls': return showAllFiles.join("   ");

    case 'pwd': return presentWorkingDirectory.join('/');

    default: return 'zsh: command not found: ' + args;
  }
};

while (true) {
  const userPrompt = prompt(promptCommand + '%');
  const inputs = userPrompt.split(' ');
  const [commands, ...args] = inputs;
  const executedResult = commandsToExecute(commands, args);

  if (executedResult !== undefined) {
    console.log(executedResult);
  }
}