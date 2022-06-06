// 1
function reverse_number(n) {
    let result = '';
    const temp = n.toString();
    for (let i = temp.length - 1; i >= 0; i -= 1) {
        result += temp[i];
    }
    return Number(result);
}

// console.log(reverse_number(32243));

// 2
function is_palindrome(s) {
    let start = 0,
        end = s.length - 1;
    while (start <= end) {
        while (start <= end && s[start] === ' ') {
            start += 1;
        }
        while (start <= end && s[end] === ' ') {
            end -= 1;
        }
        if (s[start] === s[end]) {
            start += 1;
            end -= 1;
        } else {
            return false;
        }
    }
    return true;
}

// console.log(is_palindrome("madam"));
// console.log(is_palindrome("nurses run"));

// 3
function generate_all_combinations(s) {
    const result = [];
    for (let i = 0; i < s.length; i += 1) {
        let j = i + 1;
        while (j <= s.length) {
            result.push(s.slice(i, j));
            j += 1;
        }
    }
    return result;
}

// console.log(generate_all_combinations("dog"));

// 4
function alphabetical(s) {
    const temp = s.split('');
    temp.sort((a, b) => a.localeCompare(b));
    return temp.join('');
}

// console.log(alphabetical("webmaster"));

// 5
function capitalize_every_word(s) {
    const temp = s.split(' ');
    temp.forEach((elem, index) => {
        temp[index] = elem[0].toUpperCase() + elem.slice(1);
    })
    return temp.join(' ');
}

// console.log(capitalize_every_word('the quick brown fox'));

// 6
function find_longest_word(s) {
    let longestIndex = 0,
        longestLength = 0;
    const temp = s.split(' ');
    for (let i = 0; i < temp.length; i += 1) {
        if (temp[i].length > longestLength) {
            longestLength = temp[i].length;
            longestIndex = i;
        }
    }
    return temp[longestIndex];
}

// console.log(find_longest_word('Web Development Tutorial'));

// 7
function count_vowels(s) {
    s = s.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
        i = 0;
    while (i < s.length) {
        if (vowels.indexOf(s[i]) !== -1) {
            count += 1;
        }
        i += 1;
    }
    return count;
}

// console.log(count_vowels('The quick brown fox'));

// 8
function is_prime(n) {
    const square_root = Math.floor(Math.sqrt(n));
    for (let i = 2; i < square_root + 1; i += 1) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

// console.log(is_prime(1));
// console.log(is_prime(2));
// console.log(is_prime(3));
// console.log(is_prime(4));
// console.log(is_prime(5));

// 9
function get_type(arg) {
    return typeof arg;
}

// 10
function create_identity_matrix(n) {
    const result = []
    for (let i = 0; i < n; i += 1) {
        const row = Array(n).fill(0);
        row[i] = 1;
        result.push(row);
    }
    return result;
}

// console.log(create_identity_matrix(5));

// 11
function find_second_lowest_and_greatest(arr) {
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}

// console.log(find_second_lowest_and_greatest([1, 2, 3, 4, 5]));

// 12
function is_perfect(n) {
    const factors = find_factors_of_number(n);
    const divisor_sum = factors.reduce((prev, curr) => prev + curr, 0);
    return divisor_sum === n * 2
}

// console.log(is_perfect(28));
// console.log(is_perfect(34));

// 13
function find_factors_of_number(n) {
    const result = [];
    for (let i = 1; i <= n; i += 1) {
        if (n % i === 0) {
            result.push(i);
        }
    }
    return result;
}

// console.log(find_factors_of_number(6));

// 14
function convert_to_coins(amount, coins) {
    coins.sort((a, b) => b - a);
    function recursive(amount, coins, result) {
        if (amount === 0 || coins.length === 0) {
            return result;
        }
        while (amount >= coins[0]) {
            result.push(coins[0]);
            amount -= coins[0];
        }
        coins.shift();
        return recursive(amount, coins, result)
    }

    const result = [];
    return recursive(amount, coins, result);
}

// console.log(convert_to_coins(46, [25, 10, 5, 2, 1]));

// 15
function compute_exponent() {
    const base = prompt("Please choose a base:");
    const exponent = prompt("Please choose an exponent:");
    return base ** exponent;
}

// 16
function extract_unique_characters(s) {
    const seen = []
    for (let i = 0; i < s.length; i += 1) {
        if (seen.indexOf(s[i]) === -1) {
            seen.push(s[i]);
        }
    }
    return seen.join('');
}

// console.log(extract_unique_characters("thequickbrownfoxjumpsoverthelazydog"));

// 17
function get_letter_occurrences(s) {
    const occurrences = {};
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] in occurrences) {
            occurrences[s[i]] += 1;
        } else {
            occurrences[s[i]] = 1;
        }
    }
    return occurrences;
}

