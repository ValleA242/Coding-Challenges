function century(year) {
  let yearArr = Array.from(String(year),Number)
  let century = yearArr.slice(0,yearArr.length - 2).join('')
  let yearNum = yearArr.slice(2,yearArr.length).join('')
  if(yearArr.length <= 2){
    return 1
  }else if(yearNum >= 1){
    return Number(century) + 1
    } else {
        return Number(century);
    }
 
}
