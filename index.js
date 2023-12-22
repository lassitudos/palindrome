
const Roles = {
	user: "user",
	manager: "manager",
	palindrome: "aba"
}

// accepts strings
function checkIfPalindrome(role) {
    let stringified = role.toString()
    // reverse works with arrays. Split returns an array of chars ["u", "s", "e", "r"]
    // and we need to join it using separator

    return stringified == stringified.split("").reverse().join("")
}


checkIfPalindrome(Roles.user)
console.log("User is palindrome: " + checkIfPalindrome(Roles.user) + "; Manager is palindrome: " + checkIfPalindrome(Roles.manager) +
"; Real pal is palindrome: " + checkIfPalindrome(Roles.palindrome)
);
