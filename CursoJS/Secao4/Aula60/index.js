function recursiva(max = 1){
  console.log(max)


  if (max >= 10) return

  max++;
  recursiva(max)
}

recursiva(0)