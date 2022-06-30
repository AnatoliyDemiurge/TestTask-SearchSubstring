let str = "aabbbbccdde"
let longestSubstring = (element) => {
    let count = 1;
    let longestCount = 0
    let longestArray = []
    let index = 0
    elementArray = element.split('')
    elementArray.map((sign, defaultValue) => {
        if (sign == elementArray[defaultValue+1]){
          count++
          if (count > longestCount){
            longestCount = count
            index = defaultValue - longestCount + 2
          }
        }
        else{
          count = 1
        }
    }
  )
  console.log(`Длина самой большой подсктроки: ${longestCount},индекс самой большой подстроки: ${index}`)}
longestSubstring(str)