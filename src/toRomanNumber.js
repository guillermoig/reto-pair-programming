const dic = {
  1: "I",
  5: "V",
  10: "X",
  50: "L"
}

const toRomanNumber = (number) => {
  if(number=== 9) return "IX"
  if(number === 4) return "IV"

  let result = ""
  Object.keys(dic).reverse().forEach(key => {
    if(number / key < 1) {
      return
    }

    number -= key
    result += dic[key]
  })
  
	return result + "I".repeat(number);
}

export default toRomanNumber
