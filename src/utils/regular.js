/**
 * 匹配邮箱
 * 只允许英文字母、数字、下划线、英文句号、以及中划线组成
 * 26个大小写英文字母表示为a-zA-Z
 * 数字表示为0-9
 * 下划线表示为_
 * 中划线表示为-
 * 由于名称是由若干个字母、数字、下划线和中划线组成，所以需要用到+表示多次出现
 */
const testEmail = (str) => {
  let pattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return pattern.test(str);
}

export default {
  testEmail
}