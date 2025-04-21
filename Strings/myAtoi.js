var myAtoi = function(s) {
    const INT_MAX = Math.pow(2, 31) - 1; // 2147483647
    const INT_MIN = -Math.pow(2, 31);    // -2147483648

    let i = 0;
    const n = s.length;

    // 1. 跳过前导空格
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. 检查符号
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }

    // 3. 解析数字
    let result = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';

        // 检查溢出
        if (result > Math.floor(INT_MAX / 10) || 
            (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return (sign === 1) ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};

// 测试用例
console.log(myAtoi("21474836460"));      // 输出: 2147483647 (INT_MAX)
console.log(myAtoi("   -42"));           // 输出: -42
console.log(myAtoi("4193 with words"));  // 输出: 4193
console.log(myAtoi("words and 987"));    // 输出: 0
console.log(myAtoi("-91283472332"));     // 输出: -2147483648 (INT_MIN)
console.log(myAtoi("   +0 123"));        // 输出: 0