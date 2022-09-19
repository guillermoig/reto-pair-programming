const dic = {
  // 1: "I",
  5: "V",
  10: "X",
  50: "L"
}

const toRomanNumber = (number) => {

  let result = ""
  Object.keys(dic).reverse().forEach(key => {
    if (number === key - 1) {
      result += "I" + dic[key]
      number -= key - 1
      return
    }

    if(number / key < 1) {
      return
    }

    if ((number / key) >= 1) {
      number -= key
      result += dic[key]
    }

  })

	return result + "I".repeat(number);
}

export default toRomanNumber
