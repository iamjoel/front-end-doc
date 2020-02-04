export default function deepJsonParse (obj, defaultValue = {}) {
  try {
    if (typeof obj === 'string') {
      let res = JSON.parse(obj)
      return typeof res === 'string' ? deepJsonParse(res) : res
    } else {
      return obj
    }
  } catch (e) {
    return {}
  }
}