// console.log(get_letter_occurrences("thequickbrownfoxjumpsoverthelazydog"));

// 18
function binary_search(arr, target) {
    arr.sort((a, b) => a - b);
    function recursive(arr, target, start, end) {
        if (start > end) {
            return false;
        }
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return true;
        }
        if (arr[mid] > target) {
            return recursive(arr, target, start, mid - 1);
        } else {
            return recursive(arr, target, mid + 1, end);
        }
    }
    return recursive(arr, target, 0, arr.length - 1);
}

// 19
function find_elements_larger_than_target(arr, target) {
    return arr.filter((elem) => elem > target);
}

// 20
function generate_string_id(char_list, length) {
    function create_random_index(limit){
        return Math.floor(Math.random() * limit)
    }
    let result = '';
    for (let i = 0; i < length; i += 1) {
        result += char_list[create_random_index(char_list.length)];
    }
    return result;
}

// console.log(generate_string_id("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 10));

// 21
function get_all_subset(arr, length) {
    
}

// console.log(get_all_subset([1,2,3], 2));

// 22
function count_letter_occurrences_in_string(s, l) {
    let count = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === l) {
            count += 1;
        }
    }

    return count;
}

// console.log(count_letter_occurrences_in_string('microsoft.com', 'o'));


// 23
function find_first_not_repeated_character(s) {
    const visited = {};
    let i = 0;
    while (i < s.length) {
        const currChar = s[i];
        if (s.indexOf(currChar) === i && s.indexOf(currChar, i + 1) === -1) {
            return s[i];
        } 
        i += 1;
    }
    return '_';
}

// console.log(find_first_not_repeated_character('abacddbec'));

// 24
function bubble_sort(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < (arr.length - i - 1); j += 1) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// 25
function longest_country_name(arr) {
    let longestIndex = 0,
        longestLength = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].length > longestLength) {
            longestIndex = i;
            longestLength = arr[i].length;
        }
    }
    return arr[longestIndex];
}

// console.log(longest_country_name(["Australia", "Germany", "United States of America"]));

// 26
function longest_substring_without_repeating_character(s) {
    let start = 0,
        maxLength = 0,
        maxStart = 0,
        maxEnd = 0;
    const charIndexMap = {};
    for (let end = 0; end < s.length; end += 1) {
        const newChar = s[end];
        if (newChar in charIndexMap) {
            start = Math.max(start, charIndexMap[newChar] + 1);
        }
        charIndexMap[newChar] = end;
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxStart = start;
            maxEnd = end;
        }
    }
    return s.slice(maxStart, maxEnd + 1);
}

// console.log(longest_substring_without_repeating_character('aabccbb'));
// console.log(longest_substring_without_repeating_character('abbbb'));
// console.log(longest_substring_without_repeating_character('abccde'));

// 27
function longest_palindrome_in_string(s) {
    function longest_palindrome(s, left, right) {
        let currStr = '';
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            currStr = s.slice(left, right + 1);
            left -= 1;
            right += 1;
        }
        return currStr;
    }
    
    
    let result = '';
    for (let i = 0; i < s.length; i += 1) {
        const odd = longest_palindrome(s, i, i);
        if (odd.length > result.length) {
            result = odd;
        }
        const even = longest_palindrome(s, i, i + 1);
        if (even.length > result.length) {
            result = even;
        }
    }
    return result;
}

// console.log(longest_palindrome_in_string("babad"));
// console.log(longest_palindrome_in_string("cbbd"));

// 28
function pass_function_as_paramter(func) {
    return func;
}

// 29
function get_function_name(func) {
    return func.name;
}

// console.log(get_function_name(pass_function_as_paramter));