var takeANumber = (line, name) =>{
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

var nowServing = (line) => {
  if (line.length > 0){
    name = line.shift();
    return `Currently serving ${name}.`;
  }else{
    return 'There is nobody waiting to be served!';
  }
}

var currentLine = (line) =>{
  if (line.length > 0){
    var line_string = "The line is currently: ";
    for (var i=0; i < line.length; i++){
      line_string = line_string + `${i+1}. ${line[i]}, `
    }
    return line_string.slice(0, line_string.length-2)
  }else{
    return 'The line is currently empty.'
  }
}
;
